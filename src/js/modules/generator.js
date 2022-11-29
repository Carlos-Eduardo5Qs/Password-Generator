const rand = (min,max) => Math.floor(Math.random() * (max - min) + min);

const upperCase = () => String.fromCharCode(rand(65,91));
const lowerCase = () => String.fromCharCode(rand(97,123));
const numbers = () => String.fromCharCode(rand(48,58));
const symbols = '~[y]{X}@4#$%¨2&*()_+=-;';
const symbolsGenerator = () => symbols[rand(0,symbols.length)]; 

export default function password(amount, uppercase, lowercase, number, symbol) {
	const passwordArray = [];
	amount = Number(amount);

	for(let i = 0; i < amount; i++) {
		uppercase && passwordArray.push(upperCase());
		lowercase && passwordArray.push(lowerCase());
		number && passwordArray.push(numbers());
		symbol && passwordArray.push(symbolsGenerator());
	};

	return passwordArray.join('').slice(0, amount);
};
