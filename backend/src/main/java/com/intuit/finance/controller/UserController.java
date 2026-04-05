package com.intuit.finance.controller;

import com.intuit.finance.dto.RiskProfileRequest;
import com.intuit.finance.model.User;
import com.intuit.finance.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;

    @PostMapping("/onboard")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        return ResponseEntity.ok(userRepository.save(user));
    }

    @PostMapping("/{userId}/risk-profile")
    public ResponseEntity<?> submitRiskProfile(@PathVariable Long userId, @RequestBody RiskProfileRequest request) {
        // TODO: Map request to RiskProfile, calculate score, connect to RiskAssessmentAgent
        return ResponseEntity.ok().build();
    }
}
