import styles from './Timer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { Paths } from '../../consts';
import { useNavigate } from 'react-router-dom';
import { levelActions } from '../../store/level.slice';
import { timerActions } from '../../store/timer.slice';
import { useEffect } from 'react';


export function Timer() {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const time = useSelector((state: RootState) => state.timer.time);

	useEffect(() => {
		if (time === 50) {
			dispatch(levelActions.setNewRecord());
			dispatch(timerActions.stopTimer());
			navigate(Paths.Results);
		}
	}, [time]);
    
	return (
		<span className={styles['timer']}>{time}</span>
	);
}