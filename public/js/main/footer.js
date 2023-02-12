//POP UP LOGIN ADMINISTRADOR
const openLoginAdmin = document.querySelector('#open-loginAdmin');
const popupLoginAdmin = document.querySelector('#popup-loginAdm');
const closeLoginAdmin = document.querySelector('#close-loginAdmin');

openLoginAdmin.addEventListener('click', ()=> {
    popupLoginAdmin.showModal()
});

closeLoginAdmin.addEventListener('click', ()=> {
    popupLoginAdmin.close()
});