import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serverUrl } from "../serverUrl";

const initialState = {
  massage: [],
  loading: false,
  error: null,
};

export const getMassage = createAsyncThunk(
  "massage/get",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/massage`);
      const massage = await res.json();

      if (massage.error) {
        return thunkAPI.rejectWithValue(massage.error);
      }
      return thunkAPI.fulfillWithValue(massage);
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const massageSlice = createSlice({
  name: "massage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMassage.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getMassage.pending, (state, action) => {
        state.error = null;
        state.massage = state.massage.map((item) => {
          if (item._id === action.payload._id) {
            item.loading = true;
          }
          return item;
        });
        state.loading = true;
      })
      .addCase(getMassage.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.massage = action.payload;
      });
  },
});

export default massageSlice.reducer;
