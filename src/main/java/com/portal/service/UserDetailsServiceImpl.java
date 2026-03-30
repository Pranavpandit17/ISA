package com.portal.service;

import com.portal.entity.User;
import com.portal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.Collections;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String usernameOrEmail) throws UsernameNotFoundException {
        if (usernameOrEmail == null || usernameOrEmail.trim().isEmpty()) {
            throw new UsernameNotFoundException("Username or email cannot be empty");
        }
        
        String trimmed = usernameOrEmail.trim();
        
        // Try to find by email first (case-insensitive), then by exact email match, then by username
        User user = userRepository.findByEmailIgnoreCase(trimmed)
                .orElse(userRepository.findByEmail(trimmed)
                        .orElse(userRepository.findByUsername(trimmed)
                                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + trimmed))));

        // Use email as username in UserDetails so authentication.getName() returns email
        return org.springframework.security.core.userdetails.User.builder()
                .username(user.getEmail()) // Store email as username in UserDetails
                .password(user.getPasswordHash())
                .authorities(getAuthorities(user))
                .accountExpired(false)
                .accountLocked(false)
                .credentialsExpired(false)
                .disabled(!user.getIsActive())
                .build();
    }

    private Collection<? extends GrantedAuthority> getAuthorities(User user) {
        return Collections.singletonList(new SimpleGrantedAuthority("ROLE_" + user.getRole().name()));
    }
}

