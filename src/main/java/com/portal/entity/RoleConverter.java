package com.portal.entity;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

/**
 * Converter to handle the mismatch between database enum (lowercase) 
 * and Java enum (uppercase).
 * 
 * Database stores: 'admin', 'member' (lowercase)
 * Java enum uses: ADMIN, MEMBER (uppercase)
 */
@Converter(autoApply = true)
public class RoleConverter implements AttributeConverter<User.Role, String> {

    @Override
    public String convertToDatabaseColumn(User.Role role) {
        if (role == null) {
            return null;
        }
        // Convert uppercase enum to lowercase for database
        return role.name().toLowerCase();
    }

    @Override
    public User.Role convertToEntityAttribute(String dbData) {
        if (dbData == null) {
            return null;
        }
        // Convert lowercase database value to uppercase enum
        try {
            return User.Role.valueOf(dbData.toUpperCase());
        } catch (IllegalArgumentException e) {
            return null;
        }
    }
}

