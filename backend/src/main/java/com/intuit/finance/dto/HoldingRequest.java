package com.intuit.finance.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class HoldingRequest {
    private String ticker;
    private String name;
    private String assetClass;
    private BigDecimal quantity;
    private BigDecimal avgBuyPrice;
}
