
let counter = 0

function Counter() {
	counter = counter + 1;
	text = document.getElementById('click-counter');
	text.innerHTML = 'Number of times button clicked:' + counter;
}