package com.intuit.finance.service;

import com.intuit.finance.dto.AgentContext;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.concurrent.CompletableFuture;

@Service
@RequiredArgsConstructor
@Slf4j
public class OrchestratorService {

    private final RiskAssessmentAgent riskAssessmentAgent;
    private final PortfolioAnalysisAgent portfolioAnalysisAgent;
    private final NewsAgent newsAgent;
    private final ImpactMapperAgent impactMapperAgent;
    private final RecommendationAgent recommendationAgent;

    public AgentContext executePipeline(AgentContext ctx) {
        log.info("Starting Orchestration for User: {}", ctx.getUserId());

        // Step 1: Risk & Portfolio
        riskAssessmentAgent.execute(ctx);
        portfolioAnalysisAgent.execute(ctx);

        // Step 2: News
        newsAgent.execute(ctx);

        // Step 3: Map impact
        impactMapperAgent.execute(ctx);

        // Step 4: Recommendations
        recommendationAgent.execute(ctx);

        return ctx;
    }
}
