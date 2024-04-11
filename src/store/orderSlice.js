// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

// export const orderSlice = createSlice({
//     name: 'order',
//     initialState,
//     reducers: {
//         addItem: (state, action) => {
//             const index = state.findIndex(item => action.payload.id === item.id);

//             if (index < 0) {
//                 state.push({ ...action.payload, qty: 1 });
//             } else {
//                 const item = state[index];
//                 const update = {
//                     ...item,
//                     price: item.price + (item.price / item.qty),
//                     qty: item.qty += 1,
//                 };

//                 state.splice(index, 1, update);
//             }
//         },
//         removeItem: (state, action) => {
//             const index = state.findIndex(item => action.payload === item.id);
//             const item = state[index];

//             if (item.qty > 1) {
//                 const update = {
//                     ...item,
//                     price: item.price - (item.price / item.qty),
//                     qty: item.qty -= 1
//                 };

//                 state.splice(index, 1, update);
//             } else {
//                 state.splice(index, 1);
//             }
//         },
//         resetOrder: () => initialState
//     }
// });

// export const { addItem, removeItem, resetOrder } = orderSlice.actions;

// export default orderSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addItem: (state, action) => {
            console.log('add item')
            const { id } = action.payload;
            const existingItem = state.find(item => item.id === id);
            if (!existingItem) {
                state.push({ ...action.payload, qty: 1 });
            } else {
                existingItem.qty += 1;
            }
        },
        removeItem: (state, action) => {
            console.log('remove item')
            const { id } = action.payload;
            const index = state.findIndex(item => item.id === id);
            if (index !== -1) {
                const item = state[index];
                if (item.qty > 1) {
                    item.qty -= 1;
                } else {
                    state.splice(index, 1);
                }
            }
        },
        resetOrder: () => initialState
    }
});

export const { addItem, removeItem, resetOrder } = orderSlice.actions;

export default orderSlice.reducer;
