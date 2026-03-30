package com.portal.service;

import com.portal.dto.MemberCompanyDTO;
import com.portal.entity.Member;
import com.portal.entity.MemberCompany;
import com.portal.entity.User;
import com.portal.repository.MemberCompanyRepository;
import com.portal.repository.MemberRepository;
import com.portal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MemberCompanyService {

    @Autowired
    private MemberCompanyRepository companyRepository;

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private UserRepository userRepository;

    public List<MemberCompanyDTO> getMemberCompanies(Long memberId) {
        return companyRepository.findByMemberId(memberId).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public MemberCompanyDTO getCompanyById(Long id) {
        MemberCompany company = companyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Company not found"));
        return convertToDTO(company);
    }

    @Transactional
    public MemberCompanyDTO createCompany(MemberCompanyDTO dto, String email) { // Parameter is now email, not username
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        Member member = memberRepository.findById(user.getId())
                .orElseThrow(() -> new RuntimeException("Member not found"));

        // If this is set as primary, unset other primary companies
        if (dto.getIsPrimary() != null && dto.getIsPrimary()) {
            companyRepository.findByMemberId(member.getId()).forEach(c -> {
                if (c.getIsPrimary()) {
                    c.setIsPrimary(false);
                    companyRepository.save(c);
                }
            });
        }

        MemberCompany company = convertToEntity(dto);
        company.setMember(member);
        MemberCompany saved = companyRepository.save(company);
        return convertToDTO(saved);
    }

    @Transactional
    public MemberCompanyDTO updateCompany(Long id, MemberCompanyDTO dto, String email) { // Parameter is now email, not username
        MemberCompany company = companyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Company not found"));

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Verify ownership
        if (!company.getMember().getId().equals(user.getId())) {
            throw new RuntimeException("You are not authorized to update this company");
        }

        // If this is set as primary, unset other primary companies
        if (dto.getIsPrimary() != null && dto.getIsPrimary()) {
            companyRepository.findByMemberId(company.getMember().getId()).forEach(c -> {
                if (c.getIsPrimary() && !c.getId().equals(id)) {
                    c.setIsPrimary(false);
                    companyRepository.save(c);
                }
            });
        }

        company.setCompanyName(dto.getCompanyName());
        company.setRegistrationNumber(dto.getRegistrationNumber());
        company.setTaxId(dto.getTaxId());
        company.setAddress(dto.getAddress());
        company.setCity(dto.getCity());
        company.setState(dto.getState());
        company.setZipCode(dto.getZipCode());
        company.setCountry(dto.getCountry());
        company.setPhone(dto.getPhone());
        company.setEmail(dto.getEmail());
        company.setWebsite(dto.getWebsite());
        company.setDescription(dto.getDescription());
        company.setIndustry(dto.getIndustry());
        company.setCompanySize(dto.getCompanySize());
        if (dto.getIsPrimary() != null) {
            company.setIsPrimary(dto.getIsPrimary());
        }

        MemberCompany updated = companyRepository.save(company);
        return convertToDTO(updated);
    }

    @Transactional
    public void deleteCompany(Long id, String email) { // Parameter is now email, not username
        MemberCompany company = companyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Company not found"));

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Verify ownership
        if (!company.getMember().getId().equals(user.getId())) {
            throw new RuntimeException("You are not authorized to delete this company");
        }

        companyRepository.delete(company);
    }

    private MemberCompanyDTO convertToDTO(MemberCompany company) {
        MemberCompanyDTO dto = new MemberCompanyDTO();
        dto.setId(company.getId());
        dto.setMemberId(company.getMember().getId());
        dto.setCompanyName(company.getCompanyName());
        dto.setRegistrationNumber(company.getRegistrationNumber());
        dto.setTaxId(company.getTaxId());
        dto.setAddress(company.getAddress());
        dto.setCity(company.getCity());
        dto.setState(company.getState());
        dto.setZipCode(company.getZipCode());
        dto.setCountry(company.getCountry());
        dto.setPhone(company.getPhone());
        dto.setEmail(company.getEmail());
        dto.setWebsite(company.getWebsite());
        dto.setDescription(company.getDescription());
        dto.setIndustry(company.getIndustry());
        dto.setCompanySize(company.getCompanySize());
        dto.setIsPrimary(company.getIsPrimary());
        dto.setCreatedAt(company.getCreatedAt());
        dto.setUpdatedAt(company.getUpdatedAt());
        return dto;
    }

    private MemberCompany convertToEntity(MemberCompanyDTO dto) {
        MemberCompany company = new MemberCompany();
        company.setCompanyName(dto.getCompanyName());
        company.setRegistrationNumber(dto.getRegistrationNumber());
        company.setTaxId(dto.getTaxId());
        company.setAddress(dto.getAddress());
        company.setCity(dto.getCity());
        company.setState(dto.getState());
        company.setZipCode(dto.getZipCode());
        company.setCountry(dto.getCountry());
        company.setPhone(dto.getPhone());
        company.setEmail(dto.getEmail());
        company.setWebsite(dto.getWebsite());
        company.setDescription(dto.getDescription());
        company.setIndustry(dto.getIndustry());
        company.setCompanySize(dto.getCompanySize());
        company.setIsPrimary(dto.getIsPrimary() != null ? dto.getIsPrimary() : false);
        return company;
    }
}


