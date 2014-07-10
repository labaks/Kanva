function dialog() {
	wrapper = document.getElementById("wrapper");

	modalArea = document.createElement("div");
	modalArea.id = "modal";
	wrapper.appendChild(modalArea);

	dialogArea = document.createElement("div");
	dialogArea.id = "dialog";
	modalArea.appendChild(dialogArea);

	function addEllToDialog(el, id, innerText) {
		var val = document.createElement(el);
		val.id = id;
		dialogArea.appendChild(val);
		val.innerHTML = innerText;
	}

	addEllToDialog("p", "dialogTitle", "Dialog title");
	addEllToDialog("button", "butOk", "Ok");
	addEllToDialog("button", "butCancel", "Cancel");

	document.getElementById("butOk").onclick = function() {
		wrapper.removeChild(document.getElementById("modal"));
		map = maps[map[player.y][player.x].id];
		draw();
	};
	document.getElementById("butCancel").onclick = function() {
		wrapper.removeChild(document.getElementById("modal"));
	};
}
