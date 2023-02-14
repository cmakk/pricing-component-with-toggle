const checkbox = document.getElementById("toggle");
const annPrice = document.getElementsByClassName("price-ann");
const monPrice = document.getElementsByClassName("price-mon");

function check() {
	if (checkbox.checked) {
		for (let i=0 ; i < annPrice.length ; i++) {
			annPrice[i].style.display = "none";
			monPrice[i].style.display = "inline";
		}
	} else {
		for (let i=0 ; i < annPrice.length ; i++) {
			annPrice[i].style.display = "inline";
			monPrice[i].style.display = "none";
		}
	}
};

document.addEventListener("keydown", function() {
	if (checkbox.checked) {
		checkbox.checked = false;
	} else {
		checkbox.checked = true;
	}
	check();
});