document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
	var leftPanel = document.getElementById("leftPanel");
	var rightPanel = document.getElementById("rightPanel");
	leftPanel.style.height = rightPanel.style.height = deviceHeight;
	leftPanel.style.width = rightPanel.style.width = (deviceWidth - toPx(collCanvasCellsWidth)) / 2;
	init();
}
var deviceWidth = window.document.documentElement.clientWidth;
var deviceHeight = window.document.documentElement.clientHeight;
// data
var collCanvasCellsWidth = 20;
var collCanvasCellsHeight = 15;
var playerSize = 1;
var oneCell = 1;
var oneStep = 1;

// Converter start
var cellSize = deviceHeight / collCanvasCellsHeight;

function toPx(val) {
	return val * cellSize;
}
// Converter end
var player = new Point(2, 2);

function Point(x, y) {
	this.x = x;
	this.y = y;
}
Point.prototype.move = function(x, y) {
	this.x = x;
	this.y = y;
};
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
	bindEventHandlers();
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
