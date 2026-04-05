package com.intuit.finance.dto;

import com.intuit.finance.model.Holding;
import com.intuit.finance.model.RiskProfile;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class AgentContext {
    private Long userId;
    private String intent;
    private RiskProfile riskProfile;
    private List<Holding> holdings;
    private Object portfolioMetrics;
    private Object newsImpacts;
    private Object recommendations;
    private String chatResponse;
}
