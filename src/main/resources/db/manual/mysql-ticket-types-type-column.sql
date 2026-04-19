-- Run once on MySQL/MariaDB if ticket_types.type is ENUM and inserts fail with:
-- "Data truncated for column 'type'" when using FREE_MEMBER (or any new TicketTypeEnum value).
--
-- Converts type to VARCHAR so any STRING enum value from JPA fits.

ALTER TABLE ticket_types
  MODIFY COLUMN type VARCHAR(50) NOT NULL;
