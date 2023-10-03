import { configureStore} from "@reduxjs/toolkit"
import logger from "redux-logger"
import thunk from "redux-thunk"

import userReducer from "./user/user.reducer"
import cartReducer from "./cart/cart.reducer"

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;