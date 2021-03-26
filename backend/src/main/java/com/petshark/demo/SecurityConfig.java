package com.petshark.demo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Value("${authentication.credentials.user.username}")
    private String USER_USERNAME;
    @Value("${authentication.credentials.user.password}")
    private String USER_PASSWORD;
    @Value("${authentication.credentials.admin.username}")
    private String ADMIN_USERNAME;
    @Value("${authentication.credentials.admin.password}")
    private String ADMIN_PASSWORD;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().antMatchers("/api").hasAnyRole("ADMIN", "USER").and().httpBasic();

        http.authorizeRequests().antMatchers("/admin").hasRole("ADMIN").antMatchers("/**").permitAll().and()
                .formLogin();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication().withUser(ADMIN_USERNAME).password(passwordEncoder().encode(ADMIN_PASSWORD))
                .roles("ADMIN").and().withUser(USER_USERNAME).password(passwordEncoder().encode(USER_PASSWORD))
                .roles("USER");
    }
}