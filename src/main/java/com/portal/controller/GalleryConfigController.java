package com.portal.controller;

import com.portal.entity.GalleryImage;
import com.portal.service.GalleryConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/gallery")
public class GalleryConfigController {

    @Autowired
    private GalleryConfigService galleryConfigService;

    @GetMapping
    public ResponseEntity<Map<String, Object>> getGalleryConfig() {
        List<GalleryImage> images = galleryConfigService.getAllImages();
        List<String> imageUrls = galleryConfigService.getImageUrls(images);
        Map<String, Object> response = buildResponse(images, imageUrls);
        return ResponseEntity.ok(response);
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Map<String, Object>> updateGalleryImages(
            @RequestPart("images") List<MultipartFile> images
    ) throws IOException {
        List<GalleryImage> updatedImages = galleryConfigService.updateImages(images);
        List<String> imageUrls = galleryConfigService.getImageUrls(updatedImages);
        Map<String, Object> response = buildResponse(updatedImages, imageUrls);
        response.put("message", "Gallery images updated successfully");
        return ResponseEntity.ok(response);
    }

    @DeleteMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Map<String, Object>> deleteGalleryImage(
            @RequestParam("imageId") Long imageId
    ) {
        List<GalleryImage> updatedImages = galleryConfigService.deleteImageById(imageId);
        List<String> imageUrls = galleryConfigService.getImageUrls(updatedImages);
        Map<String, Object> response = buildResponse(updatedImages, imageUrls);
        response.put("message", "Gallery image deleted successfully");
        return ResponseEntity.ok(response);
    }

    private Map<String, Object> buildResponse(List<GalleryImage> images, List<String> imageUrls) {
        Map<String, Object> response = new HashMap<>();
        response.put("id", null);
        response.put("imageUrl", imageUrls.isEmpty() ? null : imageUrls.get(0));
        response.put("imageUrls", imageUrls);
        response.put("images", images.stream().map(img -> {
            Map<String, Object> item = new HashMap<>();
            item.put("id", img.getId());
            item.put("imageUrl", img.getImageUrl());
            item.put("updatedAt", img.getUpdatedAt());
            return item;
        }).toList());
        response.put("updatedAt", images.isEmpty() ? null : images.get(images.size() - 1).getUpdatedAt());
        return response;
    }
}
