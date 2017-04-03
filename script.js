var reklama = document.getElementById("reklama");
reklama.style.right = -400 + "px";
function animacja () {
	reklama.style.right = (parseInt(reklama.style.right)+1) + "px";
	if (parseInt(reklama.style.left) == 0) {
		reklama.style.right = -400 + "px";
		}
}
setInterval("animacja();",25);
