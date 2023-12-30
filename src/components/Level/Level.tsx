import { useDispatch, useSelector } from 'react-redux';
import { timerActions } from '../../store/timer.slice';
import styles from './Level.module.css';
import { AppDispatch, RootState } from '../../store/store';
import { useEffect } from 'react';

export function Level() {
	const dispatch = useDispatch<AppDispatch>();
	const level = useSelector((state: RootState) => state.level.level);

	useEffect( () => {
		if (level === 2) {
			setInterval(() => {
				dispatch(timerActions.decreaseTime());
			}, 1000);
		}
	}, [level]);

	return (
		<h1 className={styles['title']}>Уровень {level}</h1>
	);
}