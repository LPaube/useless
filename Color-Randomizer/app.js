const colors = ["green", "red", "#45Fe99", "#ad4589"];
const btn = document.getElementById("button");
const color = document.getElementById("coo");

btn.addEventListener("click", function() {
	const randomNumber = getRandomNumber();
	console.log(randomNumber);

	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
	color.style.color = colors[randomNumber];
});

function getRandomNumber() {
	console.log('f');
	return Math.floor(Math.random() * colors.length);
}
