document.addEventListener("DOMContentLoaded", function () {
  const slidesContainer = document.querySelector(".mainslides");
  const slideCount = slidesContainer.children.length;
  let slideIndex = 0;

  slidesContainer.appendChild(
    slidesContainer.firstElementChild.cloneNode(true)
  );
  function nextSlide() {
    slideIndex++;
    slidesContainer.style.transition =
      " transform 0.5s cubic-bezier(1, 0, 0, 0.99)";
    slidesContainer.style.transform = `translateX(-${slideIndex * 100}vw)`;

    if (slideIndex === slideCount) {
      setTimeout(() => {
        slidesContainer.style.transition = "none";
        slidesContainer.style.transform = "translateX(0)";
        slideIndex = 0;
      }, 500); // Adjust this timing to match transition duration
    }
  }

  setInterval(nextSlide, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
  const slideContainer = document.querySelector("#slide-container");
  const slides = slideContainer.children;
  const slideCount = slides.length - 1; // Adjust for the duplicate first slide
  const slideWidth = slideContainer.clientWidth;
  let slideIndex = 0;

  function nextSlide() {
    slideIndex++;

    slideContainer.style.transition =
      " transform 0.5s cubic-bezier(1, 0, 0, 0.99)";
    slideContainer.style.transform = `translateX(-${
      slideIndex * slideWidth
    }px)`;

    if (slideIndex === slideCount) {
      setTimeout(() => {
        slideContainer.style.transition = "none";
        slideContainer.style.transform = "translateX(0)";
        slideIndex = 0;
      }, 500); // Adjust this timing to match transition duration
    }
  }

  // Set up the slider
  setInterval(nextSlide, 3000); // Change slide every 3 seconds (3000ms)
});
