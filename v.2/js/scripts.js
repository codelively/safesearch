const liste = [
	"How to secure my home?",
	"How to lower energy costs?",
	"Best beach vacations?",
	"How to improve running technique?",
	"How to switch to a healthier diet?",
	"Best job application tips?",
	"Best deals on flights and hotels?",
];
const zufallsIndex = Math.floor(Math.random() * liste.length);
const zufallsWert = liste[zufallsIndex];
const input = document.getElementById("searchInput");
input.placeholder = zufallsWert;

const urlParams = new URLSearchParams(window.location.search);


