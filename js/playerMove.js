function playerMove() {
	function canStepToNorth() {
		var next = playerY - oneStep;
		return next >= 0 && !isWater(playerX, next);
	}
	function canStepToEast() {
		var next = playerX + oneStep;
		return next < collGameCellsWidth && !isWater(next, playerY);
	}
	function canStepToSouth() {
		var next = playerY + oneStep;
		return next < collGameCellsHeight && !isWater(playerX, next);
	}
	function canStepToWest() {
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
				if (canStepToNorth()) {
					playerY -= oneStep;
				}
				break;
			case 83:
				if (canStepToSouth()) {
					playerY += oneStep;
				}
				break;
			case 68:
				if (canStepToEast()) {
					playerX += oneStep;
				}
				break;
			case 65:
				if (canStepToWest()) {
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