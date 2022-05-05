import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const path = "http://localhost:3000/";
const initialState = {
  listMotel: [],
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
      state.listMotel = action.payload;
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
      console.log(title);
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

export const getMotelById = (id) => async (dispatch) => {
  try {
    dispatch(getStart());
    const res = await axios.get(`${path}motels`, {});
    // console.log(id)
    for (let i = 0; i < res.data.length; i++) {
      // console.log(res.data[i].id == id);
      if (res.data[i].id == id) {
        dispatch(getSuccess(res.data[i]));
        // console.log(res.data[i])
      }
    }
  } catch (err) {
    dispatch(getError(err));
  }
};

export default motelSlice.reducer;
