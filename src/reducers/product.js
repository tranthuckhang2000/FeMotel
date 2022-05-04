import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    productItems: [],
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        loadProduct(state, action) {
            state.productItems = action.payload;
        },
    },
});

export const {loadProduct} = productSlice.actions;

export const fetchProduct = () => async (dispatch) => {
    // try{
    const res = await axios.get("http://localhost:3000/api/searchTechnique/aaa", {
        headers: {"Access-Control-Allow-Origin": "*"},
    });
    console.log(res);
    dispatch(loadProduct(res.data.point));
    // } catch(err){
    //     alert(err);
    // }
};

export default productSlice.reducer;
