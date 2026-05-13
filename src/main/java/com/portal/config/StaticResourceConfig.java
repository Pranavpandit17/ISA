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

        // User-generated uploads (event images, speaker avatars, etc.)
        registry.addResourceHandler("/uploads/**")
                .addResourceLocations("file:uploads/")
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
        .addResourceLocations(
                "classpath:/static/",
                "classpath:/static/browser/",
                "classpath:/static/dist/isa-angular/browser/"
        )
        .resourceChain(true);

        // Catch-all for Angular client-side routes (e.g. /home, /events/123 on browser refresh).
        // If the requested resource doesn't exist and isn't an API route, serve index.html.
        registry.addResourceHandler("/**")
                .addResourceLocations(
                        "classpath:/static/",
                        "classpath:/static/browser/",
                        "classpath:/static/dist/isa-angular/browser/"
                )
                .resourceChain(true)
                .addResolver(new PathResourceResolver() {
                    @Override
                    protected Resource getResource(String resourcePath, Resource location) throws IOException {
                        Resource requestedResource = location.createRelative(resourcePath);
                        if (requestedResource.exists() && requestedResource.isReadable()) {
                            return requestedResource;
                        }

                        // Preserve backend API handling.
                        if (resourcePath.startsWith("api/")) {
                            return null;
                        }

                        Resource indexFromDist = new ClassPathResource("/static/dist/isa-angular/browser/index.html");
                        if (indexFromDist.exists()) {
                            return indexFromDist;
                        }

                        Resource indexFromRoot = new ClassPathResource("/static/index.html");
                        if (indexFromRoot.exists()) {
                            return indexFromRoot;
                        }

                        Resource indexFromBrowser = new ClassPathResource("/static/browser/index.html");
                        if (indexFromBrowser.exists()) {
                            return indexFromBrowser;
                        }

                        return null;
                    }
                });
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        // Redirect root to index.html for Angular routing
        // Always register - if index.html doesn't exist, it will return 404 which is expected
        registry.addViewController("/").setViewName("forward:/index.html");
    }
}

