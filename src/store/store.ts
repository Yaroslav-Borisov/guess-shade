import { configureStore } from '@reduxjs/toolkit';
import levelSlice from './level.slice';
import sizeSlice from './size.slice';
import opacitySlice from './opacity.slice';
import timerSlice from './timer.slice';

export const store = configureStore({
	reducer: {
		level: levelSlice,
		size: sizeSlice,
		opacity: opacitySlice,
		timer: timerSlice
	}
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch