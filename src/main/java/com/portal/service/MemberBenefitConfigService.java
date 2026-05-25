package com.portal.service;

import com.portal.entity.MemberBenefitImage;
import com.portal.repository.MemberBenefitImageRepository;
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
public class MemberBenefitConfigService {

    @Autowired
    private MemberBenefitImageRepository memberBenefitImageRepository;

    @Autowired
    private FileStorageService fileStorageService;

    public List<MemberBenefitImage> getAllImages() {
        ensureDisplayOrders();
        return memberBenefitImageRepository.findAllByOrderByDisplayOrderAscIdAsc();
    }

    public List<String> getImageUrls(List<MemberBenefitImage> images) {
        return images.stream()
                .map(MemberBenefitImage::getImageUrl)
                .filter(url -> url != null && !url.isBlank())
                .toList();
    }

    @Transactional
    public List<MemberBenefitImage> updateImages(List<MultipartFile> images) throws IOException {
        if (images == null || images.isEmpty()) {
            throw new IllegalArgumentException("At least one image file is required");
        }
        List<MemberBenefitImage> createdImages = new ArrayList<>();
        for (MultipartFile image : images) {
            if (image == null || image.isEmpty()) {
                continue;
            }
            String imageUrl = fileStorageService.storePublicImage(image, "member-benefits");
            MemberBenefitImage benefitImage = new MemberBenefitImage();
            benefitImage.setImageUrl(imageUrl);
            benefitImage.setDisplayOrder(nextDisplayOrder());
            createdImages.add(memberBenefitImageRepository.save(benefitImage));
        }
        if (createdImages.isEmpty()) {
            throw new IllegalArgumentException("At least one valid image file is required");
        }
        return getAllImages();
    }

    @Transactional
    public List<MemberBenefitImage> deleteImageById(Long imageId) {
        if (imageId == null) {
            throw new IllegalArgumentException("imageId is required");
        }
        if (!memberBenefitImageRepository.existsById(imageId)) {
            throw new IllegalArgumentException("Image not found in member benefits configuration");
        }
        memberBenefitImageRepository.deleteById(imageId);
        return getAllImages();
    }

    @Transactional
    public List<MemberBenefitImage> reorderImages(List<Long> orderedIds) {
        if (orderedIds == null || orderedIds.isEmpty()) {
            throw new IllegalArgumentException("imageIds is required");
        }
        List<MemberBenefitImage> all = memberBenefitImageRepository.findAll();
        if (orderedIds.size() != all.size()) {
            throw new IllegalArgumentException("imageIds must include every member benefit image exactly once");
        }
        Set<Long> existingIds = new HashSet<>();
        for (MemberBenefitImage image : all) {
            existingIds.add(image.getId());
        }
        if (!existingIds.equals(new HashSet<>(orderedIds))) {
            throw new IllegalArgumentException("imageIds must include every member benefit image exactly once");
        }
        for (int i = 0; i < orderedIds.size(); i++) {
            Long id = orderedIds.get(i);
            MemberBenefitImage image = memberBenefitImageRepository.findById(id)
                    .orElseThrow(() -> new IllegalArgumentException("Image not found: " + id));
            image.setDisplayOrder(i + 1);
            memberBenefitImageRepository.save(image);
        }
        return getAllImages();
    }

    private int nextDisplayOrder() {
        return memberBenefitImageRepository.findTopByOrderByDisplayOrderDesc()
                .map(img -> img.getDisplayOrder() + 1)
                .orElse(1);
    }

    @Transactional
    protected void ensureDisplayOrders() {
        List<MemberBenefitImage> images = memberBenefitImageRepository.findAllByOrderByDisplayOrderAscIdAsc();
        if (images.isEmpty()) {
            return;
        }
        boolean allUnset = images.stream()
                .allMatch(img -> img.getDisplayOrder() == null || img.getDisplayOrder() == 0);
        long distinctOrders = images.stream()
                .map(MemberBenefitImage::getDisplayOrder)
                .filter(Objects::nonNull)
                .distinct()
                .count();
        if (!allUnset && distinctOrders == images.size()) {
            return;
        }
        for (int i = 0; i < images.size(); i++) {
            MemberBenefitImage image = images.get(i);
            image.setDisplayOrder(i + 1);
            memberBenefitImageRepository.save(image);
        }
    }
}
