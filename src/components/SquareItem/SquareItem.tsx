import { useDispatch } from 'react-redux';
import styles from './SquareItem.module.css';
import { AppDispatch } from '../../store/store';
import { levelActions } from '../../store/level.slice';
import { Opacity } from '../../consts';


interface SquareItemProps {
    color: string,
    opacity: number,
	guesses: number,
	setGuesses: (guesses: number) => void
}

export function SquareItem({color, opacity, guesses, setGuesses}: SquareItemProps) {
	const dispatch = useDispatch<AppDispatch>();

	const clickHandler = (event: React.MouseEvent) => {
		if (event.target instanceof HTMLElement) {
			if (event.target.getAttribute('data-name') === Opacity.Special) {
				setGuesses(guesses + 1);
				dispatch(levelActions.setNextLevel());
			}
		}
	};

	return (
		<div 
			className={styles['square-item']} 
			style={{backgroundColor: color, opacity: `${opacity}`}} 
			data-name={opacity === 1 ? Opacity.Ordinary : Opacity.Special} 
			onClick={clickHandler}
		>
		</div>
	);
}