function movePlayer(next) {
	var isBoard = isIn(next.x, collCanvasCellsWidth) && isIn(next.y, collCanvasCellsHeight);
	if (isBoard && !isWater())
		player.move(next.x, next.y);

	if (!isBoard && isDoor())
		dialog();

	draw();

	function isIn(next, collCells) {
		return next >= 0 && next < collCells;
	}
	function isWater() {
		return map[next.y][next.x].type === "water";
	}
	function isDoor() {
		return map[player.y][player.x].type === "door";
	}
}

function bindEventHandlers() {
	document.onkeydown = function(pressed) {
		if (pressed.which == 87) toNorth();
		else if (pressed.which == 83) toSouth();
		else if (pressed.which == 68) toEast();
		else if (pressed.which == 65) toWest();
	};

	document.getElementById('moveUp').onclick = toNorth;
	document.getElementById('moveDown').onclick = toSouth;
	document.getElementById('moveLeft').onclick = toWest;
	document.getElementById('moveRight').onclick = toEast;

	function toNorth() {
		movePlayer(new Point(player.x, player.y - oneStep));
	}
	function toSouth() {
		movePlayer(new Point(player.x, player.y + oneStep));
	}
	function toEast() {
		movePlayer(new Point(player.x + oneStep, player.y));
	}
	function toWest() {
		movePlayer(new Point(player.x - oneStep, player.y));
	}
}
