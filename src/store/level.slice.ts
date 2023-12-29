import { createSlice } from '@reduxjs/toolkit';

interface LevelState {
    level: number,
}

const initialState: LevelState = {
	level: 1
};

export const levelSlice = createSlice({
	name: 'level',
	initialState: initialState,
	reducers: {
		setNextLevel: (state) => {
			state.level = state.level + 1;
		}
	}
});

export default levelSlice.reducer;
export const levelActions = levelSlice.actions;