import { configureStore} from "@reduxjs/toolkit"
import logger from "redux-logger"
import {persistStore,persistReducer} from "redux-persist"
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk"

import userReducer from "./user/user.reducer"
import cartReducer from "./cart/cart.reducer"
import directoryReducer from "./directory/directory.reducer";
import shopReduer from "./shop/shop.reduer";

const persistConfig = {
    key: 'root',
    storage,
    
  }

const persistedCartReducer = persistReducer(persistConfig, cartReducer)
const persistedDirectoryReducer = persistReducer(persistConfig, directoryReducer)
const persistedShopReducer = persistReducer(persistConfig, shopReduer)
export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: persistedCartReducer,
        directory: persistedDirectoryReducer,
        shop: persistedShopReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(logger)
})

export const persistor = persistStore(store)

export default {store, persistor};