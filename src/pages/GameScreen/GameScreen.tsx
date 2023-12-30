import { SquareWrapper } from '../../components/SquareWrapper/SquareWrapper';
import styles from './GameScreen.module.css';
import { Timer } from '../../components/Timer/Timer';
import { Level } from '../../components/Level/Level';

export function GameScreen() {

	return (
		<div className={styles['game-screen']}>
			<Level />
			<Timer/>
			<SquareWrapper />
		</div>
	);
}