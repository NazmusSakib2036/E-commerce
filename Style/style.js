let currentSlide = 0;

function goToSlide(slideIndex) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${100 * slideIndex}%)`;
    document.querySelectorAll('.indicator')[index].classList.toggle('active', index === slideIndex);
  });
  currentSlide = slideIndex;
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % document.querySelectorAll('.slide').length;
  goToSlide(currentSlide);
}, 5000);


// Disable right-click
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Disable text selection and drag events
document.addEventListener('selectstart', function(event) {
    event.preventDefault();
});

document.addEventListener('dragstart', function(event) {
    event.preventDefault();
});

// Disable specific keyboard shortcuts (like Ctrl+U, Ctrl+S, Ctrl+C, Ctrl+Shift+I)
document.addEventListener('keydown', function(event) {
    // Prevent Ctrl+U, Ctrl+S, Ctrl+C, Ctrl+Shift+I
    if (
        (event.ctrlKey && ['u', 's', 'c'].includes(event.key.toLowerCase())) ||
        (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'i')
    ) {
        event.preventDefault();
    }
});


function toggleMenu() {
    const menu = document.querySelector('.all_proparti');
    menu.classList.toggle('show');
}
