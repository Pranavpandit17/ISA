package com.portal.service;

import com.portal.entity.HomeSliderImage;
import com.portal.repository.HomeSliderImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@Service
public class HomeSliderConfigService {

    @Autowired
    private HomeSliderImageRepository homeSliderImageRepository;

    @Autowired
    private FileStorageService fileStorageService;

    public List<HomeSliderImage> getAllImages() {
        ensureDisplayOrders();
        return homeSliderImageRepository.findAllByOrderByDisplayOrderAscIdAsc();
    }

    @Transactional
    public List<HomeSliderImage> updateImages(List<MultipartFile> images) throws IOException {
        if (images == null || images.isEmpty()) {
            throw new IllegalArgumentException("At least one image file is required");
        }
        List<HomeSliderImage> createdImages = new ArrayList<>();
        for (MultipartFile image : images) {
            if (image == null || image.isEmpty()) {
                continue;
            }
            String imageUrl = fileStorageService.storePublicImage(image, "home-slider");
            HomeSliderImage sliderImage = new HomeSliderImage();
            sliderImage.setImageUrl(imageUrl);
            sliderImage.setDisplayOrder(nextDisplayOrder());
            createdImages.add(homeSliderImageRepository.save(sliderImage));
        }
        if (createdImages.isEmpty()) {
            throw new IllegalArgumentException("At least one valid image file is required");
        }
        return getAllImages();
    }

    public List<String> getImageUrls(List<HomeSliderImage> images) {
        return images.stream()
                .map(HomeSliderImage::getImageUrl)
                .filter(url -> url != null && !url.isBlank())
                .toList();
    }

    @Transactional
    public List<HomeSliderImage> addImagePaths(List<String> imagePaths) {
        if (imagePaths == null || imagePaths.isEmpty()) {
            throw new IllegalArgumentException("At least one image path is required");
        }
        for (String imagePath : imagePaths) {
            if (imagePath == null || imagePath.isBlank()) {
                continue;
            }
            HomeSliderImage sliderImage = new HomeSliderImage();
            sliderImage.setImageUrl(imagePath.trim());
            sliderImage.setDisplayOrder(nextDisplayOrder());
            homeSliderImageRepository.save(sliderImage);
        }
        return getAllImages();
    }

    @Transactional
    public List<HomeSliderImage> deleteImageById(Long imageId) {
        if (imageId == null) {
            throw new IllegalArgumentException("imageId is required");
        }
        if (!homeSliderImageRepository.existsById(imageId)) {
            throw new IllegalArgumentException("Image not found in slider configuration");
        }
        homeSliderImageRepository.deleteById(imageId);
        return getAllImages();
    }

    @Transactional
    public List<HomeSliderImage> reorderImages(List<Long> orderedIds) {
        if (orderedIds == null || orderedIds.isEmpty()) {
            throw new IllegalArgumentException("imageIds is required");
        }
        List<HomeSliderImage> all = homeSliderImageRepository.findAll();
        if (orderedIds.size() != all.size()) {
            throw new IllegalArgumentException("imageIds must include every slider image exactly once");
        }
        Set<Long> existingIds = new HashSet<>();
        for (HomeSliderImage image : all) {
            existingIds.add(image.getId());
        }
        if (!existingIds.equals(new HashSet<>(orderedIds))) {
            throw new IllegalArgumentException("imageIds must include every slider image exactly once");
        }
        for (int i = 0; i < orderedIds.size(); i++) {
            Long id = orderedIds.get(i);
            HomeSliderImage image = homeSliderImageRepository.findById(id)
                    .orElseThrow(() -> new IllegalArgumentException("Image not found: " + id));
            image.setDisplayOrder(i + 1);
            homeSliderImageRepository.save(image);
        }
        return getAllImages();
    }

    private int nextDisplayOrder() {
        return homeSliderImageRepository.findTopByOrderByDisplayOrderDesc()
                .map(img -> img.getDisplayOrder() + 1)
                .orElse(1);
    }

    @Transactional
    protected void ensureDisplayOrders() {
        List<HomeSliderImage> images = homeSliderImageRepository.findAllByOrderByDisplayOrderAscIdAsc();
        if (images.isEmpty()) {
            return;
        }
        boolean allUnset = images.stream()
                .allMatch(img -> img.getDisplayOrder() == null || img.getDisplayOrder() == 0);
        long distinctOrders = images.stream()
                .map(HomeSliderImage::getDisplayOrder)
                .filter(Objects::nonNull)
                .distinct()
                .count();
        if (!allUnset && distinctOrders == images.size()) {
            return;
        }
        for (int i = 0; i < images.size(); i++) {
            HomeSliderImage image = images.get(i);
            image.setDisplayOrder(i + 1);
            homeSliderImageRepository.save(image);
        }
    }
}
