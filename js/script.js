///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///
// let slidePosition = 0;
// const slides = document.getElementsByClassName('carousel__item');
// const totalSlides = slides.length;

// document.
//   getElementById('carousel__button--next')
//   .addEventListener("click", function() {
//     moveToNextSlide();
//   });
// document.
//   getElementById('carousel__button--prev')
//   .addEventListener("click", function() {
//     moveToPrevSlide();
//   });

// function updateSlidePosition() {
//   for (let slide of slides) {
//     slide.classList.remove('carousel__item--visible');
//     slide.classList.add('carousel__item--hidden');
//   }

//   slides[slidePosition].classList.add('carousel__item--visible');
// }

// function moveToNextSlide() {
//   if (slidePosition === totalSlides - 1) {
//     slidePosition = 0;
//   } else {
//     slidePosition++;
//   }

//   updateSlidePosition();
// }

// function moveToPrevSlide() {
//   if (slidePosition === 0) {
//     slidePosition = totalSlides - 1;
//   } else {
//     slidePosition--;
//   }

//   updateSlidePosition();
// }

jQuery(document).ready(function () { var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor); if (window.location.hash && isChrome) { setTimeout(function () { var hash = window.location.hash; window.location.hash = “”; window.location.hash = hash; }, 300); } });