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

map =
	[
		[2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		[2, 2, 2, 2, 1, 1, 1, 2, 2, 2],
		[2, 2, 1, 1, 1, 1, 1, 1, 2, 2],
		[2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
		[2, 2, 1, 1, 1, 1, 1, 1, 1, 2],
		[2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
		[2, 1, 1, 1, 1, 1, 1, 1, 2, 2],
		[2, 1, 1, 1, 1, 1, 1, 2, 2, 2],
		[2, 1, 1, 1, 1, 2, 1, 2, 2, 2],
		[2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	]
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
	var cellGround = new rect(cell , Gx, Gy, oneCell, oneCell);
	cellGround.drawObject();
}
function playerMove() {
	function playerStepToNorth() {
		if ((playerY - oneStep > -oneStep) &&
			!collisionPlayerOnMap(playerX, playerY - oneStep)
			// !collision(playerX, playerY - oneStep, playerSize, playerSize, toCells(bot.x), toCells(bot.y), oneCell, oneCell)
			) {
			return true;
		} else {
			return false;
		}
	}
	document.onkeydown = function(pressed){
		switch (pressed.which) {
		 	case 87:
		 		if (playerStepToNorth()) {
		 			playerY -= oneStep;
			 		draw();
	 			}
		 		break;
		 	case 83:
		 		if (playerY + oneStep <= collGameCells - oneStep) {
		 			playerY += oneStep;
			 		draw();
			 	}
		 		break;
		 	case 68:
		 		if (playerX + oneStep <= collGameCells - oneStep) {
		 			playerX += oneStep;
			 		draw();
			 	}
		 		break;
		 	case 65:
		 		if (playerX - oneStep > -oneStep) {
		 			playerX -= oneStep;
			 		draw();
			 	}
		 		break;
		}
	}
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
function collisionPlayerOnMap(futureStepX, futureStepY) {
	for (var i = 0; i < collGameCells; i++) {
		for (var j = 0; j < collGameCells; j++) {
			switch (map[j][i]) {
				case 2:
					if (collision(i, j, oneCell, oneCell, futureStepX, futureStepY, playerSize, playerSize)) {
						console.log("case 2 true");
						console.log("playerY = " + playerY);
						console.log("i = " + i + "; j = " +j);
						console.log("futureStepY = " + futureStepY);
						return true;
					} else {
						console.log("case 2 false");
						console.log("playerY = " + playerY);
						console.log("i = " + i + "; j = " +j);
						console.log("futureStepY = " + futureStepY);
						return false;
					}
					break;
			}
		}
	}
}
