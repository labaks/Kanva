function cell(type, id, px, py) {
	return {
		type: type,
		id: id,
		px: px,
		py: py
	};
}
var maps = {};

var wId1 = cell("water", 1, 0, 3);
var gId1 = cell("ground", 1, 1, 1);
var dId1 = cell("door", "map2", 0, 0);
var dId2 = cell("door", "map1", 2, 0);

maps.map1 =
	[
		[wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1],
		[wId1, wId1, wId1, wId1, gId1, gId1, gId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, gId1, gId1, gId1, wId1, wId1, wId1],
		[wId1, wId1, gId1, gId1, gId1, gId1, gId1, gId1, wId1, wId1, wId1, wId1, wId1, wId1, gId1, gId1, gId1, gId1, wId1, wId1],
		[gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, wId1, wId1, gId1, gId1, gId1, gId1, gId1],
		[gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, wId1, wId1, wId1, gId1, gId1, gId1, dId1],
		[gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1],
		[gId1, gId1, gId1, gId1, gId1, wId1, gId1, wId1, wId1, wId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1],
		[gId1, gId1, gId1, gId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1],
		[gId1, gId1, gId1, gId1, wId1, wId1, wId1, wId1, wId1, wId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1],
		[gId1, gId1, gId1, gId1, gId1, wId1, gId1, wId1, wId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1],
		[gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1],
		[gId1, gId1, wId1, wId1, wId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1],
		[wId1, gId1, wId1, wId1, wId1, gId1, gId1, gId1, gId1, wId1, wId1, gId1, gId1, gId1, gId1, wId1, wId1, gId1, gId1, wId1],
		[wId1, wId1, wId1, wId1, wId1, wId1, gId1, wId1, wId1, wId1, wId1, wId1, wId1, gId1, wId1, wId1, wId1, wId1, wId1, wId1],
		[wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1],
	];

maps.map2 =
	[
		[wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1],
		[wId1, wId1, gId1, gId1, gId1, gId1, gId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1],
		[gId1, gId1, gId1, gId1, gId1, gId1, gId1, wId1, gId1, gId1, gId1, gId1, gId1, wId1, wId1, wId1, wId1, wId1, gId1, wId1],
		[gId1, gId1, gId1, gId1, gId1, gId1, gId1, wId1, wId1, wId1, gId1, gId1, gId1, wId1, wId1, wId1, gId1, wId1, gId1, gId1],
		[dId2, gId1, gId1, gId1, gId1, gId1, gId1, gId1, wId1, gId1, gId1, gId1, gId1, gId1, gId1, wId1, gId1, gId1, gId1, gId1],
		[gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1],
		[gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1],
		[gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, wId1],
		[gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1],
		[gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1],
		[wId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1],
		[wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, wId1],
		[wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, gId1, wId1, wId1, gId1, gId1, gId1, gId1, wId1, wId1, gId1, wId1, wId1],
		[wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, gId1, gId1, wId1, wId1, wId1, wId1, wId1, wId1],
		[wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1],
	];

