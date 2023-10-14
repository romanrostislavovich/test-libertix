// eslint-disable-next-line no-console
const accordionListItem = document.getElementsByClassName('accordion-item__title');
for (let i = 0; i < accordionListItem.length; i += 1) {
  const currentItem = accordionListItem[i];
  currentItem.addEventListener('click', () => {
    currentItem.parentElement.classList.toggle('active');
  });
}
