var waves = document.getElementById('waves');
var context = waves.getContext('2d');

function drawLine1(){
	context.beginPath();
	context.moveTo(0,0);
	context.bezierCurveTo(500, 350, 1200, 600, 1600, 800);
	context.strokeStyle = "#ff0000";
	context.stroke();
}
drawLine1();
function drawLine2(){
	context.beginPath();
	context.moveTo(0,100);
	context.bezierCurveTo(800, 600, 1400, 850, 2000, 1200);
	context.strokeStyle = "#ff0000";
	context.stroke();
}
drawLine2();
function drawLine3(){
	context.beginPath();
	context.moveTo(0,200);
	context.bezierCurveTo(800, 800, 1600, 1200, 2400, 1600);
	context.strokeStyle = "#ff0000";
	context.stroke();
}
drawLine3();
function drawLine4(){
	context.beginPath();
	context.moveTo(0,-100);
	context.bezierCurveTo(400, 150, 800, 300, 1500, 600);
	context.strokeStyle = "#ff0000";
	context.stroke();
}
drawLine4();

