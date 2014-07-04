// Converter start
var cellSize = 50;

function toPx(val) {
	return val * cellSize;
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
	bot = new rect("grey", 5, 5, 1, 1);
	draw();
	playerMove();

}
function createPlayer() {
	player = new rect("orange", playerX, playerY, playerSize, playerSize);
	player.drawObject();
}
function background() {
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
	for (var i = 0; i < collGameCells; i++) {
		for (var j = 0; j < collGameCells; j++) {
			switch (map[j][i]) {
				case 1:
					createGround(i, j);
					break;
				case 2:
					createWater(i, j);
					break;
			}
		}
	}
}
function createGround(Gx, Gy) {
	var ground = new rect("green", Gx, Gy, oneCell, oneCell);
	ground.drawObject();
}
function createWater(Wx, Wy) {
	var water = new rect("blue", Wx, Wy, oneCell, oneCell);
	water.drawObject();
}
function playerMove() {
	function playerStepToNorth() {
		if ((playerY - oneStep > -oneStep) && !collisionPlayerOnMap(playerX, playerY - oneStep)) {
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
	if (objAX+objAWidth  > objBX &&
        objAX            < objBX + objBWidth &&
        objAY+objAHeight > objBY &&
        objAY            < objBY + objBHeight) {
            return true;
        }
        else {
            return false;
        }
}
function collisionPlayerOnMap(futureStepX, futureStepY) {
	console.log("enter to collisionPlayerOnMap");
	for (var i = 0; i < collGameCells; i++) {
		for (var j = 0; j < collGameCells; j++) {
			switch (map[j][i]) {
				case 2:
				console.log("enter to case 2");
					if (collision(i, j, oneCell, oneCell, futureStepX, futureStepY, playerSize, playerSize)) {
						console.log("playerY = " + playerY);
						console.log("futureStepY = " + futureStepY);
						console.log("case 2 true");
						return true;
					} else {
						console.log("playerY = " + playerY);
						console.log("futureStepY = " + futureStepY);
						console.log("case 2 false");
						return false;
					}
					break;
			}
		}
	}
}
