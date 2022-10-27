import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './crypto/crypto';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});

export default store;
