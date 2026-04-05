package com.intuit.finance.service;

import com.intuit.finance.dto.AgentContext;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class RiskAssessmentAgent {

    public void execute(AgentContext ctx) {
        log.info("Executing Risk Assessment...");
        // TODO: Implement risk score and archetype derivation
    }
}
