function dialog() {
	wrapper = document.getElementById("wrapper");

	dialogArea = document.createElement("div");
	dialogArea.id = "dialog";
	wrapper.appendChild(dialogArea);

	dialogTitle = document.createElement("p");
	dialogTitle.id = "dialogTitle";
	dialogArea.appendChild(dialogTitle);
	dialogTitle.innerHTML = "Dialog title";

	butOk = document.createElement("button");
	butOk.id = "butOk"
	dialogArea.appendChild(butOk);
	butOk.innerHTML = "Ok";

	butCancel = document.createElement("button");
	butCancel.id = "butCancel";
	dialogArea.appendChild(butCancel);
	butCancel.innerHTML = "Cancel";

	butOk.onclick = function() {
		wrapper.removeChild(document.getElementById("dialog"));
		map = maps[map[player.y][player.x].id];
		draw();
	};
	butCancel.onclick = function() {
		wrapper.removeChild(document.getElementById("dialog"));
	}
}
