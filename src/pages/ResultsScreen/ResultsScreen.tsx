import { Link } from 'react-router-dom';
import styles from './ResultsScreen.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export function ResultsScreen() {
	const level = useSelector((state: RootState) => state.level.level);

	return (
		<div className={styles['results-screen']}>
			<h1 className={styles['title']}>
				Reached {level} levels
				<br/>
				<span className={styles['record']}>Record 25</span>
			</h1>
			<Link to="/" className={styles['button']}>Play again</Link>
		</div>
	);
}