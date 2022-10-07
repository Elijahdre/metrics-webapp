import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const api = 'https://api.coincap.io/v2/assets?limit=7';
const FETCH_CRYPTO = 'crypto/FETCH_CRYPTO';

const fetchCrypto = createAsyncThunk(FETCH_CRYPTO, async () => {
  const response = await fetch(api);
  const { data } = await response.json();
  return (data);
});

const initialState = [];

const coinSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    fetchDetails(state, action) {
      return state.filter((crypto) => crypto.name === action.payload);
    },
  },
  extraReducers: {
    [fetchCrypto.fulfilled]: (state, action) => action.payload,
  },
});

export default coinSlice.reducer;
export const { fetchDetails } = coinSlice.actions;
export { fetchCrypto };
