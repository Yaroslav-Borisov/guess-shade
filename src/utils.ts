export const getRandomNumber = (min: number, max: number): number => {
	return Math.trunc(Math.random() * (max - min) + min);
};

export const getRandomColor = () => {
	return `rgb(${Math.random()*255}, ${180}, ${Math.random()*255})`;
};

export const getItems = (size: number, opacity: number) => {
	const items = new Array(Math.pow((size), 2)).fill(null).map(() => 1);
	items[Math.floor(Math.random() * items.length)] = opacity;

	return items;
};