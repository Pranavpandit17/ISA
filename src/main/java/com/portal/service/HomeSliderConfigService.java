package com.portal.service;

import com.portal.entity.HomeSliderImage;
import com.portal.repository.HomeSliderImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class HomeSliderConfigService {

    @Autowired
    private HomeSliderImageRepository homeSliderImageRepository;

    @Autowired
    private FileStorageService fileStorageService;

    public List<HomeSliderImage> getAllImages() {
        return homeSliderImageRepository.findAllByOrderByIdAsc();
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
}
