import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { User } from 'types/User'
import { RootState, useAppSelector } from "store"

export type AuthState = {
    user: User | null
}

export const initialState = {
    user: null
}

const slice = createSlice({
    name: 'auth',
    initialState: initialState as AuthState,
    reducers: {
        setUser(state, action: PayloadAction<{ user: User | null }>) {
            state.user = action.payload.user
        }
    }
})

export const { setUser } = slice.actions

export default slice.reducer

export const selectAuthedUser = (state: RootState) => state.auth.user

export const useAuthedUser = () => useAppSelector(selectAuthedUser)