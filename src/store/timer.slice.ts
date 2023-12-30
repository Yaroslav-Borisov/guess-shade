import { createSlice } from '@reduxjs/toolkit';
import { GAME_TIME } from '../consts';

interface TimerState {
    time: number,
}

const initialState: TimerState = {
	time: GAME_TIME
};

export const timerSlice = createSlice({
	name: 'timer',
	initialState: initialState,
	reducers: {
		decreaseTime: (state) => {
			state.time = state.time - 1;
		}
	}
});

export default timerSlice.reducer;
export const timerActions = timerSlice.actions;