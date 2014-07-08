function cell(type, id) {
	return { type: type, id: id };
}
var maps = {};

var waterId1 = cell("water", 1);
var groundId1 = cell("ground", 1);
var tpId1 = cell("tp", "map2");
var tpId2 = cell("tp", "map1");

maps.map1 =
	[
		[waterId1,  waterId1,  waterId1,  waterId1,  waterId1,  waterId1,  waterId1,  waterId1,  waterId1,  waterId1],
		[waterId1,  waterId1,  waterId1,  waterId1,  groundId1, groundId1, groundId1, waterId1,  waterId1,  waterId1],
		[waterId1,  waterId1,  groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, waterId1,  waterId1],
		[groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, groundId1],
		[groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, tpId1],
		[groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, groundId1],
		[waterId1,  groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, waterId1],
		[waterId1,  groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, waterId1,  waterId1,  waterId1],
		[waterId1,  groundId1, groundId1, groundId1, groundId1, waterId1,  groundId1, waterId1,  waterId1,  waterId1],
		[waterId1,  waterId1,  waterId1,  waterId1,  waterId1,  waterId1,  waterId1,  waterId1,  waterId1,  waterId1],
	];

maps.map2 =
	[
		[waterId1,  waterId1,  waterId1,  waterId1,  waterId1,  waterId1,  waterId1,  waterId1,  waterId1,  waterId1],
		[waterId1,  waterId1,  waterId1,  waterId1,  groundId1, groundId1, groundId1, waterId1,  waterId1,  waterId1],
		[waterId1,  waterId1,  groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, waterId1,  waterId1],
		[groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, waterId1],
		[tpId2,     groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, waterId1],
		[groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, waterId1],
		[waterId1,  groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, waterId1,  waterId1],
		[waterId1,  groundId1, groundId1, groundId1, groundId1, groundId1, groundId1, waterId1,  waterId1,  waterId1],
		[waterId1,  groundId1, groundId1, groundId1, groundId1, waterId1,  groundId1, waterId1,  waterId1,  waterId1],
		[waterId1,  waterId1,  waterId1,  waterId1,  waterId1,  waterId1,  waterId1,  waterId1,  waterId1,  waterId1],
	];

function switchMap() {
	if (clickOk) {
		map = maps[map[playerY][playerX].id];
	};
}
