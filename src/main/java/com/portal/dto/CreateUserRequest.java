package com.portal.dto;

import com.portal.entity.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CreateUserRequest {

    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String password; // raw password from client

    @NotBlank
    private String name;

    private String phone;
    private String company;
    private String avatarUrl;

    @NotNull
    private User.Role role; // ✅ SAME enum as entity

    private Boolean isActive = true;
}

