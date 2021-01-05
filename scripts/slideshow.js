let slidePos = 1;
var loader = document.getElementById('slideloader');

showSlide(slidePos);

function showSlide(n) {
  let slides = document.getElementsByClassName('slide');
  let i;
  if (n < 1) {
    slidePos = slides.length;
  }
  if (n > slides.length) {
    slidePos = 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slidePos - 1].style.display = 'block';
}

function setSlide(n) {
  showSlide((slidePos += n));
}

function setCurrentSlide(n) {
  showSlide((slidePos = n));
}

setInterval(() => {
  setSlide(1);
}, 7000);
