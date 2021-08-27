import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector,
} from 'react-redux'
import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit"
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import authReducer from 'store/auth/slice'

import { authApi } from 'store/auth/service'
import { errorHandlerMiddleware } from 'store/middleware/errorHandlerMiddleware'

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat([
            authApi.middleware,
            errorHandlerMiddleware
        ])
    }
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector