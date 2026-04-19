package com.portal.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * Aligns MySQL {@code membership_payments.plan_id} with JPA optional {@code MembershipPayment.plan}:
 * the column must allow {@code NULL} so payment-plan deletes can detach historical rows.
 */
@Component
public class MembershipPaymentsPlanIdSchemaSupport {

    private static final Logger log = LoggerFactory.getLogger(MembershipPaymentsPlanIdSchemaSupport.class);

    private final JdbcTemplate jdbcTemplate;

    public MembershipPaymentsPlanIdSchemaSupport(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    /**
     * Runs outside any surrounding transaction so {@code ALTER TABLE} does not interact badly with JPA's transaction.
     */
    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    public void ensurePlanIdNullable() {
        final String isNullable;
        try {
            isNullable = jdbcTemplate.queryForObject(
                    """
                            SELECT IS_NULLABLE FROM INFORMATION_SCHEMA.COLUMNS
                            WHERE TABLE_SCHEMA = DATABASE()
                              AND TABLE_NAME = 'membership_payments'
                              AND COLUMN_NAME = 'plan_id'
                            """,
                    String.class);
        } catch (EmptyResultDataAccessException e) {
            log.debug("membership_payments.plan_id: column missing; skip nullable migration.");
            return;
        } catch (Exception e) {
            log.warn("Could not read membership_payments.plan_id nullability: {}", e.getMessage());
            return;
        }

        if (isNullable == null || "YES".equalsIgnoreCase(isNullable.trim())) {
            return;
        }

        try {
            log.info(
                    "Applying membership_payments.plan_id NULLable (required before clearing plan FK on delete).");
            jdbcTemplate.execute(
                    "ALTER TABLE membership_payments MODIFY COLUMN plan_id BIGINT NULL");
            log.info("membership_payments.plan_id is now NULLable.");
        } catch (Exception e) {
            log.error(
                    "ALTER TABLE membership_payments MODIFY COLUMN plan_id BIGINT NULL failed. Apply "
                            + "src/main/resources/db/manual/mysql-membership-payments-plan-nullable.sql manually.",
                    e);
            throw new IllegalStateException(
                    "Cannot delete payment plan until membership_payments.plan_id allows NULL. "
                            + "Apply mysql-membership-payments-plan-nullable.sql or fix the DB error logged above.",
                    e);
        }
    }
}
