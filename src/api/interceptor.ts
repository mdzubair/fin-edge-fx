

import { AxiosError, type InternalAxiosRequestConfig, } from "axios";

import BASE_URL from "./base-url";
import { store } from "../redux/store";
import {
  refreshAccessToken,
  updateAccessToken,
  logout,
} from "../redux/slice/auth";

interface RetryRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

/**
 * Request Interceptor
 * Adds access token to every request
 */
BASE_URL.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = store.getState().auth.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

/**
 * Response Interceptor
 * Refresh token on 401 and retry request
 */
BASE_URL.interceptors.response.use((response) => response, async (error: AxiosError) => {
    const originalRequest =  error.config as RetryRequestConfig;

    // Skip if no config available
    if (!originalRequest) {
      return Promise.reject(error);
    }

    // Refresh token API should not trigger itself
    const isRefreshRequest = originalRequest.url?.includes("/auth/refresh-token");

    if ( error.response?.status === 401 && !originalRequest._retry && !isRefreshRequest ) {
      originalRequest._retry = true;

      try {
        const refreshToken = store.getState().auth.refreshToken;
        if (!refreshToken) {
          store.dispatch(logout());
          window.location.href = "/login";
          return Promise.reject(error);
        }
        const result = await store.dispatch(refreshAccessToken(refreshToken)).unwrap();
        const newAccessToken =  result.accessToken;

        // Update Redux State
        store.dispatch(updateAccessToken(newAccessToken) );

        // Update Failed Request Header        
        originalRequest.headers.set("Authorization", `Bearer ${newAccessToken}`);
        // Retry Failed Request
        return BASE_URL(originalRequest);
      } catch (refreshError) {        
        store.dispatch(logout());
        // window.location.href = "/login";
        return Promise.reject( refreshError );
      }
    }

    return Promise.reject(error);
  }
);

export default BASE_URL;