package com.portal.repository;

import com.portal.entity.MemberCompany;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MemberCompanyRepository extends JpaRepository<MemberCompany, Long> {
    List<MemberCompany> findByMemberId(Long memberId);
}
