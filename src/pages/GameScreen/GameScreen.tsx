import { SquareWrapper } from '../../components/SquareWrapper/SquareWrapper';
import styles from './GameScreen.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export function GameScreen() {
	const level = useSelector((state: RootState) => state.level.level);

	return (
		<div className={styles['game-screen']}>
			<h1 className={styles['title']}>Уровень {level}</h1>
			<span className={styles['timer']}>59</span>
			<SquareWrapper />
		</div>
	);
}