document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
	var leftPanel = document.getElementById("leftPanel");
	var rightPanel = document.getElementById("rightPanel");
	leftPanel.style.height = rightPanel.style.height = deviceHeight;
	leftPanel.style.width = rightPanel.style.width = (deviceWidth - toPx(collCanvasCellsWidth)) / 2;
	init();
}
var deviceWidth = window.document.documentElement.clientWidth;
var deviceHeight = window.document.documentElement.clientHeight;
// data
var collCanvasCellsWidth = 20;
var collCanvasCellsHeight = 15;
var playerSize = 1;
var oneCell = 1;
var oneStep = 1;

// Converter start
var cellSize = deviceHeight / collCanvasCellsHeight;

function toPx(val) {
	return val * cellSize;
}
// Converter end
var player = new Point(2, 2);

var textures = {
	field: createTexture('img/texture1.png'),
	player: createTexture('img/player.png')
}

function createTexture(source) {
	var texture = new Image();
	texture.src = source;
	return texture;
}
function Point(x, y) {
	this.x = x;
	this.y = y;
}
Point.prototype.move = function(x, y) {
	this.x = x;
	this.y = y;
};
function pieceTexture(px, py, pWidth, pHeight) {
	return {
		px: px,
		py: py,
		pWidth: pWidth,
		pHeight: pHeight
	};
}
function drawTexture(image, point, size, piece) {
	ctx.drawImage(image, piece.px * piece.pWidth, piece.py * piece.pHeight, piece.pWidth, piece.pHeight, toPx(point.x), toPx(point.y), toPx(size), toPx(size));
}
// function drawRect(color, point, size) {
// 	ctx.fillStyle = color;
// 	ctx.fillRect(toPx(point.x), toPx(point.y), toPx(size), toPx(size));
// }
function draw() {
	background();
	drawPlayer();
}
function init() {
	canvas = document.getElementById('myCanv');
	ctx = canvas.getContext('2d');
	canvas.width = toPx(collCanvasCellsWidth);
	canvas.height = deviceHeight;
	canvas.style.backgroundColor = "#ccc";
	map = maps.map1;
	draw();
	bindEventHandlers();
}

function drawPlayer() {
	var playerPiece = pieceTexture(0, 0, 50, 50);
	textures.player.onload = function() {
		drawTexture(textures.player, player, playerSize, playerPiece)
	}

}

function background() {
	textures.field.onload = function(){
	for (var x = 0; x < collCanvasCellsWidth; x++) {
		for (var y = 0; y < collCanvasCellsHeight; y++) {
			var mapPiece = pieceTexture(map[y][x].px, map[y][x].py, 50, 50);
			drawTexture(textures.field, {x: x, y: y}, oneCell, mapPiece);
			}
		}
	}
}
