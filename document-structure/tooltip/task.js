const hasTooltip = document.querySelectorAll('.has-tooltip');
const toolTip = document.createElement('div');
toolTip.classList.add('tooltip');

hasTooltip.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    toolTip.textContent = e.target.getAttribute('title');
    e.target.insertAdjacentElement('afterEnd', toolTip);
    toolTip.classList.toggle('tooltip_active');

    const rect = item.getBoundingClientRect();
    toolTip.style.left = `${rect.left}px`;
    toolTip.style.top = `${rect.bottom}px`;
  });
});

