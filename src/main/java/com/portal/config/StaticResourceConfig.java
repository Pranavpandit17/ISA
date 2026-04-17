package com.portal.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

import java.io.IOException;

@Configuration
public class StaticResourceConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // IMPORTANT: Set order to LOWEST_PRECEDENCE so controllers are matched FIRST
        // This ensures API routes (/api/**) are handled by controllers before static resources
        registry.setOrder(org.springframework.core.Ordered.LOWEST_PRECEDENCE);
        
        // Serve assets directory - MUST come before other patterns
        // This handles /assets/gallery/1.png, etc.
        registry.addResourceHandler("/assets/**")
                .addResourceLocations("classpath:/static/assets/", "classpath:/static/browser/assets/")
                .resourceChain(true);
        
        // Serve specific static files (JS, CSS, images, etc.) from /static/
        // These patterns are specific enough to not conflict with API routes
        registry.addResourceHandler(
                "/index.html",
                "/*.js",
                "/*.css",
                "/*.ico",
                "/*.png",
                "/*.jpg",
                "/*.jpeg",
                "/*.gif",
                "/*.svg",
                "/*.woff",
                "/*.woff2",
                "/*.ttf",
                "/*.eot"
        )
        .addResourceLocations("classpath:/static/", "classpath:/static/browser/")
        .resourceChain(true);
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        // Redirect root to index.html for Angular routing
        // Always register - if index.html doesn't exist, it will return 404 which is expected
        registry.addViewController("/").setViewName("forward:/index.html");
    }
}

