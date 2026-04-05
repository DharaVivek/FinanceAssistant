// Base URL falls back to localhost if environment variable is not set
// (e.g., when deployed to AWS Lambda, VITE_API_BASE_URL will be set to the API Gateway URL)
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api";

export const ENDPOINTS = {
    // USERS
    ONBOARD: `/users/onboard`,
    RISK_PROFILE: (userId) => `/users/${userId}/risk-profile`,
    
    // PORTFOLIO
    GET_HOLDINGS: (userId) => `/portfolio/${userId}/holdings`,
    ADD_HOLDING: (userId) => `/portfolio/${userId}/holdings`,
    ANALYZE_PORTFOLIO: (userId) => `/portfolio/${userId}/analyze`,
    
    // NEWS
    GET_NEWS_FEED: (userId) => `/news/${userId}/feed`,
    
    // CHAT
    PROCESS_CHAT: (userId) => `/chat/${userId}`
};
