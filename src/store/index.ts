import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/conterSlice'
import userReducer from './features/userSlice'

export const store = configureStore({
	// Root Reducer或者RTK的Slice Reducer组成的Map
	reducer: {
		// TODO
		user: userReducer,
		counter: counterReducer
	}
	// middleware: [],
	// 启用Redux DevTools，默认true
	// devTools: true,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
