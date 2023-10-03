import { configureStore} from "@reduxjs/toolkit"
import logger from "redux-logger"
import thunk from "redux-thunk"

import userReducer from "./user/user.reducer"

const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;