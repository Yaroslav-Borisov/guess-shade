import { Link } from 'react-router-dom';
import styles from './Button.module.css';

interface ButtonProps {
    title: string,
    path: string,
    onClick?: () => void
}

export function Button({title, path}: ButtonProps) {
	return (
		<Link className={styles['glow-on-hover']} to={path} onClick={() => onclick}>{title}</Link>
	);
}