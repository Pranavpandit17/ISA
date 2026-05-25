package com.portal.controller;

import com.portal.dto.ImageOrderRequest;
import com.portal.entity.MemberBenefitImage;
import com.portal.service.MemberBenefitConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
@RequestMapping("/api/member-benefits")
public class MemberBenefitConfigController {

    @Autowired
    private MemberBenefitConfigService memberBenefitConfigService;

    @GetMapping
    public ResponseEntity<Map<String, Object>> getMemberBenefitConfig() {
        List<MemberBenefitImage> images = memberBenefitConfigService.getAllImages();
        return ResponseEntity.ok(buildResponse(images));
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Map<String, Object>> updateMemberBenefitImages(
            @RequestPart("images") List<MultipartFile> images
    ) throws IOException {
        List<MemberBenefitImage> updatedImages = memberBenefitConfigService.updateImages(images);
        Map<String, Object> response = buildResponse(updatedImages);
        response.put("message", "Member benefit images updated successfully");
        return ResponseEntity.ok(response);
    }

    @DeleteMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Map<String, Object>> deleteMemberBenefitImage(
            @RequestParam("imageId") Long imageId
    ) {
        List<MemberBenefitImage> updatedImages = memberBenefitConfigService.deleteImageById(imageId);
        Map<String, Object> response = buildResponse(updatedImages);
        response.put("message", "Member benefit image deleted successfully");
        return ResponseEntity.ok(response);
    }

    @PutMapping(value = "/order", consumes = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Map<String, Object>> reorderMemberBenefitImages(
            @RequestBody ImageOrderRequest request
    ) {
        List<Long> imageIds = request != null ? request.imageIds() : null;
        List<MemberBenefitImage> updatedImages = memberBenefitConfigService.reorderImages(imageIds);
        Map<String, Object> response = buildResponse(updatedImages);
        response.put("message", "Member benefits order updated successfully");
        return ResponseEntity.ok(response);
    }

    private Map<String, Object> buildResponse(List<MemberBenefitImage> images) {
        List<String> imageUrls = memberBenefitConfigService.getImageUrls(images);
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
}
