let slideIndices = [];

document.addEventListener("DOMContentLoaded", () => {
	let slideshows = document.getElementsByClassName("slideshow-container").length;
	slideIndices = new Array(slideshows).fill(1);
	
	for (let i = 0; i < slideshows; i++) {
		showSlide(1, i + 1);
	}
});

function currentSlide(n, slideshow) {
	showSlide(slideIndices[slideshow - 1] = n, slideshow);
}

function changeSlide(n, slideshow) {
	showSlide(slideIndices[slideshow - 1] += n, slideshow);
}

function showSlide(n, slideshow) {
	let container = document.getElementById(`slideshow${slideshow}`);
	if (!container) return;

	let slides = container.getElementsByClassName("slide");
	let dots = container.getElementsByClassName("dot");

	if (slides.length === 0) return;

	if (n > slides.length) { slideIndices[slideshow - 1] = 1; }
	if (n < 1) { slideIndices[slideshow - 1] = slides.length; }

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove("active");
	}

	slides[slideIndices[slideshow - 1] - 1].style.display = "block";
	if (dots.length > 0) {
		dots[slideIndices[slideshow - 1] - 1].classList.add("active");
	}
}
