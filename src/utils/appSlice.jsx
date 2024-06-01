import { createSlice } from "@reduxjs/toolkit";
import { fakeBaseQuery } from "@reduxjs/toolkit/query";


const appSlice = createSlice({
    name : "app",
    initialState : {
        isMenuOpen: true,
    },
    reducers:{
        toggleMenu: (state) =>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu : (state) =>{
            state.isMenuOpen = false;
        }
    }
})
export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;