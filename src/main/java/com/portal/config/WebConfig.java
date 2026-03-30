package com.portal.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    // CORS configuration is handled by SecurityConfig to avoid conflicts
    
    @Override
    public void configurePathMatch(PathMatchConfigurer configurer) {
        // Ensure API routes are matched correctly
        // This helps Spring MVC prioritize controller mappings over static resources
        configurer.setUseTrailingSlashMatch(false);
    }
}

