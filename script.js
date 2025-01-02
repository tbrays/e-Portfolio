let slideIndices = [1, 1];
showSlide(1, 1);
showSlide(1, 2);

function currentSlide(n, slideshow) {
	showSlide(slideIndices[slideshow - 1] = n, slideshow);
}

function changeSlide(n, slideshow) {
	showSlide(slideIndices[slideshow - 1] += n, slideshow);
}

function showSlide(n, slideshow) {
	let container = document.getElementById(`slideshow${slideshow}`);
	let slides = container.getElementsByClassName("slide");
	let dots = container.getElementsByClassName("dot");

	if (n > slides.length) { slideIndices[slideshow - 1] = 1; }
	if (n < 1) { slideIndices[slideshow - 1] = slides.length; }

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove("active");
	}

	slides[slideIndices[slideshow - 1] - 1].style.display = "block";
	dots[slideIndices[slideshow - 1] - 1].classList.add("active");
}
