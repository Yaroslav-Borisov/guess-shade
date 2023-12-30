import styles from './StartScreen.module.css';
import { Button } from '../../components/Button/Button';
import { Paths } from '../../consts';

export function StartScreen() {

	return (
		<div className={styles['start-screen']}>
			<h1 className={styles['title']}>Guess sh<span className={styles['pale-letter']}>a</span>de</h1>
			<Button title={'Start playing'} path={Paths.Game}/>
		</div>
	);
}