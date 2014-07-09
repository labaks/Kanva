// Converter start
var cellSize = 50;

function toPx(val) {
	return val * cellSize;
}
// function toCells(val) {
	// return val / cellSize;
// }
// function coordinate(coord) {
	// return toPx(coord);
// }

collCanvasCells = 10;
collGameCells = 10;
playerSize = 1;
oneCell = 1;
oneStep = 1;

// gameX = 0;
// gameY = 0;
var player = new Point(2,2);

// botX = 5;
// botY = 5;

function Point(x, y) {
	this.x = x;
	this.y = y;
}

Point.prototype.move = function(x, y) {
	  this.x = x;
	  this.y = y;
	};

// Converter end

// function rect(color, x, y, width, height) {
	// this.color = color;
	// this.x = coordinate(x);
	// this.y = coordinate(y);
	// this.width = toPx(width);
	// this.height = toPx(height);
	// this.drawObject = function() {
		// ctx.fillStyle = this.color;
		// ctx.fillRect(this.x, this.y, this.width, this.height);
	// };
// }

function drawRect(color, point, size) {
	ctx.fillStyle = color;
	ctx.fillRect(toPx(point.x), toPx(point.y), toPx(size), toPx(size));
}

function draw() {
	background();
	// bot.drawObject();
	drawPlayer();
}
function init() {
	canvas = document.getElementById('myCanv');
	ctx = canvas.getContext('2d');
	canvas.width = toPx(collCanvasCells);
	canvas.height = toPx(collCanvasCells);
	canvas.style.backgroundColor = "#ccc";
	//new rect("black", gameX, gameY, collGameCells, collGameCells).drawObject();
	// bot = new rect("grey", botX, botY, oneCell, oneCell);
	map = maps.map1;
	draw();
	playerMove();
}

function drawPlayer() {
	drawRect("orange", player, playerSize);
}

function background() {
	for (var y = 0; y < collGameCells; y++)
		for (var x = 0; x < collGameCells; x++)
			drawRect(map[y][x].color, {x: x, y: y }, oneCell);
}
