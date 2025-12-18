let mainCanvas = document.getElementById("maincanvas");
let footerCanvas = document.getElementById("footercanvas");
let ctm = mainCanvas.getContext("2d");
let ctf = footerCanvas.getContext("2d");

ctm.beginPath();
ctm.moveTo(0, 0);
ctm.lineTo(700, 100);
ctm.lineTo(1400, 0);
ctm.fillStyle = "#4C4C4C";
ctm.stroke();
ctm.fill();
ctm.closePath();

ctf.beginPath();
ctf.moveTo(0, 0);
ctf.lineTo(700, 100);
ctf.lineTo(1400, 0);
ctf.fillStyle = "#F8F5F2";
ctf.stroke();
ctf.fill();

ctm.closePath();

document.addEventListener('DOMContentLoaded', () => {
	const slides = document.querySelectorAll('.section_quality_block'); 
	const prevBtn = document.querySelector('.slider__prev');
	const nextBtn = document.querySelector('.slider__next');
	let currentSlide = 0;
	
	const showSlide = (index) => {
		if (window.innerWidth <= 425) {
			slides.forEach((slide, i) => {
				slide.style.display = i === index ? 'flex' : 'none';
			});
		} else {
			slides.forEach((slide) => {
				slide.style.display = 'flex';
			});
		}
	};
	
	const nextSlide = () => {
		if (window.innerWidth <= 425) {
			currentSlide = (currentSlide + 1) % slides.length;
			showSlide(currentSlide);
		}
	};
	
	const prevSlide = () => {
		if (window.innerWidth <= 425) {
			currentSlide = (currentSlide - 1 + slides.length) % slides.length;
			showSlide(currentSlide);
		}
	};
	
	nextBtn.addEventListener('click', nextSlide);
	prevBtn.addEventListener('click', prevSlide);
	
	window.addEventListener('resize', () => {
		showSlide(currentSlide);
	});
	
	showSlide(currentSlide);
});

const reviews = document.querySelectorAll('.review');
const prevBtn = document.querySelector('.button_review-back');
const nextBtn = document.querySelector('.button_review-next');

let current = 0;

function showReview(index){
    reviews.forEach(review => review.classList.remove('active'));
    reviews[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    current++;
    if(current >= reviews.length){
        current = 0;
    }
    showReview(current);
});

prevBtn.addEventListener('click', () => {
    current--;
    if(current < 0){
        current = reviews.length - 1;
    }
    showReview(current);
});
