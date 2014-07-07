function playerMove() {
	function playerStepToNorth() {
		var next = playerY - oneStep;
		return next >= 0 && !isWater(playerX, next);
	}
	function playerStepToEast() {
		var next = playerX + oneStep;
		return next < collGameCells && !isWater(next, playerY);
	}
	function playerStepToSouth() {
		var next = playerY + oneStep;
		return next < collGameCells && !isWater(playerX, next);
	}
	function playerStepToWest() {
		var next = playerX - oneStep;
		return next >= 0 && !isWater(next, playerY);
	}
	function isWater(nextX, nextY) {
		return map[nextY][nextX].type === "water";
	}
	function isTp() {
		if (map[playerY][playerX].type === "tp") {
			dialog();
		}
	}
	document.onkeydown = function(pressed){
		switch (pressed.which) {
			case 87:
				if (playerStepToNorth()) {
					playerY -= oneStep;
				}
				break;
			case 83:
				if (playerStepToSouth()) {
					playerY += oneStep;
				}
				break;
			case 68:
				if (playerStepToEast()) {
					playerX += oneStep;
				}
				break;
			case 65:
				if (playerStepToWest()) {
					playerX -= oneStep;
				}
				break;
			default:
				return;
		}
		draw();
		isTp();
	}
}