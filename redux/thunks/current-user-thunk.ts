import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCurrentUser = createAsyncThunk(
  "/user/fetchCurrentUser",
  async () => {
    const response = await axios.get("/api/users");
    return response.data.user;
  }
);
