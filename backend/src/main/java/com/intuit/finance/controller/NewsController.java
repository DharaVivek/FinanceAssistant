package com.intuit.finance.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/news")
@RequiredArgsConstructor
public class NewsController {

    @GetMapping("/{userId}/feed")
    public ResponseEntity<?> getPersonalizedNews(@PathVariable Long userId) {
        // TODO: Fetch news using NewsAgent and filter/tag via ImpactMapperAgent
        return ResponseEntity.ok().build();
    }
}
