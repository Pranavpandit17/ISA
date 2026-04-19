-- payment plan delete clears historical payment rows' plan_id. The column must allow NULL
-- (Hibernate ddl-auto=update does this from MembershipPayment; with ddl-auto=validate, run once:)
ALTER TABLE membership_payments
    MODIFY COLUMN plan_id BIGINT NULL;
