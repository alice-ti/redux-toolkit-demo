import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
	value: number
}

const initialState: CounterState = {
	value: 0
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment(state) {
			// 内置immer，可以直接更改状态
			state.value += 1
		},
		incrementByAmount(state, action: PayloadAction<number>) {
			state.value += action.payload
		}
	}
})

export const { increment, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
