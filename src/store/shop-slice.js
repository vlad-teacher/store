import {createSlice} from '@reduxjs/toolkit';



const initialState = {
    category: null,
    items: [],
    isLoading: false,
    cart: []
};

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        setItems: (state, payload) => {
            state.items = payload;
        },
        setCategory: (state, payload) => {
            state.category = payload;
        },
        setIsLoading: (state, payload) => {
            state.isLoading = payload;
        }
    }
});


export const {setItems, setCategory, setIsLoading} = shopSlice.actions;

export default shopSlice.reducer;
