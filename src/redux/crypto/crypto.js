import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const api = 'api.coincap.io/v2/assets?limit=12';
const FETCH_CRYPTO = 'crypto/FETCH_CRYPTO';

const initialState = [];

const fetchCrypto = createAsyncThunk(FETCH_CRYPTO, async() => {
  const response = await fetch(api);
  const { data } = await response.json(); 
  return(data);
});

const coinSlice = createSlice({
  name: 'crypto', initialState,
  reducers: {
    fetchDetails(state, action) {
      return state.filter((crypto) => crypto.name === action.payload);
    },
  },
  extraReducers: {
    [fetchCrypto.fulfilled] : (state, action) => action.payload;
  },
});

export default coinSlice.reducer;
export const { fetchDetails } = coinSlice.actions;
export { fetchCrypto };
