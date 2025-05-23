import axios from "axios";

export const api = axios.create({
  baseURL: "https://slack-api.replit.app/api/v1"
})