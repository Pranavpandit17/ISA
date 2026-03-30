package com.portal.util;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;

/**
 * Spring Boot CommandLineRunner to generate schema on application startup.
 * 
 * To use this, set the property: generate.schema=true
 * 
 * Example:
 * java -jar app.jar --generate.schema=true
 * 
 * Or in application.properties:
 * generate.schema=true
 */
@Component
@ConditionalOnProperty(name = "generate.schema", havingValue = "true")
public class SchemaGeneratorRunner implements CommandLineRunner {

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Generating database schema from JPA entities...");
        SchemaGenerator.generateSchema();
        System.out.println("Schema generation completed!");
        System.out.println("Please set generate.schema=false after generation to avoid regenerating on every startup.");
    }
}

