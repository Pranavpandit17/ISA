package com.portal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {
    private String token;
    private String type = "Bearer";
    private Long id;
    private String username;
    private String email;
    private String name;
    private String role;
    private String userType; // ADMIN | PREMIUM | REGULAR
    private String membershipStatus; // ACTIVE | EXPIRED | INACTIVE | etc.
    private Long currentPlanId;
    private String currentPlanName;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public String getMembershipStatus() {
        return membershipStatus;
    }

    public void setMembershipStatus(String membershipStatus) {
        this.membershipStatus = membershipStatus;
    }

    public Long getCurrentPlanId() {
        return currentPlanId;
    }

    public void setCurrentPlanId(Long currentPlanId) {
        this.currentPlanId = currentPlanId;
    }

    public String getCurrentPlanName() {
        return currentPlanName;
    }

    public void setCurrentPlanName(String currentPlanName) {
        this.currentPlanName = currentPlanName;
    }


}

