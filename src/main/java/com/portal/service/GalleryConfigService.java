package com.portal.service;

import com.portal.entity.GalleryImage;
import com.portal.repository.GalleryImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class GalleryConfigService {

    @Autowired
    private GalleryImageRepository galleryImageRepository;

    @Autowired
    private FileStorageService fileStorageService;

    public List<GalleryImage> getAllImages() {
        return galleryImageRepository.findAllByOrderByIdAsc();
    }

    public List<String> getImageUrls(List<GalleryImage> images) {
        return images.stream()
                .map(GalleryImage::getImageUrl)
                .filter(url -> url != null && !url.isBlank())
                .toList();
    }

    @Transactional
    public List<GalleryImage> updateImages(List<MultipartFile> images) throws IOException {
        if (images == null || images.isEmpty()) {
            throw new IllegalArgumentException("At least one image file is required");
        }
        List<GalleryImage> createdImages = new ArrayList<>();
        for (MultipartFile image : images) {
            if (image == null || image.isEmpty()) {
                continue;
            }
            String imageUrl = fileStorageService.storePublicImage(image, "gallery");
            GalleryImage galleryImage = new GalleryImage();
            galleryImage.setImageUrl(imageUrl);
            createdImages.add(galleryImageRepository.save(galleryImage));
        }
        if (createdImages.isEmpty()) {
            throw new IllegalArgumentException("At least one valid image file is required");
        }
        return getAllImages();
    }

    @Transactional
    public List<GalleryImage> deleteImageById(Long imageId) {
        if (imageId == null) {
            throw new IllegalArgumentException("imageId is required");
        }
        if (!galleryImageRepository.existsById(imageId)) {
            throw new IllegalArgumentException("Image not found in gallery configuration");
        }
        galleryImageRepository.deleteById(imageId);
        return getAllImages();
    }
}
