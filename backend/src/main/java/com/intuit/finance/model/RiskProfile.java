package com.intuit.finance.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Data
@NoArgsConstructor
public class RiskProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    private Integer score; // 1-10
    private String archetype; // Conservative, Moderate, Aggressive
    private BigDecimal budget;
    private Integer timeHorizonYears;
    private String financialGoal;
}
