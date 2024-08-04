    import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '../services/auth.service'
import { setupListeners } from '@reduxjs/toolkit/query'
import loginReducer from '../features/user/loginslice'

    export const store = configureStore({
    reducer: {
        auth:loginReducer,
        [authApi.reducerPath]:authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
    })
    setupListeners(store.dispatch)