import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialDepositState, type DeipositSettlementFormPayload, type DepositData, } from "../../interfaces";
import * as settlementApi from "../../api/trade-settlemant";

interface DepositResponse {
  success: boolean;
  message: string;
  data: DepositData[];
}

interface DepositListPayload {
  userId: string;
  status: number;
}

// Settlement List
export const settlementList = createAsyncThunk<
  DepositResponse,
  DepositListPayload,
  { rejectValue: string }
>(
  "trade-settlement/list",
  async ({ userId, status }, { rejectWithValue }) => {
    try {
      return await settlementApi.index(userId, status);
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch settlement list"
      );
    }
  }
);

// Submit Settlement
export const submitSettlemntFunds = createAsyncThunk<DepositResponse, DeipositSettlementFormPayload, { rejectValue: string }
>("trade-settlement/submit",  async (data, { rejectWithValue }) => {
    try {
      return await settlementApi.fundCreditedDebeted(data);
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message || error?.message || "Failed to submit settlement funds" );
    }
  }
);




//Upload Receipt
export const createOnlineTransferDeposit = createAsyncThunk<DepositResponse, {
    userId: any;
    payBy: string | null;
    bankId: string;
    inrAmount: number;
    amount: number;
    declaration: boolean;
}, { rejectValue: string }
>("deposit/submit", async (reqData, { rejectWithValue }) => {
    try {
      const response = await settlementApi.createOnlineTransferDeposit(reqData);
      return response;
    } catch (error: any) {
      return rejectWithValue( error?.response?.data?.message || error?.message || "Failed to submit receipt" );
    }
  }
);


// Change Receipt Status 
export const updateDepositStatus = createAsyncThunk<any, { rowId: string; status: number }, { rejectValue: string }>("receipt/updateStatus",  async ({ rowId, status }, { rejectWithValue }) => {
    try {
      return await settlementApi.updateDepositStatus(rowId, status);
    } catch (error: any) {
      return rejectWithValue( error?.response?.data?.message || error?.message || "Failed to update status");
    }
  }
);



const tradeSettlementReducer = createSlice({
  name: "trade-settlement",
  initialState: initialDepositState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // Settlement List
      .addCase(settlementList.pending, (state) => {
        state.loading = true;
        state.error = "";
      })

      .addCase(settlementList.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.message = action.payload.message;
        state.deposits = action.payload.data;
      })

      .addCase(settlementList.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload ?? "Failed to fetch settlement list";
      })

      // Submit Settlement
      .addCase(submitSettlemntFunds.pending, (state) => {
        state.loading = true;
        state.error = "";
      })

      .addCase(submitSettlemntFunds.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.message = action.payload.message;
      })

      .addCase(submitSettlemntFunds.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload ?? "Failed to submit settlement funds";
      });
  },
});

export default tradeSettlementReducer.reducer;