function dialog() {
	wrapper = document.getElementById("wrapper");

	modalArea = document.createElement("div");
	modalArea.id = "modal";
	wrapper.appendChild(modalArea);

	dialogArea = document.createElement("div");
	dialogArea.id = "dialog";
	modalArea.appendChild(dialogArea);

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

	clickOk = false;

	butOk.onclick = function() {
		wrapper.removeChild(document.getElementById("modal"));
		clickOk = true;
		switchMap();
		draw();
	};
	butCancel.onclick = function() {
		wrapper.removeChild(document.getElementById("modal"));
	}
}
