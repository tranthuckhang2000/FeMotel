import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const path = "http://localhost:3000/";
const initialState = {
  listAccount: [],
  isLoading: true,
  error: "",
  accountAvailable: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getStart: (state) => {
      state.isLoading = true;
    },
    getSuccess: (state, action) => {
      state.isLoading = false;
      state.listAccount = action.payload;
      // console.log("reducer: sent");
    },
    getError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getStart,
  getError,
  getSuccess,
  checkAccountAvailableFalse,
  checkAccountAvailableTrue,
} = productSlice.actions;

export const saveAccount =
  (fullName, email, phone, pass) => async (dispatch) => {
    try {
      dispatch(getStart());
      const obj = {
        name: "Ha Anh Tuan",
        job: "single",
        old: 37,
      };
      const res = await axios({
        method: "post",
        url: `${path}accounts`,
        data: {
          fullName,
          email,
          phone,
          pass,
        },
      });
      dispatch(getSuccess(res.data));
      console.log(res.data);
    } catch (err) {
      dispatch(getError(err));
    }
  };
export const getAllAccount = () => async (dispatch) => {
  try {
    dispatch(getStart());
    const res = await axios.get("http://localhost:3000/accounts", {});
    dispatch(getSuccess(res.data));
  } catch (err) {
    dispatch(getError(err));
  }
};



export default productSlice.reducer;
