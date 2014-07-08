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
	// bot.drawObject();
	createPlayer();
}
function init() {
	canvas = document.getElementById('myCanv');
	ctx = canvas.getContext('2d');
	canvas.width = toPx(collCanvasCells);
	canvas.height = toPx(collCanvasCells);
	canvas.style.backgroundColor = "#ccc";
	game = new rect("black", gameX, gameY, collGameCells, collGameCells);
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
	for (var x = 0; x < collGameCells; x++) {
		for (var y = 0; y < collGameCells; y++) {
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
