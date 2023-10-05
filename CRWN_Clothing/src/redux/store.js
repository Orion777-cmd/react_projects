import { configureStore} from "@reduxjs/toolkit"
import logger from "redux-logger"
import {persistStore,persistReducer} from "redux-persist"
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk"

import userReducer from "./user/user.reducer"
import cartReducer from "./cart/cart.reducer"

const persistConfig = {
    key: 'root',
    storage,
    
  }

const persistedCartReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: persistedCartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(logger)
})

export const persistor = persistStore(store)

export default {store, persistor};