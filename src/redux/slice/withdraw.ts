import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as withdrawApi from "../../api/withdraw";
import { initialWithdrawState, type WithdrawData, type WithdrawFormPayload } from "../../interfaces";

interface WithdrawResponse {
  success: boolean;
  message: string;
  data: WithdrawData;
}

interface WithdrawListResponse {
  success: boolean;
  message: string;
  data: WithdrawData[];
}

interface WithdrawStatusPayload {
  rowId: string;
  status: number;
}

interface WithdrawListPayload {
  userId: string;
  status: number;
}
export const fetchWithdrawByUserId = createAsyncThunk<WithdrawListResponse, WithdrawListPayload, { rejectValue: string }
>("withdraw/list", async ({userId, status}, { rejectWithValue }) => {
    try {
      return await withdrawApi.fetchWithdrawByUser(userId, status);
    } catch (error: any) {
      return rejectWithValue( error?.response?.data?.message || error?.message || "Failed to fetch withdraw list");
    }
  }
);

export const getSingleWithdraw = createAsyncThunk<WithdrawResponse,string,{ rejectValue: string }>(
  "withdraw/details", async (rowId, { rejectWithValue }) => {
    try {
      return await withdrawApi.getWithdrawById(rowId);
    } catch (error: any) {
        return rejectWithValue( error?.response?.data?.message || error?.message || "Failed to fetch withdraw details");
    }
  }
);

// export const addWithdraw = createAsyncThunk<WithdrawResponse, WithdrawFormPayload, { rejectValue: string }>(
//   "withdraw/add",  async (data, { rejectWithValue }) => {
//     try {
//       return await withdrawApi.store(data);
//     } catch (error: any) {
//        return rejectWithValue( error?.response?.data?.message || error?.message || "Failed to fetch withdraw details");
//     }
//   }
// );


export const addWithdraw = createAsyncThunk<WithdrawResponse, WithdrawFormPayload, { rejectValue: string }>(
  "withdraw/add",  async (data, { rejectWithValue }) => {
    try {
      return await withdrawApi.store(data);
    } catch (error: any) {
       return rejectWithValue( error?.response?.data?.message || error?.message || "Failed to fetch withdraw details");
    }
  }
);

export const updateWithdrawStatus = createAsyncThunk<WithdrawResponse, WithdrawStatusPayload, { rejectValue: string }>("withdraw/changeStatus", async ({ rowId, status }, { rejectWithValue }) => {
    try {
      return await withdrawApi.updateStatus(rowId, status);
    } catch (error: any) {
        return rejectWithValue( error?.response?.data?.message || error?.message || "Failed to update withdraw status");      
    }
  }
);

const withdrawSlice = createSlice({
  name: "withdraw",
  initialState:initialWithdrawState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // Withdraw List
      .addCase(fetchWithdrawByUserId.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchWithdrawByUserId.fulfilled, (state, action) => {
        state.loading = false;
        state.withdraws = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(fetchWithdrawByUserId.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || "Failed to fetch withdraw list";
      })

      // Single Withdraw
      .addCase(getSingleWithdraw.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getSingleWithdraw.fulfilled, (state, action) => {
        state.loading = false;
        state.withdraw = action.payload.data;
      })
      .addCase(getSingleWithdraw.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || "Failed to fetch withdraw details";
      })

      // Add Withdraw
      .addCase(addWithdraw.pending, (state) => {
        state.loading = true;
      })
      .addCase(addWithdraw.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;

        state.withdraws.unshift(action.payload.data);
      })
      .addCase(addWithdraw.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || "Failed to create withdraw request";
      })

      // Update Status
      .addCase(updateWithdrawStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateWithdrawStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;

        state.withdraws = state.withdraws.map((withdraw) =>
          withdraw._id === action.payload.data._id
            ? action.payload.data
            : withdraw
        );

        if (
          state.withdraw &&
          state.withdraw._id === action.payload.data._id
        ) {
          state.withdraw = action.payload.data;
        }
      })
      .addCase(updateWithdrawStatus.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || "Failed to update withdraw status";
      })
  },
});

export default withdrawSlice.reducer;