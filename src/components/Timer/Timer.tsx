import styles from './Timer.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';


export function Timer() {
	const time = useSelector((state: RootState) => state.timer.time);
    
	return (
		<span className={styles['timer']}>{time}</span>
	);
}