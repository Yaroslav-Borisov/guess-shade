import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SizeState {
    size: number,
}

const initialState: SizeState = {
	size: 2
};

export const sizeSlice = createSlice({
	name: 'size',
	initialState: initialState,
	reducers: {
		setNewSize: (state, action: PayloadAction<number>) => {
			state.size = action.payload;
		},
		resetSize: (state) => {
			state.size = 2;
		}
	}
});

export default sizeSlice.reducer;
export const sizeActions = sizeSlice.actions;