const botonResta = document.querySelector('#resta');
const botonSuma = document.querySelector('#suma');


botonSuma.addEventListener('click', ()=>{
    let contador = document.querySelector('#contador');
    
    let resultado = ++contador.value

    contador = resultado
})

botonResta.addEventListener('click', ()=>{
    let contador = document.querySelector('#contador');
    
    let resultado = --contador.value

    contador = resultado
})