import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCurrentChannel = createAsyncThunk(
  "/channel/fetchCurrentChannel",
  async () => {
    const response = await axios.get("/api/channels");
    return response.data.channel;
  }
);
