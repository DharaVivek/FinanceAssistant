package com.intuit.finance.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Data
@NoArgsConstructor
public class Holding {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private String ticker;
    private String name;
    private String assetClass; // E.g. EQUITY, MUTUAL_FUND
    private BigDecimal quantity;
    private BigDecimal avgBuyPrice;
}
