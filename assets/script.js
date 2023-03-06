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

// On récupère les deux flèches
let next = document.querySelector('.arrow_right');
let prev = document.querySelector('.arrow_left');

const points = document.querySelectorAll('.dot');
const numberOfSlides = slides.length;
var slideNumber = 0;

next.addEventListener('click', slideNext);
prev.addEventListener('click', slidePrev);

function slideNext() {
    
	points.forEach((point)=>{
		point.classList.remove("dot_selected"); // on change le bullet point actif au suivant
	});
	slideNumber++;
	if(slideNumber > (numberOfSlides - 1)){
		slideNumber = 0;
	}
	points[slideNumber].classList.add("dot_selected"); // le point qui signale la diapositive en cours de visionnage

	document.images[1].src = "./assets/images/slideshow/" + slides[slideNumber].image;
	document.querySelector("#banner p").innerHTML = slides[slideNumber].tagLine;
}

function slidePrev() {
    

	points.forEach((point)=>{
		point.classList.remove("dot_selected");
	});
	slideNumber--;
	if(slideNumber < 0 ){
		slideNumber = numberOfSlides - 1;
	}
	points[slideNumber].classList.add("dot_selected");

	document.images[1].src = "./assets/images/slideshow/" + slides[slideNumber].image;
	document.querySelector("#banner p").innerHTML = slides[slideNumber].tagLine;
}
