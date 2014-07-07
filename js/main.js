// Converter start
var cellSize = 50;

function toPx(val) {
	return val * cellSize;
}
function toCells(val) {
	return val / cellSize;
}
function coordinate(coord) {
	return toPx(coord);
}

collCanvasCells = 10;
collGameCells = 10;
playerSize = 1;
oneCell = 1;
oneStep = 1;

gameX = 0;
gameY = 0;
playerX = 2;
playerY = 2;

botX = 5;
botY = 5;

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
	bot.drawObject();
	createPlayer();
}
function init() {
	canvas = document.getElementById('myCanv');
	ctx = canvas.getContext('2d');
	canvas.width = toPx(collCanvasCells);
	canvas.height = toPx(collCanvasCells);
	canvas.style.backgroundColor = "#ccc";
	game = new rect("black", gameX, gameY, collGameCells, collGameCells);
	bot = new rect("grey", botX, botY, oneCell, oneCell);
	draw();
	playerMove();
}
function createPlayer() {
	player = new rect("orange", playerX, playerY, playerSize, playerSize);
	player.drawObject();
}
function background() {
	for (var i = 0; i < collGameCells; i++) {
		for (var j = 0; j < collGameCells; j++) {
			switch (map[j][i]) {
				case 1:
					createCellGround(i, j, "green");
					break;
				case 2:
					createCellGround(i, j, "blue");
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
