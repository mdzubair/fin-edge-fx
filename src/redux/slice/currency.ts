import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as ticketAPI from "../../api/ticket"

export const updateUsdPrice  = createAsyncThunk("reply/update-usd", async (_,{ rejectWithValue }) => {
    try {
      const response =  await ticketAPI.updateUsdPrice();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Something went wrong");
    }
  }
);

export const getUsdPrice  = createAsyncThunk("reply/usd-details", async (_,{ rejectWithValue }) => {
    try {
      const response =  await ticketAPI.getUsdPrice();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Something went wrong");
    }
  }
);



interface CurrencyState {
  loading: boolean;
  // currencies: any[];
  currency: any;
  error: string | null;
}

const initialState: CurrencyState = {
  loading: false,
  // currencies: [],
  currency:null,
  error: null,
};

const currencySlice = createSlice({
    name:"currency",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
    builder
      .addCase(updateUsdPrice.pending, (state) => {
        state.loading = true;
      })

      .addCase(updateUsdPrice.fulfilled, (state, action) => {
        state.loading = false;
        state.currency = action.payload;
      })

      .addCase(updateUsdPrice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getUsdPrice.pending, (state) => {
        state.loading = true;
      })

      .addCase(getUsdPrice.fulfilled, (state, action) => {
        state.loading = false;
        state.currency = action.payload;
      })

      .addCase(getUsdPrice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
    }

});

export default currencySlice.reducer;