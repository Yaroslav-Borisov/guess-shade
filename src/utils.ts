export const getRandomNumber = (min: number, max: number): number => {
	return Math.trunc(Math.random() * (max - min) + min);
};

export const getRandomColor = () => {
	return `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
};