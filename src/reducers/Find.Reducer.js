import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  motelItems: [],
  isLoading: true,
  error: "",
};

const findMotelSlice = createSlice({
  name: "find motel",
  initialState,
  reducers: {
    getStart: (state) => {
      state.isLoading = true;
    },
    getSuccess: (state, action) => {
      state.isLoading = false;
      state.motelItems = action.payload;
      // console.log("reducer: sent");
    },
    getError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getStart, getSuccess, getError } = findMotelSlice.actions;

export const findMotel =
  ({ name }) =>
  async (dispatch) => {
    dispatch(getStart());
    const formData = new FormData();
    formData.append("name" + name);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    try {
      dispatch(getStart);
      const res = await axios.post("http://localhost:3000/", formData, config);
      dispatch(getSuccess(res.data));
    } catch (err) {
      dispatch(getError(err));
    }
  };

export default findMotelSlice.reducer;
