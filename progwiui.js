class progwiUI{
	constructor(appname){
		console.log("progwiUI 2.0");
				
		document.title = appname;

		document.body.style.background = "rgb(205, 205, 205)";
		document.body.style.fontFamily = "Arial";
		document.body.style.width = "100%";
		document.body.style.height = "100%";
	}
	progwiAbout(name, version, copyright){
		let about = alert(`
			${name}, version ${version}.
			${copyright}.
		`)
	}
	progwiButton(lbl, fntsz, crsr, x, y, wdth, hght, command){
		let buttonus = document.createElement("button");
		buttonus.textContent = lbl;
		
		buttonus.style.background = "linear-gradient(to bottom, rgb(255, 255, 255), rgb(205, 205, 205))";
		buttonus.style.border = "none";
		buttonus.style.borderRadius = "5px";
		buttonus.style.fontFamily = document.body.style.fontFamily;
		buttonus.style.transform = `translate(${x}%, ${y}%)`;
		buttonus.style.outline = "solid 1px";
		buttonus.style.outlineColor = "rgb(155, 155, 155)";

		buttonus.style.margin = "5px";
		
		buttonus.style.fontSize = fntsz;
		buttonus.style.cursor = crsr;
		buttonus.style.width = wdth;
		buttonus.style.height = hght;
		
		buttonus.addEventListener("mousedown", () => {
			buttonus.style.background = "linear-gradient(to bottom, rgb(205, 205, 205), rgb(255, 255, 255))";
			buttonus.style.border = "none";
			buttonus.style.borderRadius = "5px";
			buttonus.style.outline = "solid 1px";
			buttonus.style.outlineColor = "rgb(105, 105, 105)";
		});

		buttonus.addEventListener("mouseup", () => {
			buttonus.style.background = "linear-gradient(to bottom, rgb(255, 255, 255), rgb(205, 205, 205))";
			buttonus.style.border = "none";
			buttonus.style.borderRadius = "5px";
			buttonus.style.outline = "solid 1px";
			buttonus.style.outlineColor = "rgb(155, 155, 155)";
		});
				
		buttonus.addEventListener("click", command);		
		
		document.body.appendChild(buttonus);
	}
	progwiEntry(plshldr = "Enter some text here...", x, y){
		let entrus = document.createElement("input");
		
		entrus.placeholder = plshldr;
		entrus.style.border = "none";
		entrus.style.borderRadius = "5px";
		entrus.style.transform = `translate(${x}%, ${y}%)`;
		entrus.style.fontFamily = document.body.style.fontFamily;
		entrus.style.outline = "solid 1px";
		entrus.style.outlineColor = "rgb(155, 155, 155)";
		entrus.style.background = "linear-gradient(to bottom, rgb(205, 205, 205), rgb(255, 255, 255))";

		entrus.style.margin = "5px";
		
		document.body.appendChild(entrus);
	}
	progwiCheckbox(x, y){
		let checkbox = document.createElement("input");

		checkbox.setAttribute("type", "checkbox");
		checkbox.style.transform = `translate(${x}%, ${y}%)`;
		checkbox.style.accentColor = "black";

		checkbox.style.margin = "5px";
		
		document.body.appendChild(checkbox);
	}
	progwiSpace(){
		let space = document.createElement("br");

		document.body.appendChild(space);
	}
	progwiLabel(text, x, y){
		let label = document.createElement("span");
				
		label.textContent = text;
		label.style.fontFamily = document.body.style.fontFamily;
		label.style.display = "inline-block";
		label.style.transform = `translate(${x}%, ${y}%)`;				
		
		document.body.appendChild(label);
	}
}
