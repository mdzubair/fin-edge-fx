import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialAccountState, type AccountData } from "../../interfaces";
import * as accountApi from "../../api/account";

interface AccountResponse {
  success: boolean;
  message: string;
  data: AccountData;
}

interface AccountListResponse {
  success: boolean;
  message: string;
  data: AccountData[];
}

// Get Account List By User ID
export const fetchAccountByUserId = createAsyncThunk<
  AccountListResponse,
  string,
  { rejectValue: string }
>(
  "account/list",
  async (userId, { rejectWithValue }) => {
    try {
      return await accountApi.fetchAccountByUserId(userId);
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch account list"
      );
    }
  }
);


// Get Account List By User ID
export const fetchAdminAccount = createAsyncThunk<
  AccountListResponse,
  void,
  { rejectValue: string }
>(
  "account/admin-account-list",
  async (__, { rejectWithValue }) => {
    try {
      return await accountApi.fetchAdminAccount();
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch account list"
      );
    }
  }
);

// Get Single Account
export const getSingleAccount = createAsyncThunk<
  AccountResponse,
  string,
  { rejectValue: string }
>(
  "account/details",
  async (userId, { rejectWithValue }) => {
    try {
      return await accountApi.getPayAccDetailById(userId);
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch account details"
      );
    }
  }
);

// Add Account
export const addAccount = createAsyncThunk<
  AccountResponse,
  FormData,
  { rejectValue: string }
>(
  "account/add",
  async (formData, { rejectWithValue }) => {
    try {
      return await accountApi.store(formData);
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to add account"
      );
    }
  }
);

interface AccountPayload {
  rowId: string;
  status: number;
}

// Change Account Status
export const updateAccountStatus = createAsyncThunk<
  AccountResponse,
  AccountPayload,
  { rejectValue: string }
>(
  "account/changeStatus",
  async ({ rowId, status }, { rejectWithValue }) => {
    try {
      return await accountApi.updateStatus(rowId, status);
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to update account status"
      );
    }
  }
);

// Change Account delete
export const deleteAccountById = createAsyncThunk<AccountResponse, string, { rejectValue: string }>( "account/delete",  async (rowId, { rejectWithValue }) => {
    try {
      return await accountApi.destroy(rowId);
    } catch (error: any) {
      return rejectWithValue( error?.response?.data?.message || error?.message || "Failed to delete account");
    }
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState: initialAccountState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // Account List
      .addCase(fetchAccountByUserId.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchAccountByUserId.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.accounts = action.payload.data;
      })
      .addCase(fetchAccountByUserId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch account list";
      })

      .addCase(fetchAdminAccount.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchAdminAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.accounts = action.payload.data;
      })
      .addCase(fetchAdminAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch account list";
      })

      // Single Account
      .addCase(getSingleAccount.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getSingleAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.account = action.payload.data;
      })
      .addCase(getSingleAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch account details";
      })

      // Add Account
      .addCase(addAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(addAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;

        if (state.accounts) {
          state.accounts.unshift(action.payload.data);
        }
      })
      .addCase(addAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to add account";
      })

      // Change Status
    .addCase(updateAccountStatus.pending, (state) => {
      state.loading = true;
    })
    .addCase(updateAccountStatus.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    })
    .addCase(updateAccountStatus.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to update status";
    })


    // Delete Account
    .addCase(deleteAccountById.pending, (state) => {
      state.loading = true;
    })
    .addCase(deleteAccountById.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    })
    .addCase(deleteAccountById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to delete account";
    })

  },
});

export default accountSlice.reducer;