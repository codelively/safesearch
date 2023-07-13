// Setzt Zufallsplaceholder für Input
const liste = ["How to secure my home?", "How to lower energy costs?", "Best beach vacations?", "How to improve running technique?", "How to switch to a healthier diet?", "Best job application tips?", "Best deals on flights and hotels?"];
const zufallsIndex = Math.floor(Math.random() * liste.length);
const zufallsWert = liste[zufallsIndex];
const input = document.getElementById("searchInput");
input.placeholder = zufallsWert;

// Button-Element auswählen und Event-Listener hinzufügen
const button = document.getElementById("submitButton");
button.addEventListener('click', toggleMode);

// URL Parameter
const urlParams = new URLSearchParams(window.location.search);

// Theme Toggle Funktion
function toggleMode() {
	var urlParams = new URLSearchParams(window.location.search);
	if(urlParams.get("theme") == "dark") {
		// Aktuelle URL öffnen mit theme Parameter (light)
		urlParams.set("theme", "light");
		var newUrl = window.location.origin + window.location.pathname + "?" + urlParams.toString();
		window.location.href = newUrl;
	} else {
		// Aktuelle URL öffnen mit theme Parameter (dark)
		urlParams.set("theme", "dark");
		var newUrl = window.location.origin + window.location.pathname + "?" + urlParams.toString();
		window.location.href = newUrl;
	}
}
if(urlParams.get("theme") == "dark") {
	document.getElementById("pageHeader").href = "./index.html?theme=dark";
	var inputs = document.getElementsByClassName("hiddenThemeInput");
	for (var i = 0; i < inputs.length; i++) {
		var loopInput = inputs[i];
		loopInput.value = "dark";
	}
	document.body.classList.add("bg-dark");
	document.body.classList.add("text-white");
	document.getElementById("navbar").classList.remove("bg-white");
	document.getElementById("navbar").classList.add("bg-dark");
	document.getElementById("navbar").classList.add("text-white");
	document.getElementById("pageHeader").classList.add("text-white");
	// Change Input Theme
	const textInputs = document.querySelectorAll('input[type="text"]');
	for (let i = 0; i < textInputs.length; i++) {
	  const input = textInputs[i];
	  input.classList.add('bg-dark', 'text-white');
	}
} else {
	document.getElementById("pageHeader").href = "./index.html?theme=light";
	var inputs = document.getElementsByClassName("hiddenThemeInput");
	for (var i = 0; i < inputs.length; i++) {
		var loopInput = inputs[i];
		loopInput.value = "light";
	}
}
