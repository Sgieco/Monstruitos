//POP UP TABLA TALLES
const openButton = document.querySelector('#open-info');
const closeButton = document.querySelector('#close-info');
const popupSizes = document.querySelector('#popup-sizes');


openButton.addEventListener('click', () => {
    popupSizes.showModal();
});

closeButton.addEventListener('click', () => {
    popupSizes.close();
});




