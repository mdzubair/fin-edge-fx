
import type { ChangePasswordPayload } from "../interfaces";
import BASE_URL from "./base-url";

export const index = async () => {
  try {
    const response = await BASE_URL.get("/user");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const changeStatus = async (
  rowId: string,
  status: number
) => {
  try {
    const response = await BASE_URL.post(
      `/user/${rowId}/status`,
      { status }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (userId: string) => {
  try {
    const response = await BASE_URL.get(
      `/user/${userId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const resetPasswordApi = async (
  userId: string,
  password: string
) => {
  try {
    const response = await BASE_URL.put(
      `/user/${userId}/reset-password`,
      { password }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (
  userId: string,
  data: ChangePasswordPayload
) => {
  try {
    const response = await BASE_URL.put(
      `/user/${userId}/change-password`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProfile = async (
  userId: string,
  data: any
) => {
  try {
    const response = await BASE_URL.put(
      `/user/${userId}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (data: any) => {
  try {
    const response = await BASE_URL.post(
      "/user/register",
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const response = await BASE_URL.post(
      "/auth/login",
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const refreshToken = async (
  refreshToken: string
) => {
  try {
    const response = await BASE_URL.post(
      "/auth/refresh-token",
      { refreshToken }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const profile = async () => {
  try {
    const response = await BASE_URL.get(
      "/auth/profile"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (
  userId: string
) => {
  try {
    const response = await BASE_URL.delete(
      `/user/${userId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};



export const updateUserAccount = async ( userId: string, data: any) => {
  try {
    const response = await BASE_URL.put(`/user/${userId}/acc-type`,  data);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const logoutUser = async () => {
  return BASE_URL.post("/auth/logout", {}, { withCredentials: true, });
};