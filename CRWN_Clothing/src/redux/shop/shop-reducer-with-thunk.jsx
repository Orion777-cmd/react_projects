import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'
import {  collection, getDocs } from 'firebase/firestore';
import {firestore} from "../../firebase/firebase.utils"
import { convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
// import shopDatas from './shopData.js';

const initialState = {
    shopData : {},
    isLoading: false,
    error: null
}

export const fetchShopData = createAsyncThunk(
    'shop/fetchShopData',
    async () => {
        const collectionRef = collection(firestore, 'collections');
        const snapshot = await getDocs(collectionRef);
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        return collectionsMap; 
    }
)
export const shopSlice = createSlice({
    name:'shop',
    initialState,
    reducers:{ },   
    
    extraReducers: (builder) => {
        builder.addCase(fetchShopData.pending, (state) =>{
            state.isLoading = true
        })
        builder.addCase(fetchShopData.fulfilled, (state, action)=> {
            state.isLoading = false 
            state.shopData = action.payload

        })
        builder.addCase(fetchShopData.rejected,(state,action)=> {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export const {}  = shopSlice.actions

export default shopSlice.reducer;