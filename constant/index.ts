import * as dotenv from "dotenv";
dotenv.config();

const {
  FIREBASE_DATABASE_URL,
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  PORT,
} = process.env;

const baseURL = FIREBASE_DATABASE_URL;
const apiKey = FIREBASE_API_KEY;
const authDomain = FIREBASE_AUTH_DOMAIN;
const projectId = FIREBASE_PROJECT_ID;
const port = PORT;

export { baseURL, apiKey, authDomain, projectId, port };
