package com.portal.controller;

import com.portal.dto.ImageOrderRequest;
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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
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
        return ResponseEntity.ok(buildResponse(images));
    }

    @PutMapping(value = "/order", consumes = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Map<String, Object>> reorderHomeSliderImages(
            @RequestBody ImageOrderRequest request
    ) {
        List<Long> imageIds = request != null ? request.imageIds() : null;
        List<HomeSliderImage> updatedImages = homeSliderConfigService.reorderImages(imageIds);
        Map<String, Object> response = buildResponse(updatedImages);
        response.put("message", "Home slider order updated successfully");
        return ResponseEntity.ok(response);
    }

    @PutMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Map<String, Object>> updateHomeSliderImage(
            @RequestPart("images") List<MultipartFile> images
    ) throws IOException {
        List<HomeSliderImage> updatedImages = homeSliderConfigService.updateImages(images);
        Map<String, Object> response = buildResponse(updatedImages);
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
        Map<String, Object> response = buildResponse(updatedImages);
        response.put("message", "Home slider image paths inserted successfully");
        return ResponseEntity.ok(response);
    }

    @DeleteMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Map<String, Object>> deleteHomeSliderImage(
            @RequestParam("imageId") Long imageId
    ) {
        List<HomeSliderImage> updatedImages = homeSliderConfigService.deleteImageById(imageId);
        Map<String, Object> response = buildResponse(updatedImages);
        response.put("message", "Home slider image deleted successfully");
        return ResponseEntity.ok(response);
    }

    private Map<String, Object> buildResponse(List<HomeSliderImage> images) {
        List<String> imageUrls = homeSliderConfigService.getImageUrls(images);
        Map<String, Object> response = new HashMap<>();
        response.put("id", null);
        response.put("imageUrl", imageUrls.isEmpty() ? null : imageUrls.get(0));
        response.put("imageUrls", imageUrls);
        response.put("images", images.stream().map(img -> {
            Map<String, Object> item = new HashMap<>();
            item.put("id", img.getId());
            item.put("imageUrl", img.getImageUrl());
            item.put("displayOrder", img.getDisplayOrder());
            item.put("updatedAt", img.getUpdatedAt());
            return item;
        }).toList());
        response.put("updatedAt", images.isEmpty() ? null : images.get(images.size() - 1).getUpdatedAt());
        return response;
    }

    public record ImagePathRequest(List<String> imageUrls) {
    }
}
