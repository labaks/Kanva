function cell(type, id) {
	return { type: type, id: id };
}
var maps = {};

var wId1 = cell("water", 1);
var gId1 = cell("ground", 1);
var tpId1 = cell("tp", "map2");
var tpId2 = cell("tp", "map1");

maps.map1 =
	[
		[wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1],
		[wId1, wId1, wId1, wId1, gId1, gId1, gId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, gId1, gId1, gId1, wId1, wId1, wId1],
		[wId1, wId1, gId1, gId1, gId1, gId1, gId1, gId1, wId1, wId1, wId1, wId1, wId1, wId1, gId1, gId1, gId1, gId1, wId1, wId1],
		[gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, wId1, wId1, gId1, gId1, gId1, gId1, gId1],
		[gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, wId1, wId1, wId1, gId1, gId1, gId1, tpId1],
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
		[wId1,  wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1],
		[wId1,  wId1, gId1, gId1, gId1, gId1, gId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1],
		[gId1,  gId1, gId1, gId1, gId1, gId1, gId1, wId1, gId1, gId1, gId1, gId1, gId1, wId1, wId1, wId1, wId1, wId1, gId1, wId1],
		[gId1,  gId1, gId1, gId1, gId1, gId1, gId1, wId1, wId1, wId1, gId1, gId1, gId1, wId1, wId1, wId1, gId1, wId1, gId1, gId1],
		[tpId2, gId1, gId1, gId1, gId1, gId1, gId1, gId1, wId1, gId1, gId1, gId1, gId1, gId1, gId1, wId1, gId1, gId1, gId1, gId1],
		[gId1,  gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1],
		[gId1,  gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1],
		[gId1,  gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, wId1],
		[gId1,  gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1],
		[gId1,  gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1],
		[wId1,  gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1],
		[wId1,  wId1, wId1, wId1, wId1, wId1, wId1, wId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, gId1, wId1],
		[wId1,  wId1, wId1, wId1, wId1, wId1, wId1, wId1, gId1, wId1, wId1, gId1, gId1, gId1, gId1, wId1, wId1, gId1, wId1, wId1],
		[wId1,  wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, gId1, gId1, wId1, wId1, wId1, wId1, wId1, wId1],
		[wId1,  wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1, wId1],
	];

function switchMap() {
	if (clickOk) {
		map = maps[map[playerY][playerX].id];
	};
}
