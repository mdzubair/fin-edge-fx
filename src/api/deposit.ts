import BASE_URL from "./base-url"

export const index = async(userId:string, status: number) => {
    try {
        const response = await BASE_URL.get(`/receipt/user/${userId}/${status}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const changeStatus = async ( rowId: string, status: number) => {
  try {
    const response = await BASE_URL.put(`/receipt/${rowId}/status`, { status });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const uploadReceipt = async (formData: FormData) => {
  try {
    const response = await BASE_URL.post("/receipt",  formData, {
        headers: { "Content-Type": "multipart/form-data", },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
