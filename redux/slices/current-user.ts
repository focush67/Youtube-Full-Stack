import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchCurrentUser } from "../thunks/current-user-thunk";
import { UserState } from "@/types/user-state";
import { User } from "@prisma/client";

const initialState: UserState = {
  currentUser: null,
  loading: false,
  error: null,
};

const user = createSlice({
  name: "Current User",
  initialState,
  reducers: {
    addSubscriber: (
      state: UserState,
      action: PayloadAction<{ id: string }>
    ) => {
      const { id } = action.payload;
      state.currentUser?.subscribedChannelIds.push(id);
    },

    removeSubscriber: (
      state: UserState,
      action: PayloadAction<{ id: string }>
    ) => {
      const { id } = action.payload;
      if (state.currentUser && state.currentUser.subscribedChannelIds) {
        state.currentUser.subscribedChannelIds =
          state.currentUser?.subscribedChannelIds.filter(
            (userId) => userId !== id
          );
      }
    },

    addLike: (state: UserState, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      state.currentUser?.likedVideoIds.push(id);
    },

    removeLike: (state: UserState, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      if (state.currentUser && state.currentUser.likedVideoIds) {
        state.currentUser.likedVideoIds =
          state.currentUser.likedVideoIds.filter((videoId) => videoId !== id);
      }
    },

    addDislike: (state: UserState, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      state.currentUser?.dislikedVideoIds.push(id);
    },

    removeDisLike: (
      state: UserState,
      action: PayloadAction<{ id: string }>
    ) => {
      const { id } = action.payload;
      if (state.currentUser && state.currentUser.dislikedVideoIds) {
        state.currentUser.dislikedVideoIds =
          state.currentUser.dislikedVideoIds.filter(
            (videoId) => videoId !== id
          );
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.pending, (state: UserState) => {
        state.loading = true;
      })
      .addCase(
        fetchCurrentUser.fulfilled,
        (state: UserState, action: PayloadAction<User | null>) => {
          state.loading = false;
          state.currentUser = action.payload;
        }
      )
      .addCase(fetchCurrentUser.rejected, (state: UserState) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const {
  addSubscriber,
  removeSubscriber,
  addLike,
  removeLike,
  addDislike,
  removeDisLike,
} = user.actions;

export default user.reducer;
