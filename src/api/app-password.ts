import type { FormPayloadData } from "../interfaces";
import BASE_URL from "./base-url";

export const generateAppCredentials = async (userId: string, data:FormPayloadData) => {
  try {
    const response = await BASE_URL.post(`/meta-app-password/${userId}/generate-credentials`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};