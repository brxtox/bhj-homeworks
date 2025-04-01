const reveals = document.querySelectorAll('.reveal');


function checkVisibility() {
  reveals.forEach((reveal) => {
    const { top, bottom } = reveal.getBoundingClientRect();
    const isVisible = (bottom > 0) && (top < window.innerHeight);

    reveal.classList.toggle('reveal_active', isVisible);

  });
}


checkVisibility();


window.addEventListener('scroll', checkVisibility);