
const dropDowns = Array.from(document.querySelectorAll('.dropdown'));


dropDowns.forEach(dropDown => {
  const dropdownValue = dropDown.querySelector('.dropdown__value');
  const dropdownList = dropDown.querySelector('.dropdown__list');
  const dropdownItems = dropDown.querySelectorAll('.dropdown__item');
  dropDown.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
  });

  dropdownItems.forEach(dropdownItem => {

    dropdownItem.addEventListener('click', (e) => {
      e.preventDefault();
      dropdownValue.textContent = dropdownItem.textContent.trim();
    });
  });
});