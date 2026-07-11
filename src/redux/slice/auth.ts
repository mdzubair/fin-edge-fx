import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as userAPI from "../../api/user";
import { persistor } from "../store";

interface AuthState {
  user: any;
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
   isAuthenticated: boolean;
  error: string | null;
}

const initialLoginState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  loading: false,
  isAuthenticated: false,
  error: null,
};

export const loginUser = createAsyncThunk<
  any,
  { email: string; password: string },
  { rejectValue: string }
>(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response =  await userAPI.login(data);
      return response.data;
    } catch (error: any) {
      console.log(error);
      
      // return rejectWithValue(
      //   error?.response?.data?.message || "Login failed"
      // );
    }
  }
);


export const refreshAccessToken = createAsyncThunk( "auth/refreshToken",
  async (refreshToken: string, { rejectWithValue }) => {
    try {
      const response = await userAPI.refreshToken(refreshToken);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "Refresh failed"
      );
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logoutUser", async (_, { dispatch }) => {
    try {
      await userAPI.logoutUser();
    } catch (error) {
      console.log(error);
    }

    dispatch(logout());

    await persistor.purge();
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState:initialLoginState,

  reducers: {
    updateAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated= false,
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.isAuthenticated = false;
        state.error = null;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isAuthenticated = true;        
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload as string;
      })

      .addCase(refreshAccessToken.pending, (state) => {
        state.loading = true;
        state.isAuthenticated = true;
      })

      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.accessToken = action.payload.accessToken;
      })

      .addCase(refreshAccessToken.rejected, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
      });
  },
});

export const { updateAccessToken, logout } = authSlice.actions;

export default authSlice.reducer;





