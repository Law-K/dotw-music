var canvas = document.getElementById('drawing');
var context = canvas.getContext('2d');
var mountain = new Image();
mountain.src = 'austria-mountain.jpg';

function draw() {
	context.drawImage(mountain, 0, 0);
}

window.addEventListener('load', draw);