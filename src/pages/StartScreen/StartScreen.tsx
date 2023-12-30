import { Link } from 'react-router-dom';
import styles from './StartScreen.module.css';
import { Paths } from '../../consts';

export function StartScreen() {

	return (
		<div className={styles['start-screen']}>
			<h1 className={styles['title']}>Guess sh<span className={styles['pale-letter']}>a</span>de</h1>
			<Link className={styles['glow-on-hover']} to={Paths.Game}>Play game</Link>
		</div>
	);
}