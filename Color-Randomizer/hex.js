let hexColors = "#F8FAFF";
const btn = document.getElementById("button");
const color = document.getElementById("coo");
const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a' ,'b', 'c', 'd', 'e', 'f'];

btn.addEventListener("click", function() {
	hexColors = "#";

	for (let i = 0; i < 6; i++) {
		let randomNum = getRandomNum();
		hexColors += hexArray[randomNum];
		console.log(randomNum + ' ' + hexColors);
	}
	document.body.style.backgroundColor = hexColors;
	color.style.color = hexColors;
	color.textContent = hexColors;
});

function getRandomNum() {
	return Math.floor(Math.random() * 16);
}
