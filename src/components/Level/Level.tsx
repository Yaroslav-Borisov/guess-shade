import { useSelector } from 'react-redux';
import styles from './Level.module.css';
import { RootState } from '../../store/store';

export function Level() {
	const level = useSelector((state: RootState) => state.level.level);

	return (
		<h1 className={styles['title']}>Level {level}</h1>
	);
}