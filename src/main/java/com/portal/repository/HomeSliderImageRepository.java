package com.portal.repository;

import com.portal.entity.HomeSliderImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface HomeSliderImageRepository extends JpaRepository<HomeSliderImage, Long> {
    List<HomeSliderImage> findAllByOrderByDisplayOrderAscIdAsc();

    Optional<HomeSliderImage> findTopByOrderByDisplayOrderDesc();
}
