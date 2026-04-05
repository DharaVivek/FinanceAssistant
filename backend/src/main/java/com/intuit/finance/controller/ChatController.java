package com.intuit.finance.controller;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chat")
@RequiredArgsConstructor
public class ChatController {

    @PostMapping("/{userId}")
    public ResponseEntity<?> chat(@PathVariable Long userId, @RequestBody ChatRequest request) {
        // TODO: Invoke AdvisorChatAgent with portfolio context 
        return ResponseEntity.ok().build();
    }

    @Data
    public static class ChatRequest {
        private String message;
    }
}
