import BASE_URL from "./base-url";

export const createOffer = async (data: FormData) => {
  try {
    const response = await BASE_URL.post("/offer/create", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateOffer = async ({ id, data,}:{ id: string; data: FormData;}) => {
  try {
    const response = await BASE_URL.put(`/offers/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;    
  }
};

export const getOffers = async () => {
  try {
    const response = await BASE_URL.get("/offer");
    return response.data;
  } catch (error) {
    throw error;       
  }
};

export const getOfferById = async (id: string) => {
  try {
    const response = await BASE_URL.get(`/offer/${id}`);
    return response.data;
  } catch (error) {
    throw error;       
  }
};

export const changeStatus = async ( rowId: string, status: number) => {
  try {
    const response = await BASE_URL.put(`/offer/${rowId}/status`, { status });
    return response.data;
  } catch (error) {
    throw error;
  }
};


// Delete Offer
export const destroy = async (id: string) => {
  try {
    const response = await BASE_URL.delete(`/offer/${id}`);
    return response.data;
  } catch (error) {
    throw error;    
  }
};