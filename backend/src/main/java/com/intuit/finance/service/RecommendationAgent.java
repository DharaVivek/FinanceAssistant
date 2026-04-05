package com.intuit.finance.service;

import com.intuit.finance.dto.AgentContext;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class RecommendationAgent {

    public void execute(AgentContext ctx) {
        log.info("Executing Allocation Recommendation...");
        // TODO: Assemble payload and prompt LLM to get allocation tips based on user risk
    }
}
