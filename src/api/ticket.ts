import axios from "axios";
import BASE_URL from "./base-url";
export const create = async (data: any) => {
    try {
        const res = await BASE_URL.post("/ticket", data);
        return res.data;
    } catch (error) {
        throw error;
    }
}

export const getAll = async (userId:string, status:number) => {
    try {
        const res = await BASE_URL.get(`/ticket/user/${userId}/${status}`);
        return res.data;
    } catch (error) {
        throw error;
    }
}

export const getById = async (id: string) => {
    try {
        const res = await BASE_URL.get(`/ticket/${id}`);
        return res.data;
    } catch (error) {
        throw error;
    }
}

export const reply = async (replyData: any) => {
    try {
        const res = await BASE_URL.post(`/ticket-reply/create`, replyData);
        return res.data;
    } catch (error) {
        throw error;
    }
}

export const repliesToken = async (ticketId: any) => {
    try {
        const res = await BASE_URL.get(`/ticket-reply/ticket/${ticketId}`);
        return res.data;
    } catch (error) {
        throw error;
    }
}

export const close = async (id: string) => {
    try {
        const res = await BASE_URL.put(`/ticket/${id}/close`, {});
        return res.data;
    } catch (error) {
        throw error;
    }
}


export const updateUsdPrice = async () => {
  try {
    const { data } = await axios.get("https://open.er-api.com/v6/latest/USD");
    const usdToInr = data?.rates?.INR;
    if (!usdToInr) {
      throw new Error("INR rate not found");
    }
    const res = await BASE_URL.post(`/currency/create`, {usdToInr});
    return res.data;
  } catch (error) {
    console.error("❌ Failed to update USD price:", error);
  }
};



export const getUsdPrice = async () => {
    try {
        const res = await BASE_URL.get(`/currency/get-currency`);
        return res.data;
    } catch (error) {
        throw error;
    }
}