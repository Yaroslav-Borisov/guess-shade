import { createSlice } from '@reduxjs/toolkit';

interface LevelState {
    level: number,
	record: number
}

const initialState: LevelState = {
	level: 1,
	record: 0
};

export const levelSlice = createSlice({
	name: 'level',
	initialState: initialState,
	reducers: {
		setNextLevel: (state) => {
			state.level = state.level + 1;
		},
		resetLevel: (state) => {
			state.level = 1;
		},
		setNewRecord: (state) => {
			if (state.level > state.record) {
				state.record = state.level;
			}
		}
	}
});

export default levelSlice.reducer;
export const levelActions = levelSlice.actions;