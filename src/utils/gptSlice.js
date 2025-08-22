import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,

    },
    reducers:{
        toggleGetSearchView: (state,action)=>{
            state.showGptSearch = !state.showGptSearch;
        }
    }

})

export default gptSlice.reducer;
export const {toggleGetSearchView} = gptSlice.actions;