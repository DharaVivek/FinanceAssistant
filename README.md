# 🚀 Agentic AI Financial Advisor - Features

## 🟢 Phase 1: MVP (Must-Have)

| Priority | Feature Name | Description | Complexity | Assigned Agent(s) |
| :---: | :--- | :--- | :--- | :--- |
| **1** | **User Onboarding & Risk Profiling** | A guided 5-question wizard to assess budget, time horizon, risk tolerance, goals, and assets. Creates a dynamic 1–10 Risk Profile Score. | Low | Risk Assessment Agent |
| **2** | **Portfolio Builder & Analysis** | Ingests holdings to calculate current value, P&L, sector concentration, asset allocation breakdown (pie chart), and portfolio risk score. | Medium | Portfolio Analysis Agent |
| **3** | **Investment Allocation Recommendation** | AI-driven allocation advice across asset classes based on risk profile, budget, and horizon. Includes plain-language justifications. | Medium | Recommendation Agent (Orchestrated) |
| **4** | **Daily Market News & Impact Tags** | Fetches top financial headlines and specifically tags them with how they impact the user's current portfolio holdings (e.g. "⚠️ Impacts HDFC Bank"). | Medium | News Agent + Impact Mapper Agent |
| **5** | **Conversational AI Chat** | Natural-language chat interface for contextual, portfolio-specific Q&A (e.g., *"Is my portfolio too risky?"*). | Medium | Advisor Chat Agent |

---

## 🟡 Phase 2: Post-MVP (Good-to-Have)

| Priority | Feature Name | Description | Complexity | Assigned Agent(s) |
| :---: | :--- | :--- | :--- | :--- |
| **6** | **Comparison Tool (SIP vs Lump Sum vs Real Estate)** | Computes projected returns for various investment types (SIP in MF, Index Fund, Real Estate, FD/Bonds) with a comparison chart and break-even points. | Medium | Comparison Agent |
| **7** | **Portfolio Health Score Dashboard** | A composite score (0–100) generated from diversification, volatility, return delta, and sentiment. Displayed visually as a gauge. | Medium | N/A |
| **8** | **Rebalancing Alerts** | Automated flagging when a user's portfolio drifts beyond their recommended target allocations. | Low-Medium | N/A |

---

## 🔴 Phase 3: Future Roadmap (Advanced)

| Priority | Feature Name | Description | Complexity |
| :---: | :--- | :--- | :--- |
| **9** | **Sentiment-Driven Stock Scoring** | Aggregated NLP news sentiment scoring for user holdings (Bullish / Neutral / Bearish based on 7-day flow). | High |
| **10** | **Goal-Based Planning Module** | Input life goals (retirement, college) to reverse-engineer required monthly SIPs, cross-asset allocation, and risk budgets. | High |
| **11** | **Real-Time Price Integration** | WebSocket streaming updates via NSE/BSE feeds or external hooks for live P&L. | High |
| **12** | **Tax Optimization Suggestions** | Recommendations for tax-loss harvesting or LTCG/STCG planning based on holding periods and gains. | High |
