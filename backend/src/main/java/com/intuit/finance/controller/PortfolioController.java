package com.intuit.finance.controller;

import com.intuit.finance.dto.HoldingRequest;
import com.intuit.finance.model.Holding;
import com.intuit.finance.repository.HoldingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/portfolio")
@RequiredArgsConstructor
public class PortfolioController {

    private final HoldingRepository holdingRepository;

    @GetMapping("/{userId}/holdings")
    public ResponseEntity<List<Holding>> getHoldings(@PathVariable Long userId) {
        return ResponseEntity.ok(holdingRepository.findByUserId(userId));
    }

    @PostMapping("/{userId}/holdings")
    public ResponseEntity<?> addHolding(@PathVariable Long userId, @RequestBody HoldingRequest request) {
        // TODO: Convert to entity and assign to user, save
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{userId}/analyze")
    public ResponseEntity<?> analyzePortfolio(@PathVariable Long userId) {
        // TODO: Call OrchestratorService -> PortfolioAnalysisAgent + RecommendationAgent
        return ResponseEntity.ok().build();
    }
}
