import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addItem: (state, action) => {
            // console.log('add item', action.payload)
            const { id, size } = action.payload;
            const existingItem = state.find(item => item.id === id && item.size === size);
            if (existingItem) {
                existingItem.qty += 1;
            } else {
                state.push({ ...action.payload, qty: 1 });
            }
        },
        removeItem: (state, action) => {
            // console.log('remove item')
            const { id, size } = action.payload;
            const index = state.findIndex(item => item.id === id && item.size === size);
            if (index !== -1) {
                const item = state[index];
                if (item.qty > 1) {
                    item.qty -= 1;
                } else {
                    state.splice(index, 1);
                }
            }
        },
        setOrderFromCookie: (state, action) => {
            return action.payload;
        },
        resetOrder: () => initialState
    }
});

export const { addItem, removeItem, resetOrder, setOrderFromCookie } = orderSlice.actions;

export default orderSlice.reducer;

