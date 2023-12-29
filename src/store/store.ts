import { configureStore } from '@reduxjs/toolkit';
import levelSlice from './level.slice';
import sizeSlice from './size.slice';

export const store = configureStore({
	reducer: {
		level: levelSlice,
		size: sizeSlice
	}
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch