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
var gId1 = cell("ground", 1, 0, 0);
var gId2 = cell("ground", 2, 1, 0);
var gId3 = cell("ground", 3, 2, 0);
var gId4 = cell("ground", 4, 0, 1);
var gId5 = cell("ground", 5, 1, 1);
var gId6 = cell("ground", 6, 2, 1);
var gId7 = cell("ground", 7, 0, 2);
var gId8 = cell("ground", 8, 1, 2);
var gId9 = cell("ground", 9, 2, 2);
var dId1 = cell("door", "map2", 0, 0);
var dId2 = cell("door", "map1", 2, 0);

maps.map1 =
	[
		[wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1],
		[wId1, wId1, wId1, wId1, gId1, gId2, gId3, wId1, wId1, wId1, wId1, wId1, wId1, wId1, gId1, gId2, gId3, wId1, wId1, wId1],
		[wId1, wId1, gId1, gId2, gId5, gId5, gId5, gId3, wId1, wId1, wId1, wId1, wId1, wId1, gId7, gId5, gId5, gId3, wId1, wId1],
		[gId2, gId2, gId5, gId5, gId5, gId5, gId5, gId5, gId2, gId2, gId2, gId2, gId3, wId1, wId1, gId7, gId5, gId5, gId2, gId2],
		[gId5, gId5, gId5, gId5, gId5, gId5, gId5, gId5, gId5, gId5, gId5, gId5, gId6, wId1, wId1, wId1, gId4, gId5, gId5, dId1],
		[gId5, gId5, gId5, gId5, gId5, gId8, gId8, gId8, gId8, gId8, gId5, gId5, gId5, gId2, gId2, gId2, gId5, gId5, gId5, gId5],
		[gId5, gId5, gId5, gId5, gId9, wId1, wId1, wId1, wId1, wId1, gId7, gId5, gId5, gId5, gId5, gId5, gId5, gId5, gId5, gId5],
		[gId5, gId5, gId5, gId6, wId1, wId1, wId1, wId1, wId1, wId1, wId1, gId4, gId5, gId5, gId5, gId5, gId5, gId5, gId5, gId5],
		[gId5, gId5, gId5, gId6, wId1, wId1, wId1, wId1, wId1, wId1, gId1, gId5, gId5, gId5, gId5, gId5, gId5, gId5, gId5, gId5],
		[gId5, gId5, gId5, gId5, gId3, wId1, gId1, gId3, wId1, gId1, gId5, gId5, gId5, gId5, gId5, gId5, gId5, gId5, gId5, gId5],
		[gId5, gId5, gId8, gId8, gId8, gId2, gId5, gId5, gId2, gId5, gId5, gId5, gId5, gId5, gId5, gId5, gId5, gId5, gId5, gId5],
		[gId8, gId9, wId1, wId1, wId1, gId4, gId5, gId5, gId5, gId8, gId8, gId5, gId5, gId5, gId5, gId8, gId8, gId5, gId5, gId8],
		[wId1, wId1, wId1, wId1, wId1, gId7, gId5, gId5, gId9, wId1, wId1, gId7, gId8, gId5, gId6, wId1, wId1, gId7, gId9, wId1],
		[wId1, wId1, wId1, wId1, wId1, wId1, gId7, gId9, wId1, wId1, wId1, wId1, wId1, gId7, gId9, wId1, wId1, wId1, wId1, wId1],
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

