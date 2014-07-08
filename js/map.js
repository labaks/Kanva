function cell(type, id) {
	return { type: type, id: id };
}

map1 =
	[
		[cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1)],
		[cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("water", 1),  cell("water", 1),  cell("water", 1)],
		[cell("water", 1),  cell("water", 1),  cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("water", 1),  cell("water", 1)],
		[cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1)],
		[cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("tp", 1)],
		[cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1)],
		[cell("water", 1),  cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("water", 1)],
		[cell("water", 1),  cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("water", 1),  cell("water", 1),  cell("water", 1)],
		[cell("water", 1),  cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("water", 1),  cell("ground", 1), cell("water", 1),  cell("water", 1),  cell("water", 1)],
		[cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1)],
	]

map2 =
	[
		[cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1)],
		[cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("water", 1),  cell("water", 1),  cell("water", 1)],
		[cell("water", 1),  cell("water", 1),  cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("water", 1),  cell("water", 1)],
		[cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("water", 1)],
		[cell("tp", 2),     cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("water", 1)],
		[cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("water", 1)],
		[cell("water", 1),  cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("water", 1),  cell("water", 1)],
		[cell("water", 1),  cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("water", 1),  cell("water", 1),  cell("water", 1)],
		[cell("water", 1),  cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("ground", 1), cell("water", 1),  cell("ground", 1), cell("water", 1),  cell("water", 1),  cell("water", 1)],
		[cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1),  cell("water", 1)],
	]

function switchMap() {
	if (clickOk) {
		switch (map[playerY][playerX].id) {
			case 1:
				return map = map2;
				break;
			case 2:
				return map = map1;
				break;
		}
	}
	draw();
}
