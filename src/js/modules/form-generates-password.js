import password from './generator.js';

const display = document.getElementById('password');
const amoutValue = document.getElementById('demo');
const buttonGenerator = document.getElementById('button-generator');

export default () => {
	var slider = document.getElementById("myRange");
	var output = document.getElementById("demo");
	output.innerHTML = slider.value;

	slider.oninput = function() {
	  output.innerHTML = this.value;
	};

	buttonGenerator.addEventListener('click', () => {
		eventClick();
	});
};

function eventClick() {
	display.value = password(Number(amoutValue.innerText), true, true, true, true);
};
