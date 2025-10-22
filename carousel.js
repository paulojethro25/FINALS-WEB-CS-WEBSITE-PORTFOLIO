// Select all carousels
const carousels = document.querySelectorAll('.project-carousel');

carousels.forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const prevButton = carousel.querySelector('.prev');
  const nextButton = carousel.querySelector('.next');
  const dotsContainer = carousel.querySelector('.carousel-dots');
  let currentIndex = 0;

  // Create dots
  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    if(idx === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  });
  const dots = Array.from(dotsContainer.children);

  // Update function
  function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
  }

  // Next button
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  // Prev button
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  // Dot navigation
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      currentIndex = idx;
      updateCarousel();
    });
  });
});
