import { configureStore, combineReducers } from "@reduxjs/toolkit";
import currentChannelReducer from "./slices/current-channel";
import currentUserReducer from "./slices/current-user";
import { ChannelState } from "@/types/channel-state";
import { UserState } from "@/types/user-state";
import {
  persistReducer,
  persistStore,
  REGISTER,
  REHYDRATE,
  PURGE,
  FLUSH,
  PAUSE,
  PERSIST,
} from "redux-persist";

const rootReducer = combineReducers({
  currentChannel: currentChannelReducer,
  currentUser: currentUserReducer,
});

export type RootState = {
  currentChannel: ChannelState;
  currentUser: UserState;
};

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export const getCurrentChannelState = (state: RootState) =>
  state.currentChannel.currentChannel;

export const getCurrentUserState = (state: RootState) =>
  state.currentUser.currentUser;
