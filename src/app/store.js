    import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '../services/auth.service'
import { setupListeners } from '@reduxjs/toolkit/query'
import loginReducer from '../features/user/loginslice'
import { productApi } from '../services/product.service'

    export const store = configureStore({
    reducer: {
        auth:loginReducer,
        [authApi.reducerPath]:authApi.reducer,
        [productApi.reducerPath]:productApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware,productApi.middleware)
    })
    setupListeners(store.dispatch)