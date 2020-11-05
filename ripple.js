document.addEventListener("DOMContentLoaded", function() {
	let ripples = document.getElementsByClassName("ripple");

	for (let ripple of ripples) {
		ripple.innerHTML = `<section>${ripple.innerHTML}</section>`;
		let x = getComputedStyle(ripple);

		ripple.children[0].style.paddingTop = x.paddingTop;
		ripple.children[0].style.paddingRight = x.paddingRight;
		ripple.children[0].style.paddingBottom = x.paddingBottom;
		ripple.children[0].style.paddingLeft = x.paddingLeft;
		ripple.style.padding = "0";

		ripple.addEventListener("mousedown", pointer => {
			ripple.style.setProperty("--ripple-animation", "ripple-animation 300ms linear");
			ripple.style.setProperty("--ripple-positionX", pointer.offsetX + "px");
			ripple.style.setProperty("--ripple-positionY", pointer.offsetY + "px");
		});

		ripple.addEventListener("animationend", function() {
			ripple.style.setProperty("--ripple-animation", "none");
		});
	}
});
