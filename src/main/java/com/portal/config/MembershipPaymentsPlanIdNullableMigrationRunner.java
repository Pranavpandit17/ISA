package com.portal.config;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(1)
public class MembershipPaymentsPlanIdNullableMigrationRunner implements ApplicationRunner {

    private final MembershipPaymentsPlanIdSchemaSupport schemaSupport;

    public MembershipPaymentsPlanIdNullableMigrationRunner(MembershipPaymentsPlanIdSchemaSupport schemaSupport) {
        this.schemaSupport = schemaSupport;
    }

    @Override
    public void run(ApplicationArguments args) {
        schemaSupport.ensurePlanIdNullable();
    }
}
