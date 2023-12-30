import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        count: 0
    },
    reducers: {
        addItem: (state, action) => {
            let ran=0;
            state.items = state.items.map(item => {
                if(item.id != action.payload.id) return item;
                ran=1;
                ++item.count
                state.count++;
                return item;
            });
            
            if(ran==0){
                state.count++;
                state.items.push({id: action.payload.id, count: 1});
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => {
                if(item.id != action.payload.id) return item;

                state.count--;
                if(--item.count == 0) return null;
                else return item;
            });
        },
        clearCart: (state) => {
            state.items = [];
            state.count=0;
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;