import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { S3Client } from "@aws-sdk/client-s3";
import dotenv from "dotenv";

dotenv.config();

// AWS Client configuration
// In production, these are automatically picked up from Lambda/EC2 IAM roles.
// For local development, make sure AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY are in .env
const config = {
  region: process.env.AWS_REGION || "ap-south-1"
};

// Initialize S3
export const s3Client = new S3Client(config);

// Initialize DynamoDB
const ddbClient = new DynamoDBClient(config);
export const docClient = DynamoDBDocumentClient.from(ddbClient, {
  marshallOptions: {
    removeUndefinedValues: true,
  },
});
