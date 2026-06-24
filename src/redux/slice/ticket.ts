import * as ticketAPI from "../../api/ticket"
import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit";
export const createTicket = createAsyncThunk("ticket/create",  async (reqData: any, { rejectWithValue }) => {
    try {
      return await ticketAPI.create(reqData);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export const getTickets = createAsyncThunk("ticket/getAll", async ({ userId, status }: { userId: string; status: number }, { rejectWithValue }) => {
    try {
      return await ticketAPI.getAll(userId, status);
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);

export const getTicket = createAsyncThunk("ticket/get", async (id: string, { rejectWithValue }) => {
    try {
      return await ticketAPI.getById(id);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export const replyTicket = createAsyncThunk("ticket/reply", async ({ replyData, }: { replyData: any;},  { rejectWithValue }) => {
    try {
      return await ticketAPI.reply(replyData);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export const closeTicket = createAsyncThunk("ticket/close", async (id: string, { rejectWithValue }) => {
    try {
      return await ticketAPI.close(id);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

interface TicketState {
  loading: boolean;
  tickets: any[];
  ticket: any;
  error: string | null;
}

const initialState: TicketState = {
  loading: false,
  tickets: [],
  ticket: null,
  error: null,
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(createTicket.pending, (state) => {
        state.loading = true;
      })

      .addCase(createTicket.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(createTicket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(getTickets.fulfilled, (state, action) => {
        state.tickets = action.payload.data;
      })

      .addCase(getTicket.fulfilled, (state, action) => {
        state.ticket = action.payload.data;
      });
  },
});

export default ticketSlice.reducer;