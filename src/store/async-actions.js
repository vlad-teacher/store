import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../constants";

export const getAllItems = createAsyncThunk(
  "shop/getAllItems",
  async (_, thunkApi) => {
    console.log(thunkApi);

    try {
      const rawData = await fetch(`${BASE_URL}/products/all`);
      const data = await rawData.json();

      return thunkApi.fulfillWithValue(data);
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const sendSaleData = createAsyncThunk(
  "shop/sendSaleData",
  async (formData, thunkApi) => {
    try {
      const serverResponse = await fetch(`${BASE_URL}/sale/send`, {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const data = await serverResponse.json();

      return thunkApi.fulfillWithValue(data);
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
