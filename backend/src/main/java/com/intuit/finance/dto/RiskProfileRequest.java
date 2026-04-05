package com.intuit.finance.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class RiskProfileRequest {
    private BigDecimal budget;
    private Integer timeHorizonYears;
    private String riskTolerance; // Low, Medium, High
    private String financialGoal;
}
