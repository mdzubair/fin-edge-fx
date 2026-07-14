import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  initialReceiptState,
  type ReceiptData,
} from "../../interfaces";
import * as receiptApi from "../../api/deposit";

interface ReceiptResponse {
  success: boolean;
  message: string;
  data: ReceiptData[];
}

interface ReceiptListPayload {
  userId: string;
  status: number;
}

// Receipt List
export const receiptList = createAsyncThunk<ReceiptResponse, ReceiptListPayload, { rejectValue: string }>("deposit/list", async ({userId, status}, { rejectWithValue }) => {
    try {
      const response = await receiptApi.index(userId, status);
      return response;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message || error?.message || "Failed to fetch eceipts");
    }
  }
);

// Change Receipt Status 
export const updateReceiptStatus = createAsyncThunk<any, { rowId: string; status: number }, { rejectValue: string }>("receipt/updateStatus",  async ({ rowId, status }, { rejectWithValue }) => {
    try {
      return await receiptApi.changeStatus(rowId, status);
    } catch (error: any) {
      return rejectWithValue( error?.response?.data?.message || error?.message || "Failed to update status");
    }
  }
);

//Upload Receipt
export const submitDeposit = createAsyncThunk<ReceiptResponse, FormData, { rejectValue: string }
>("deposit/submit", async (formData, { rejectWithValue }) => {
    try {
      const response = await receiptApi.uploadReceipt(formData);
      return response;
    } catch (error: any) {
      return rejectWithValue( error?.response?.data?.message || error?.message || "Failed to submit receipt" );
    }
  }
);

const depositSlice = createSlice({
  name: "deposit",
  initialState: initialReceiptState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Receipt List
      .addCase(receiptList.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(receiptList.fulfilled, (state, action) => {
        state.loading = false;
        state.receipts = action.payload.data;
      })
      .addCase(receiptList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to fetch receipts";
      })
      .addCase(updateReceiptStatus.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(updateReceiptStatus.fulfilled, (state, action) => {
        const updated = action.payload.data;
        const index = state.receipts.findIndex(receipt => receipt._id === updated._id);
        if (index !== -1) {
          state.receipts[index] = updated;
        }
      })

      .addCase(submitDeposit.pending, (state) => {
        state.loading = true;
        state.error = "";
      })

      .addCase(submitDeposit.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;       
      })

      .addCase(submitDeposit.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to upload receipt";
      });
  },
});

export default depositSlice.reducer;