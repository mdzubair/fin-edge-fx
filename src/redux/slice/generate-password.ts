import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as appPassAPI from "../../api/app-password";
import {
  initialGenAppState,
  type FormPayloadData,
  type GenAppPayload,
} from "../../interfaces";

interface AppPassResponse {
  success: boolean;
  message: string;
  data: FormPayloadData;
}

export const saveCredentials = createAsyncThunk<
  AppPassResponse,
  GenAppPayload,
  { rejectValue: string }
>(
  "app/saveCredentials",
  async ({ userId, data }, { rejectWithValue }) => {
    try {
      return await appPassAPI.generateAppCredentials(userId, data);
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to generate credentials"
      );
    }
  }
);

const appPassSlice = createSlice({
  name: "app",
  initialState: initialGenAppState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(saveCredentials.pending, (state) => {
        state.loading = true;
        state.error = "";
      })

      .addCase(saveCredentials.fulfilled, (state, action) => {
        state.loading = false;
        state.appPassGen = action.payload.data;
        state.message = action.payload.message;
      })

      .addCase(saveCredentials.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || "Failed to generate credentials";
      });
  },
});

export default appPassSlice.reducer;