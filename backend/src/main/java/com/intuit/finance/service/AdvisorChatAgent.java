package com.intuit.finance.service;

import com.intuit.finance.dto.AgentContext;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class AdvisorChatAgent {

    public void execute(AgentContext ctx) {
        log.info("Executing Conversational AI chat...");
        // TODO: Stream/process conversational chat injecting the portfolio context to the LLM
    }
}
