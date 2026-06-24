import type { DeipositSettlementFormPayload } from "../interfaces";
import BASE_URL from "./base-url"

export const index = async(userId:string, status: string) => {
    try {
        const response = await BASE_URL.get(`/deposit/user/${userId}/${status}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Credit / Debit Settlement
export const fundCreditedDebeted = async (data: DeipositSettlementFormPayload) => {
     try {
       const response = await BASE_URL.post("/deposit/create", data);
        return response.data;
    } catch (error) {
        throw error;
    }
};