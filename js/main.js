document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
	leftPanel = document.getElementById("leftPanel");
	rightPanel = document.getElementById("rightPanel");
	leftPanel.style.height = rightPanel.style.height = deviceHeight;
	leftPanel.style.width = rightPanel.style.width = (deviceWidth - toPx(collCanvasCellsWidth)) / 2;
	init();
}
deviceWidth = window.document.documentElement.clientWidth;
deviceHeight = window.document.documentElement.clientHeight;
// data
collCanvasCellsWidth = 20;
collCanvasCellsHeight = 15;
playerSize = 1;
oneCell = 1;
oneStep = 1;

playerX = 2;
playerY = 2;

// Converter start
var cellSize = deviceHeight / collCanvasCellsHeight;

function toPx(val) {
	return val * cellSize;
}
function toCells(val) {
	return val / cellSize;
}
// Converter end
var player = new pointObj(2, 2);

function pointObj(x, y) {
	this.x = x;
	this.y = y;
};
pointObj.prototype.move = function(x, y) {
	this.x = x;
	this.y = y;
}
function drawRect(color, point, size) {
	ctx.fillStyle = color;
	ctx.fillRect(toPx(point.x), toPx(point.y), toPx(size), toPx(size));
}
function draw() {
	background();
	drawPlayer();
}
function init() {
	canvas = document.getElementById('myCanv');
	ctx = canvas.getContext('2d');
	canvas.width = toPx(collCanvasCellsWidth);
	canvas.height = deviceHeight;
	canvas.style.backgroundColor = "#ccc";
	map = maps.map1;
	draw();
	playerMove();
}
function drawPlayer() {
	drawRect("orange", player, playerSize);
}
function background() {
	for (var x = 0; x < collCanvasCellsWidth; x++) {
		for (var y = 0; y < collCanvasCellsHeight; y++) {
			drawRect(map[y][x].color, {x: x, y: y}, oneCell);
		}
	}
}
