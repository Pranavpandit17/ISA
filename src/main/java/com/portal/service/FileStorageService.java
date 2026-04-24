package com.portal.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
import java.util.UUID;

@Service
public class FileStorageService {

    private static final Set<String> ALLOWED_IMAGE_TYPES = new HashSet<>(Arrays.asList( "image/jpeg", "image/png", "image/gif", "image/webp"));

    private final Path uploadRoot = Paths.get("uploads").toAbsolutePath().normalize();

    /**
     * Stores an image under uploads/{subdir}/ and returns a URL path served by StaticResourceConfig.
     */
    public String storePublicImage(MultipartFile file, String subdir) throws IOException {
        if (file == null || file.isEmpty()) {
            return null;
        }
        String contentType = file.getContentType();
        if (contentType == null || !ALLOWED_IMAGE_TYPES.contains(contentType.toLowerCase(Locale.ROOT))) {
            throw new IllegalArgumentException("Only JPEG, PNG, GIF, or WebP images are allowed");
        }
        String original = file.getOriginalFilename();
        String ext = extensionFromFilename(original, contentType);
        String filename = UUID.randomUUID().toString().replace("-", "") + ext;
        Path dir = uploadRoot.resolve(subdir).normalize();
        if (!dir.startsWith(uploadRoot)) {
            throw new IOException("Invalid upload path");
        }
        Files.createDirectories(dir);
        Path target = dir.resolve(filename);
        try (InputStream in = file.getInputStream()) {
            Files.copy(in, target, StandardCopyOption.REPLACE_EXISTING);
        }
        return "/uploads/" + subdir + "/" + filename;
    }

    private String extensionFromFilename(String originalFilename, String contentType) {
        if (originalFilename != null && originalFilename.contains(".")) {
            String ext = originalFilename.substring(originalFilename.lastIndexOf('.')).toLowerCase(Locale.ROOT);
            if (ext.length() <= 8 && ext.matches("\\.(jpe?g|png|gif|webp)")) {
                return ext;
            }
        }
        if ("image/jpeg".equalsIgnoreCase(contentType)) {
            return ".jpg";
        }
        if ("image/png".equalsIgnoreCase(contentType)) {
            return ".png";
        }
        if ("image/gif".equalsIgnoreCase(contentType)) {
            return ".gif";
        }
        return ".webp";
    }
}
