import * as ticketAPI from "../../api/ticket"
import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit";

export const getTicketReplies = createAsyncThunk("reply/token-reply", async (ticketId: string,{ rejectWithValue }) => {
    try {
      const response =  await ticketAPI.repliesToken(ticketId);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Something went wrong");
    }
  }
);



interface TicketState {
  loading: boolean;
  replies: any[];
  reply: any;
  error: string | null;
}

const initialState: TicketState = {
  loading: false,
  replies: [],
  reply:null,
  error: null,
};

const ticketReplySlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTicketReplies.pending, (state) => {
        state.loading = true;
      })

      .addCase(getTicketReplies.fulfilled, (state, action) => {
        state.loading = false;
        state.replies = action.payload;
      })

      .addCase(getTicketReplies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default ticketReplySlice.reducer;