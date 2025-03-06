const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

cookie.onclick = () => {
  clickerCounter.textContent = parseInt(clickerCounter.textContent, 10) + 1;
  let currentWidth = cookie.width;
  cookie.width = currentWidth * 1.4;

  setTimeout(() => {
    cookie.width = currentWidth;
  }, 100);
};
