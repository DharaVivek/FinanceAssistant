package com.intuit.finance.service;

import com.intuit.finance.dto.AgentContext;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class ImpactMapperAgent {

    public void execute(AgentContext ctx) {
        log.info("Executing Impact Mapping...");
        // TODO: Map fetched news to the specific holdings of the user
    }
}
