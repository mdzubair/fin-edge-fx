import type { AccountData } from "../interfaces";
import BASE_URL from "./base-url"

export const getPayAccDetailById = async(userId:string) => {
    try {
        const response = await BASE_URL.get(`/account/pay-acc/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const fetchAccountByUserId = async(userId:string) => {
    try {
        const response = await BASE_URL.get(`/account/user/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}


export const fetchAdminAccount = async() => {
    try {
        const response = await BASE_URL.get(`/account/admin/account`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Create Account
export const store = async (data: FormData) => {
  try {
    const response = await BASE_URL.post(`/account/create`, data, { headers:{ "Content-Type":"application/form-data"}});
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get Single Account
export const show = async (id: string) => {
  try {
    const response = await BASE_URL.get(`/accounts/show/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update Account
export const update = async (id: string, data: Partial<AccountData>) => {
  try {
    const response = await BASE_URL.put(`/accounts/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Change Status (Active / Inactive)
export const updateStatus = async (id: string, status: number) => {
  try {
    const response = await BASE_URL.put(`/account/${id}/status`, { status });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete Account
export const destroy = async (id: string) => {
  try {
    const response = await BASE_URL.delete(`/account/${id}`);
    return response.data;
  } catch (error) {
    throw error;    
  }
};








// export const changeStatus = async ( rowId: string, status: number) => {
//   try {
//     const response = await BASE_URL.put(`/receipt/${rowId}/status`, { status });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
// Deposit ********************************
