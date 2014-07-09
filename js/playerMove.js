function playerMove() {
	document.onkeydown = function(pressed){
		var next = new Point (player.x, player.y);
		if (pressed.which == 87)
			next.y = player.y - oneStep;
		else if (pressed.which == 83)
			next.y = player.y + oneStep;
		else if (pressed.which == 68)
			next.x = player.x + oneStep;
		else if (pressed.which == 65)
			next.x = player.x - oneStep;
		else
			return;
			
		var isBoard = isIn(next.x) && isIn(next.y);
		if (isBoard && !isWater())
			player.move(next.x, next.y);
			
		if (!isBoard && isDoor()) 
			dialog(); 
			
		draw();
			
		function isIn(next) {
			return next >= 0 && next < collGameCells;
		}
		
		function isWater() {	
			return map[next.y][next.x].type === "water";
		}
		
		function isDoor() {
			return map[player.y][player.x].type === "tp";
		}
	}
}