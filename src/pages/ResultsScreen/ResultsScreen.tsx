import styles from './ResultsScreen.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { levelActions } from '../../store/level.slice';
import { timerActions } from '../../store/timer.slice';
import { sizeActions } from '../../store/size.slice';
import { opacityActions } from '../../store/opacity.slice';
import { Button } from '../../components/Button/Button';
import { Paths } from '../../consts';

export function ResultsScreen() {
	const dispatch = useDispatch<AppDispatch>();
	const level = useSelector((state: RootState) => state.level.level);
	const record = useSelector((state: RootState) => state.level.record);

	const resetState = () => {
		dispatch(levelActions.resetLevel());
		dispatch(timerActions.resetTime());
		dispatch(sizeActions.resetSize());
		dispatch(opacityActions.resetOpacity());
	};

	return (
		<div className={styles['results-screen']}>
			<h1 className={styles['title']}>
				Reached {level} levels
				<br/>
				<span className={styles['record']}>Record {record}</span>
			</h1>
			{/* <Link to="/" className={styles['button']} onClick={resetState}>Play again</Link> */}
			<Button title={'Play again'} path={Paths.Start} onClick={resetState}/>
		</div>
	);
}