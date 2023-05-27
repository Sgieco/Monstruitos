let botonFormulario = document.querySelector('.checkin-buttonAdmin');
let formulario = document.getElementById('adminLogin');


window.addEventListener('load', function(){

    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        let errores = [];

        let email = document.getElementById('emailAdmin');

        if(email.value == ''){
            errores.push('Debes ingresar tu email');
            email.classList.add('is-invalid');

        } else {
            email.classList.add('is-valid');
            email.classList.remove('is-invalid');
        }

        let contraseña = document.getElementById('passwordAdmin');

        if (contraseña.value == ''){
            errores.push('El campo no puede estar vacio');
            contraseña.classList.add('is-valid');

        } else if (contraseña.value.length < 8){
            errores.push('La contraseña es incorrecta');
            contraseña.classList.add('is-valid');
        }
            else{
            contraseña.classList.add('is-valid');
            contraseña.classList.remove('is-invalid');
        }
   
        if(errores.length > 0){

            let ulErrores = document.querySelector('div.errores ul');
        
            for ( let i=0; i < errores.length; i++ ){

                ulErrores.innerHTML += '<li>' + errores[i] + '</li>' 
            }  

        } else {
            alert('Ingresaste a tu cuenta');

            formulario.submit();
        }   
    })
})