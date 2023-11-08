const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const slider = document.querySelector(".banner-img");
const tagLine = document.querySelector(".texte_slide");
const dots = document.querySelectorAll(".dot");
const prevButton = document.querySelector(".arrow_left");
const nextButton = document.querySelector(".arrow_right");

let SlideActuel = 0;

function SlideChanger() {
    slider.src = `./assets/images/slideshow/${slides[SlideActuel].image}`;
    tagLine.innerHTML = slides[SlideActuel].tagLine;

    dots.forEach((dot, index) => {
        if (index === SlideActuel) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}

function nextSlide() {
    SlideActuel = (SlideActuel + 1) % slides.length;
    SlideChanger();
}

function prevSlide() {
    SlideActuel = (SlideActuel - 1 + slides.length) % slides.length;
    SlideChanger();
}

nextButton.addEventListener("click", () => {
    nextSlide();
    SlideChanger();
});

prevButton.addEventListener("click", () => {
    prevSlide();
    SlideChanger();
});

SlideChanger();

// Automatic sliding
setInterval(() => {
    nextSlide();
    SlideChanger();
}, 5000);