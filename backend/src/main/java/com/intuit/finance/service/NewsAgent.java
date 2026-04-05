package com.intuit.finance.service;

import com.intuit.finance.dto.AgentContext;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class NewsAgent {

    public void execute(AgentContext ctx) {
        log.info("Executing News Fetching...");
        // TODO: Call NewsAPI/Groq to fetch and summarize relevant finance news
    }
}
