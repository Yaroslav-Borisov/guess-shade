import { createSlice } from '@reduxjs/toolkit';

interface OpacityState {
    opacity: number,
}

const initialState: OpacityState = {
	opacity: 0.6
};

export const opacitySlice = createSlice({
	name: 'opacity',
	initialState: initialState,
	reducers: {
		setNewOpacity: (state) => {
			state.opacity = state.opacity + (state.opacity * 0.05);
		},
		resetOpacity: (state) => {
			state.opacity = 0.6;
		}
	}
});

export default opacitySlice.reducer;
export const opacityActions = opacitySlice.actions;