const slides = document.querySelectorAll(".slide");
const counter = document.getElementById("counter");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
  counter.textContent = `${index + 1} / ${slides.length}`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === " ") {
    nextSlide();
  }

  if (event.key === "ArrowLeft") {
    prevSlide();
  }
});

showSlide(currentSlide);