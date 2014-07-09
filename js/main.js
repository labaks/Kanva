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
collGameCellsWidth = 20;
collGameCellsHeight = 15;
playerSize = 1;
oneCell = 1;
oneStep = 1;

gameX = 0;
gameY = 0;
playerX = 2;
playerY = 2;

botX = 5;
botY = 5;

// Converter start
var cellSize = deviceHeight / collGameCellsHeight;

function toPx(val) {
	return val * cellSize;
}
function toCells(val) {
	return val / cellSize;
}
function coordinate(coord) {
	return toPx(coord);
}
// Converter end

function rect(color, x, y, width, height) {
	this.color = color;
	this.x = coordinate(x);
	this.y = coordinate(y);
	this.width = toPx(width);
	this.height = toPx(height);
	this.drawObject = function() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	};
}
function draw() {
	game.drawObject();
	background();
	// bot.drawObject();
	createPlayer();
}
function init() {
	canvas = document.getElementById('myCanv');
	ctx = canvas.getContext('2d');
	canvas.width = toPx(collCanvasCellsWidth);
	canvas.height = deviceHeight;
	canvas.style.backgroundColor = "#ccc";
	game = new rect("black", gameX, gameY, collGameCellsWidth, collGameCellsHeight);
	// bot = new rect("grey", botX, botY, oneCell, oneCell);
	map = maps.map1;
	draw();
	playerMove();
}
function createPlayer() {
	player = new rect("orange", playerX, playerY, playerSize, playerSize);
	player.drawObject();
}
function background() {
	for (var x = 0; x < collGameCellsWidth; x++) {
		for (var y = 0; y < collGameCellsHeight; y++) {
			switch (map[y][x].type) {
				case "ground":
					createCellGround(x, y, "green");
					break;
				case "water":
					createCellGround(x, y, "blue");
					break;
				case "tp":
					createCellGround(x, y, "#fcb");
					break;
			}
		}
	}
}
function createCellGround(Gx, Gy, cell) {
	cellGround = new rect(cell , Gx, Gy, oneCell, oneCell);
	cellGround.drawObject();
}
function collision(objAX, objAY, objAWidth, objAHeight, objBX, objBY, objBWidth, objBHeight) {
	if (objAX + objAWidth  > objBX &&
		objAX              < objBX + objBWidth &&
		objAY + objAHeight > objBY &&
		objAY              < objBY + objBHeight) {
			return true;
		}
		else {
			return false;
		}
}
