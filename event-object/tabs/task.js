document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tabs').forEach((tabsContainer) => {
    const tabNav = tabsContainer.querySelector('.tab__navigation');
    const tabs = [...tabNav.querySelectorAll('.tab')];
    const contents = Array.from(tabsContainer.querySelector('.tab__contents').children);

    tabs.forEach((tab, index) => {

      tab.addEventListener('click', () => {
        const tabActive = tabNav.querySelector('.tab_active');
        const tabContentActive = tabsContainer.querySelector('.tab__content_active');

        if (tabActive) tabActive.classList.remove('tab_active');
        if (tabContentActive) tabContentActive.classList.remove('tab__content_active');

        tab.classList.add('tab_active');
        contents[index].classList.add('tab__content_active');
      });
    });
  });
});