//MENU HAMBURGUESA
const burgerMenu = document.querySelector('#menu');
const menuList = document.querySelector('#list');

burgerMenu.addEventListener('click', () => {
    menuList.classList.toggle('activado')
})

//POP UP LOGIN
const openLogin = document.querySelector('#open-login');
const popupLogin = document.querySelector('#popup-login');
const closeLogin = document.querySelector('#close-login');

openLogin.addEventListener('click', ()=> {
    popupLogin.showModal()
});

closeLogin.addEventListener('click', () => {
    popupLogin.close();
});

