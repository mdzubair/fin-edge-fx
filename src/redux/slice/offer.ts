import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createOffer,
  updateOffer,
  getOffers,
  getOfferById,
  changeStatus,
  destroy,
} from  "../../api/offer";

interface OfferState {
  loading: boolean;
  offers: any[];
  offer: any | null;
  error: string | null;
}

const initialState: OfferState = {
  loading: false,
  offers: [],
  offer: null,
  error: null,
};

// Create Offer
export const storeOffer = createAsyncThunk(
  "offer/store",
  async (data: any, thunkAPI) => {
    try {
      return await createOffer(data);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Failed to create offer"
      );
    }
  }
);

// Update Offer
export const editOffer = createAsyncThunk(
  "offer/update",
  async (
    payload: {
      id: string;
      data: any;
    },
    thunkAPI
  ) => {
    try {
      return await updateOffer(payload);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Failed to update offer"
      );
    }
  }
);

// Offer List
export const offerList = createAsyncThunk(
  "offer/list",
  async (_, thunkAPI) => {
    try {
      return await getOffers();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Failed to fetch offers"
      );
    }
  }
);

// Single Offer
export const offerDetails = createAsyncThunk(
  "offer/details",
  async (id: string, thunkAPI) => {
    try {
      return await getOfferById(id);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Failed to fetch offer"
      );
    }
  }
);


// Update User Status
export const updateOfferStatus = createAsyncThunk(
  "offer/updateStatus",
  async ({ userId, status }:{userId:string, status:number}, { rejectWithValue }) => {
    try {
      return await changeStatus(userId, status);
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to update status"
      );
    }
  }
);

// Change Account delete
export const deleteOfferById = createAsyncThunk( "offer/delete",  async (rowId:string, { rejectWithValue }) => {
    try {
      return await destroy(rowId);
    } catch (error: any) {
      return rejectWithValue( error?.response?.data?.message || error?.message || "Failed to delete offer");
    }
  }
);



const offerSlice = createSlice({
  name: "offer",
  initialState,
  reducers: {
    clearOffer: (state) => {
      state.offer = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // Create Offer
      .addCase(storeOffer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(storeOffer.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(storeOffer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Update Offer
      .addCase(editOffer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editOffer.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(editOffer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Offer List
      .addCase(offerList.pending, (state) => {
        state.loading = true;
      })
      .addCase(offerList.fulfilled, (state, action) => {
        state.loading = false;
        state.offers = action.payload?.data || [];
      })
      .addCase(offerList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Offer Details
      .addCase(offerDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(offerDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.offer = action.payload?.data;
      })
      .addCase(offerDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteOfferById.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteOfferById.fulfilled, (state, action) => {
        state.loading = false;
        state.offer = action.payload;
      })
      .addCase(deleteOfferById.rejected, (state) => {
        state.loading = false;
        // state.error = action.payload || "Failed to delete offer" as string|null;
      })
  },
});

export const { clearOffer } = offerSlice.actions;

export default offerSlice.reducer;