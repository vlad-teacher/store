import {createSlice} from '@reduxjs/toolkit';
import { getAllItems, sendSaleData } from './async-actions';

const initialState = {
    category: null,
    items: [],
    isLoading: false,
    cart: [],
    error: null,
    discountApplied: false
};

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        setItems: (state, {payload}) => {
            state.items = payload;
        },
        setCategory: (state, {payload}) => {
            state.category = payload;
        },
        setIsLoading: (state, {payload}) => {
            state.isLoading = payload;
        },
        setLiked: (state, {payload: id}) => {
            state.items = state.items.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        isLiked: true
                    }
                } else {
                    return item;
                }
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllItems.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getAllItems.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.items = payload;
        })
        builder.addCase(getAllItems.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
        builder.addCase(sendSaleData.fulfilled, (state, action) => {
            if (action.payload.status === 'OK') {
                state.discountApplied = true;
            }
        })
    }
});


export const {setItems, setCategory, setIsLoading,setLiked} = shopSlice.actions;

export default shopSlice.reducer;
