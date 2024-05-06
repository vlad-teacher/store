import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './shop-slice';


export const store = configureStore({
    reducer: {
        shop: shopReducer
    }
});
