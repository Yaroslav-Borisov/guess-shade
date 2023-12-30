import { createSlice } from '@reduxjs/toolkit';
import { GAME_TIME } from '../consts';

interface TimerState {
    time: number,
	timerId: any
}

const initialState: TimerState = {
	time: GAME_TIME,
	timerId: 0
};

export const timerSlice = createSlice({
	name: 'timer',
	initialState: initialState,
	reducers: {
		decreaseTime: (state) => {
			if (state.time === 0) {
				clearInterval(state.timerId);
			} else {
				state.time = state.time - 1;
			}
		},
		resetTime: (state) => {
			state.time = GAME_TIME;
		},
		setTimerId: (state, action) => {
			state.timerId = action.payload;
		},
		stopTimer: (state) => {
			clearInterval(state.timerId);
		}
	}
});

export default timerSlice.reducer;
export const timerActions = timerSlice.actions;