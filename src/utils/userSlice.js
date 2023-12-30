import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        name: null,
        id: null,
    },
    reducers: {
        loggedIn: (state, action) => {
            return {
                name: action.payload.name,
                id: action.payload.email
            }
        },

        loggedOut: (state) => {return {name:null, id: null}}
    }
});

export const {loggedIn, loggedOut} = userSlice.actions;
export default userSlice.reducer;