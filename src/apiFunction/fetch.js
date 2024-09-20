import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fecthFunction", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  console.log(response);
  return response.json();
});
