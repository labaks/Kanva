function cell(type, id) {
	return { type: type, id: id };
}
var waterId1 = cell("water", 1);
var groundId1 = cell("ground", 1);
var tpId1 = cell("tp", 1);
var tpId2 = cell("tp", 2);

map1 =
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
	]

map2 =
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
}
