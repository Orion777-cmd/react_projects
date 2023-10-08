import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'

// import shopDatas from './shopData.js';

const initialState = {
    shopData : {},
    isLoading: false,
    error: null
}

// export const fetchShopData = createAsyncThunk(
//     'shop/fetchShopData',
//     async () => {
//         const collectionRef = collection(firestore, 'collections');
//         const snapshot = await getDocs(collectionRef);
//         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//         return collectionsMap; 
//     }
// )
export const shopSlice = createSlice({
    name:'shop',
    initialState,
    reducers:{ 
        getShopDataStartAction: (state) => {
            state.isLoading = true
        },

        getShopDataSuccessAction: (state, action) => {
            state.isLoading = false,
            state.shopData = action.payload
        },

        getShopDataFailureAction: (state, action) => {
            state.isLaoding = false, 
            state.error = action.payload.error.message
        }

    },   
    
    
})

export const {getShopDataFailureAction, getShopDataStartAction, getShopDataSuccessAction}  = shopSlice.actions

export default shopSlice.reducer;