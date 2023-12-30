import { SquareItem } from '../SquareItem/SquareItem';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SquareWrapper.module.css';
import { AppDispatch, RootState } from '../../store/store';
import { getItems, getRandomColor} from '../../utils';
import { useState, useEffect } from 'react';
import { GUESSES } from '../../consts';
import { sizeActions } from '../../store/size.slice';
import { opacityActions } from '../../store/opacity.slice';
import { timerActions } from '../../store/timer.slice';


export function SquareWrapper() {
	const dispatch = useDispatch<AppDispatch>();
	const level = useSelector((state: RootState) => state.level.level);
	const size = useSelector((state: RootState) => state.size.size);
	const opacity = useSelector((state: RootState) => state.opacity.opacity);
	const [guessesNumber, setGuessesNumber] = useState(2);

	const items = getItems(size, opacity);
	const randomColor = getRandomColor();

	useEffect(() => {
		if (guessesNumber === GUESSES) {
			setGuessesNumber(0);
			dispatch(opacityActions.setNewOpacity());
			dispatch(sizeActions.setNewSize(size + 1));
		}
	}, [guessesNumber]);

	useEffect(() => {
		const timerId = setInterval(() => {
			if (level === 2) {
				dispatch(timerActions.decreaseTime());
			} 
		}, 1000);
		
		if (level === 2) {
			dispatch(timerActions.setTimerId(timerId));
		}
	}, [level]);


	return (
		<div className={styles['square-wrapper']} style={{
			gridTemplateColumns: `repeat(${size}, 1fr)`, 
			gridTemplateRows: `repeat(${size}, 1fr)`, 
			gap: '11.5px', 
			width: '460px', 
			height: '460px'}}
		>
			{items.map((opacity, index) => 
				<SquareItem 
					color={randomColor} 
					opacity={opacity} 
					guesses={guessesNumber} 
					setGuesses={setGuessesNumber} 
					key={index}
				/>)}
		</div>
	);
}