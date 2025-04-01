document.querySelectorAll('.rotator').forEach((rotator) => {
  const rotatorCases = rotator.querySelectorAll('.rotator__case');
  let currentIndex = 0;
  function setClass() {
    rotatorCases[currentIndex].classList.remove('rotator__case_active');
    currentIndex = (currentIndex + 1) % rotatorCases.length;
    rotatorCases[currentIndex].classList.add('rotator__case_active');
  };
  setInterval(setClass, 1000);
});
