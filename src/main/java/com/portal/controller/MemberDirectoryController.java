package com.portal.controller;

import com.portal.dto.MemberDTO;
import com.portal.service.MembershipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Member-facing directory API (authenticated members and admins).
 * Admin bulk list remains at {@code GET /api/membership/members}.
 */
@RestController
@RequestMapping("/api/member")
@CrossOrigin(origins = "http://localhost:4200")
public class MemberDirectoryController {

    @Autowired
    private MembershipService membershipService;

    @GetMapping("/directory")
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<List<MemberDTO>> getDirectoryMembers() {
        return ResponseEntity.ok(membershipService.getApprovedMembers());
    }
}
