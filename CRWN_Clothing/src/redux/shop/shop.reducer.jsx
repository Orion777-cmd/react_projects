import {createSlice} from "@reduxjs/toolkit"

// import shopDatas from './shopData.js';

const initialState = {
    shopData : {}
}

const shopSlice = createSlice({
    name:'shop',
    initialState,
    reducers:{
        updateCollections : (state, action) => {
            state.shopData = action.payload
        }
    }
})

export const {updateCollections}  = shopSlice.actions

export default shopSlice.reducer;