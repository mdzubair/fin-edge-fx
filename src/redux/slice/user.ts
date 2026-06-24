import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as userAPI from "../../api/user";
import { initialState, type UserData } from "../../interfaces";

interface UsersResponse {
  success: boolean;
  message: string;
  data: UserData[];
}

interface UserResponse {
  success: boolean;
  message: string;
  data: UserData;
}

// Get All Users
export const userList = createAsyncThunk<
  UsersResponse,
  void,
  { rejectValue: string }
>(
  "user/user-list",
  async (_, { rejectWithValue }) => {
    try {
      return await userAPI.index();
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch users"
      );
    }
  }
);

// Get Single User
export const getUserById = createAsyncThunk<
  UserResponse,
  string,
  { rejectValue: string }
>(
  "user/details",
  async (userId, { rejectWithValue }) => {
    try {
      return await userAPI.getUserById(userId);
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch user"
      );
    }
  }
);

// Update User Status
export const updateUserStatus = createAsyncThunk<UserResponse,
  { userId: string; status: number },
  { rejectValue: string }
>(
  "user/updateStatus",
  async ({ userId, status }, { rejectWithValue }) => {
    try {
      return await userAPI.changeStatus(userId, status);
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to update status"
      );
    }
  }
);

export const resetPassword = createAsyncThunk("user/resetPassword", async ({ userId, password,}: { userId: string; password: string;}, { rejectWithValue }) => {
    try {
      return await userAPI.resetPasswordApi(userId, password);
    } catch (error: any) {
      return rejectWithValue( error?.response?.data?.message || "Failed to reset password" );
    }
  }
);

export const updatePassword = createAsyncThunk(
  "user/updatePassword",
  async (
    {
      userId,
      currentPassword,
      newPassword,
    }: {
      userId: string;
      currentPassword: string;
      newPassword: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await userAPI.changePassword(userId, {
        currentPassword,
        newPassword,
      });

      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          "Failed to change password"
      );
    }
  }
);


export const updateProfile = createAsyncThunk("user/updateProfile", async ({ userId, data }: { userId: string; data: any }, { rejectWithValue }) => {
    try {
      const response = await userAPI.updateProfile(userId, data);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to update profile"
      );
    }
  }
);

export const registerUser = createAsyncThunk("user/register",  async (data: any, { rejectWithValue }) => {
    try {
      const response = await userAPI.register(data);
      return response;
    } catch (error: any) {
      return rejectWithValue( error?.response?.data?.message ||"Registration failed");
    }
  }
);

export const deleteUser = createAsyncThunk< UserResponse, string, { rejectValue: string }>("user/delete",
  async (userId, { rejectWithValue }) => {
    try {
      return await userAPI.deleteUser(userId);
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch user"
      );
    }
  }
);


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // User List
      .addCase(userList.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(userList.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(userList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // User Details
      .addCase(getUserById.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Update Status
      .addCase(updateUserStatus.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(updateUserStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;

        const updatedUser = action.payload.data;

        const index = state.users.findIndex(
          (user) => user._id === updatedUser._id
        );

        if (index !== -1) {
          state.users[index] = updatedUser;
        }

        if (state.user?._id === updatedUser._id) {
          state.user = updatedUser;
        }
      })
      .addCase(updateUserStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
       .addCase(resetPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updatePassword.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(updateProfile.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = "";
      })

      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;