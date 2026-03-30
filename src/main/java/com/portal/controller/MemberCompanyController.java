package com.portal.controller;

import com.portal.dto.MemberCompanyDTO;
import com.portal.entity.User;
import com.portal.repository.UserRepository;
import com.portal.service.MemberCompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/member-companies")
@CrossOrigin(origins = "http://localhost:4200")
public class MemberCompanyController {

    @Autowired
    private MemberCompanyService companyService;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/my-companies")
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<List<MemberCompanyDTO>> getMyCompanies(Authentication authentication) {
        String email = authentication.getName(); // authentication.getName() now returns email
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return ResponseEntity.ok(companyService.getMemberCompanies(user.getId()));
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<MemberCompanyDTO> getCompanyById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(companyService.getCompanyById(id));
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<MemberCompanyDTO> createCompany(@RequestBody MemberCompanyDTO dto, Authentication authentication) {
        String email = authentication.getName(); // authentication.getName() now returns email
        return ResponseEntity.ok(companyService.createCompany(dto, email));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<MemberCompanyDTO> updateCompany(@PathVariable("id") Long id, @RequestBody MemberCompanyDTO dto, Authentication authentication) {
        String email = authentication.getName(); // authentication.getName() now returns email
        return ResponseEntity.ok(companyService.updateCompany(id, dto, email));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<Void> deleteCompany(@PathVariable("id") Long id, Authentication authentication) {
        String email = authentication.getName(); // authentication.getName() now returns email
        companyService.deleteCompany(id, email);
        return ResponseEntity.ok().build();
    }
}

