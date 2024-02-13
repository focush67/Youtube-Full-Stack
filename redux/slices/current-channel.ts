import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchCurrentChannel } from "../thunks/current-channel-thunk";
import { ChannelState } from "@/types/channel-state";
import { Channel } from "@prisma/client";

const initialState: ChannelState = {
  currentChannel: null,
  loading: false,
  error: null,
};

const channel = createSlice({
  name: "Current Channel",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentChannel.pending, (state: ChannelState) => {
        state.loading = true;
      })
      .addCase(
        fetchCurrentChannel.fulfilled,
        (state: ChannelState, action: PayloadAction<Channel | null>) => {
          state.loading = false;
          state.currentChannel = action.payload;
        }
      )
      .addCase(fetchCurrentChannel.rejected, (state: ChannelState) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default channel.reducer;
