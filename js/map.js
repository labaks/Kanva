function cell(type, id, color) {
	return {
		type: type,
		id: id,
		color: color
	};
}
var maps = {};

var wId1 = cell("water", 1, "blue");
var gId1 = cell("ground", 1, "green");
var dId1 = cell("door", "map2", "#fcb");
var dId2 = cell("door", "map1", "#fcb");

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

