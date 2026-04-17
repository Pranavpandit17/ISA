package com.portal.repository;

import com.portal.entity.HomeSliderConfig;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface HomeSliderConfigRepository extends JpaRepository<HomeSliderConfig, Long> {
    Optional<HomeSliderConfig> findTopByOrderByIdAsc();
}
