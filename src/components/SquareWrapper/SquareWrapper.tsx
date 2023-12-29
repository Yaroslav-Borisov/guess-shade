import { SquareItem } from '../SquareItem/SquareItem';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SquareWrapper.module.css';
import { AppDispatch, RootState } from '../../store/store';
import { getRandomColor} from '../../utils';
import { useState, useEffect } from 'react';
import { GUESSES } from '../../consts';
import { sizeActions } from '../../store/size.slice';


export function SquareWrapper() {
	const dispatch = useDispatch<AppDispatch>();
	const size = useSelector((state: RootState) => state.size.size);
	const [guessesNumber, setGuessesNumber] = useState(0);

	const items = new Array(Math.pow((size), 2)).fill(null).map(() => 1);
	items[Math.floor(Math.random() * items.length)] = 0.6;
	const randomColor = getRandomColor();

	useEffect(() => {
		if (guessesNumber === GUESSES) {
			setGuessesNumber(0);
			dispatch(sizeActions.setNewSize(size + 1));

		}
	}, [guessesNumber]);


	return (
		<div className={styles['square-wrapper']} style={{
			gridTemplateColumns: `repeat(${size}, 1fr)`, 
			gridTemplateRows: `repeat(${size}, 1fr)`, 
			gap: '11.5px', 
			width: '460px', 
			height: '460px'}}
		>
			{items.map((opacity, index) => <SquareItem color={randomColor} opacity={opacity} guesses={guessesNumber} setGuesses={setGuessesNumber} key={index}/>	)}
		</div>
	);
}