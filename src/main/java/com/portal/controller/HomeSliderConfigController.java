package com.portal.controller;

import com.portal.entity.HomeSliderImage;
import com.portal.service.HomeSliderConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/home-slider")
public class HomeSliderConfigController {

    @Autowired
    private HomeSliderConfigService homeSliderConfigService;

    @GetMapping
    public ResponseEntity<Map<String, Object>> getHomeSliderConfig() {
        List<HomeSliderImage> images = homeSliderConfigService.getAllImages();
        List<String> imageUrls = homeSliderConfigService.getImageUrls(images);
        Map<String, Object> response = new HashMap<>();
        response.put("id", null);
        response.put("imageUrl", imageUrls.isEmpty() ? null : imageUrls.get(0)); // backward compatibility
        response.put("imageUrls", imageUrls);
        response.put("images", images.stream().map(img -> {
            Map<String, Object> item = new HashMap<>();
            item.put("id", img.getId());
            item.put("imageUrl", img.getImageUrl());
            item.put("updatedAt", img.getUpdatedAt());
            return item;
        }).toList());
        response.put("updatedAt", images.isEmpty() ? null : images.get(images.size() - 1).getUpdatedAt());
        return ResponseEntity.ok(response);
    }

    @PutMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Map<String, Object>> updateHomeSliderImage(
            @RequestPart("images") List<MultipartFile> images
    ) throws IOException {
        List<HomeSliderImage> updatedImages = homeSliderConfigService.updateImages(images);
        List<String> imageUrls = homeSliderConfigService.getImageUrls(updatedImages);
        Map<String, Object> response = new HashMap<>();
        response.put("id", null);
        response.put("imageUrl", imageUrls.isEmpty() ? null : imageUrls.get(0));
        response.put("imageUrls", imageUrls);
        response.put("images", updatedImages.stream().map(img -> {
            Map<String, Object> item = new HashMap<>();
            item.put("id", img.getId());
            item.put("imageUrl", img.getImageUrl());
            item.put("updatedAt", img.getUpdatedAt());
            return item;
        }).toList());
        response.put("updatedAt", updatedImages.isEmpty() ? null : updatedImages.get(updatedImages.size() - 1).getUpdatedAt());
        response.put("message", "Home slider images updated successfully");
        return ResponseEntity.ok(response);
    }

    @PostMapping(value = "/paths", consumes = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Map<String, Object>> addHomeSliderImagePaths(
            @RequestBody ImagePathRequest request
    ) {
        List<String> paths = request != null ? request.imageUrls() : null;
        List<HomeSliderImage> updatedImages = homeSliderConfigService.addImagePaths(paths);
        List<String> imageUrls = homeSliderConfigService.getImageUrls(updatedImages);
        Map<String, Object> response = new HashMap<>();
        response.put("id", null);
        response.put("imageUrl", imageUrls.isEmpty() ? null : imageUrls.get(0));
        response.put("imageUrls", imageUrls);
        response.put("images", updatedImages.stream().map(img -> {
            Map<String, Object> item = new HashMap<>();
            item.put("id", img.getId());
            item.put("imageUrl", img.getImageUrl());
            item.put("updatedAt", img.getUpdatedAt());
            return item;
        }).toList());
        response.put("updatedAt", updatedImages.isEmpty() ? null : updatedImages.get(updatedImages.size() - 1).getUpdatedAt());
        response.put("message", "Home slider image paths inserted successfully");
        return ResponseEntity.ok(response);
    }

    @DeleteMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Map<String, Object>> deleteHomeSliderImage(
            @RequestParam("imageId") Long imageId
    ) {
        List<HomeSliderImage> updatedImages = homeSliderConfigService.deleteImageById(imageId);
        List<String> imageUrls = homeSliderConfigService.getImageUrls(updatedImages);
        Map<String, Object> response = new HashMap<>();
        response.put("id", null);
        response.put("imageUrl", imageUrls.isEmpty() ? null : imageUrls.get(0));
        response.put("imageUrls", imageUrls);
        response.put("images", updatedImages.stream().map(img -> {
            Map<String, Object> item = new HashMap<>();
            item.put("id", img.getId());
            item.put("imageUrl", img.getImageUrl());
            item.put("updatedAt", img.getUpdatedAt());
            return item;
        }).toList());
        response.put("updatedAt", updatedImages.isEmpty() ? null : updatedImages.get(updatedImages.size() - 1).getUpdatedAt());
        response.put("message", "Home slider image deleted successfully");
        return ResponseEntity.ok(response);
    }

    public record ImagePathRequest(List<String> imageUrls) {
    }
}
