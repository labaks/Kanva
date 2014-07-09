function cell(type, id, color) {
	return { type: type, id: id, color: color };
}

var water = cell("water", 1, "blue"),
	ground = cell("ground", 1, "green"),
	maps = {};

maps.map1 =
	[
		[water,  water,  water,  water,  water,  water,  water,  water,  water,  water],
		[water,  water,  water,  water,  ground, ground, ground, water,  water,  water],
		[water,  water,  ground, ground, ground, ground, ground, ground, water,  water],
		[ground, ground, ground, ground, ground, ground, ground, ground, ground, ground],
		[ground, ground, ground, ground, ground, ground, ground, ground, ground, cell("tp", "map2", "#fcb")],
		[ground, ground, ground, ground, ground, ground, ground, ground, ground, ground],
		[water,  ground, ground, ground, ground, ground, ground, ground, ground, water],
		[water,  ground, ground, ground, ground, ground, ground, water,  water,  water],
		[water,  ground, ground, ground, ground, water,  ground, water,  water,  water],
		[water,  water,  water,  water,  water,  water,  water,  water,  water,  water],
	];

maps.map2 =
	[
		[water,  water,  water,  water,  water,  water,  water,  water,  water,  water],
		[water,  water,  water,  water,  ground, ground, ground, water,  water,  water],
		[water,  water,  ground, ground, ground, ground, ground, ground, water,  water],
		[ground, ground, ground, ground, ground, ground, ground, ground, ground, water],
		[cell("tp", "map1", "#fcb"), ground, ground, ground, ground, ground, ground, ground, ground, water],
		[ground, ground, ground, ground, ground, ground, ground, ground, ground, water],
		[water,  ground, ground, ground, ground, ground, ground, ground, water,  water],
		[water,  ground, ground, ground, ground, ground, ground, water,  water,  water],
		[water,  ground, ground, ground, ground, water,  ground, water,  water,  water],
		[water,  water,  water,  water,  water,  water,  water,  water,  water,  water],
	];
