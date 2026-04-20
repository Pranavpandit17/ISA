package com.portal.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Ensures {@code ticket_types.type} can store all {@link com.portal.entity.TicketType.TicketTypeEnum}
 * string values (e.g. {@code FREE_MEMBER}).
 * <p>
 * MySQL ENUM columns reject new values ("Data truncated for column 'type'"). Undersized
 * {@code VARCHAR(n)} columns truncate long names the same way. Hibernate {@code ddl-auto=update}
 * does not reliably widen such columns on existing databases.
 */
@Component
@Order(0)
public class TicketTypeSchemaMigrationRunner implements ApplicationRunner {

    private static final Logger log = LoggerFactory.getLogger(TicketTypeSchemaMigrationRunner.class);

    private static final Pattern VARCHAR_OR_CHAR_LENGTH =
            Pattern.compile("(?i)\\b(varchar|char)\\((\\d+)\\)");

    private final JdbcTemplate jdbcTemplate;

    public TicketTypeSchemaMigrationRunner(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public void run(ApplicationArguments args) {
        final String columnType;
        try {
            columnType = jdbcTemplate.queryForObject(
                    "SELECT COLUMN_TYPE FROM INFORMATION_SCHEMA.COLUMNS "
                            + "WHERE TABLE_SCHEMA = DATABASE() "
                            + "AND TABLE_NAME = 'ticket_types' "
                            + "AND COLUMN_NAME = 'type'",
                    String.class);
        } catch (EmptyResultDataAccessException e) {
            log.debug("ticket_types.type migration skipped: table or column not found yet.");
            return;
        } catch (Exception e) {
            log.warn("Could not read ticket_types.type from INFORMATION_SCHEMA: {}", e.getMessage());
            return;
        }

        if (columnType == null || columnType.isBlank()) {
            return;
        }

        String trimmed = columnType.trim();
        String upper = trimmed.toUpperCase(Locale.ROOT);
        if (!needsWiden(trimmed, upper)) {
            return;
        }

        try {
            log.info(
                    "Migrating ticket_types.type from [{}] to VARCHAR(50) for tier values like FREE_MEMBER.",
                    columnType);
            jdbcTemplate.execute("ALTER TABLE ticket_types MODIFY COLUMN type VARCHAR(50) NOT NULL");
            log.info("ticket_types.type migration completed.");
        } catch (Exception e) {
            log.error(
                    "ALTER TABLE ticket_types MODIFY COLUMN type VARCHAR(50) failed. Apply the SQL in "
                            + "src/main/resources/db/manual/mysql-ticket-types-type-column.sql manually, then restart.",
                    e);
        }
    }

    private static boolean needsWiden(String columnType, String upper) {
        if (upper.startsWith("ENUM")) {
            return true;
        }
        Matcher m = VARCHAR_OR_CHAR_LENGTH.matcher(columnType);
        if (!m.find()) {
            return false;
        }
        int len = Integer.parseInt(m.group(2));
        return len < 50;
    }
}
