import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const path = "http://localhost:3000/";
const initialState = {
  motelMotel: [],
  isLoading: true,
  error: "",
};

const motelSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getStart: (state) => {
      state.isLoading = true;
    },
    getSuccess: (state, action) => {
      state.isLoading = false;
      state.motelMotel = action.payload;
      // console.log("reducer: sent");
    },
    getError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getStart, getError, getSuccess } = motelSlice.actions;

export const saveMotel =
  (title, phone, price, square, address, des) => async (dispatch) => {
    try {
      dispatch(getStart());
      console.log(title)
      const res = await axios({
        method: "post",
        url: `${path}motels`,
        data: {
          title,
          phone,
          price,
          square,
          address,
          des,
        },
      });
      dispatch(getSuccess(res.data));
      console.log(res.data);
    } catch (err) {
      dispatch(getError(err));
    }
  };
export const getAllMotel = () => async (dispatch) => {
  try {
    dispatch(getStart());
    const res = await axios.get(`${path}motels`, {});
    dispatch(getSuccess(res.data));
  } catch (err) {
    dispatch(getError(err));
  }
};

export default motelSlice.reducer;
