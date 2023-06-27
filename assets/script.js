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

// Declaration des variables

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const img = document.querySelector('.banner-img');
const dots = document.querySelector('.dots');
let position = 0
//



//fonction active --> MAJ de la source 

function slideActive() {
	img.src = "./assets/images/slideshow/"+ slides[position].image;
 updateActiveDot();
}

//fonction pour les dots

function updateActiveDot() {
	const dotElements = document.querySelectorAll('.dot');
	dotElements.forEach((dot, index) => {
		if (index === position) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
}


//clique fleches gauches par rapport à la position 
arrowLeft.addEventListener('click', () => {

if(position === 0)
	{
		position = slides.length-1;
	}
	else{
		position --
	}
	slideActive()
});

//clique fleches droite par rapport à la position 
arrowRight.addEventListener('click', () => {
	
	if(position === slides.length-1)
	{
		position = 0;
	}
	else{
		position ++
	}
	slideActive()
});


// creation des dots

slides.forEach((slide, index) => {
	const myDot = document.createElement('div')
	if (index === 0 ) { 
		myDot.className = 'dot dot_selected'
	}
	else{
		myDot.className = "dot"; 
	}
	document.querySelector ('.dots').appendChild(myDot)
	
});





