// eslint-disable-next-line no-console
const accordionListItem = document.getElementsByClassName('accordion-item__title');
for(let i = 0; i < accordionListItem.length; i++) {
    const currentItem = accordionListItem[i];
    currentItem.addEventListener('click', (event) => {
        currentItem.parentElement.classList.toggle('active');
    })
}

