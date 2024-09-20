import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../apiFunction/fetch";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

const FetchApiSlice = createSlice({
  name: "fetchApi",
  initialState,
//   reducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      console.log("1", state);
      state.status = "pending";
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = "succeeded";
      console.log("sxgsxs", action);
      state.items = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      console.log("2", action);
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default FetchApiSlice.reducer;
