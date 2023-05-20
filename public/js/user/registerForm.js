const d = document;
const selectProvincia = document.querySelector('#provincia');
const selectLocalidad = document.querySelector('#localidad');

//traemos el listado de provincias
function provincia(){
    fetch('https://apis.datos.gob.ar/georef/api/provincias')
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(json => {
        let options = '<option value="Elige tu provincia">Elige tu Provincia</option>';

        json.provincias.forEach(element => options += `<option value='${element.nombre}'>${element.nombre}</option>`);

        selectProvincia.innerHTML = options;

    })
}

d.addEventListener('DOMContentLoaded', provincia);

function localidades(provincia) {
    fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${provincia}&campos=nombre&max=5000`)
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(json => {
        let options = '<option value="Elige tu localidad">Elige tu Localidad</option>';

        json.localidades.forEach(element => options += `<option value='${element.nombre}'>${element.nombre}</option>`);

        selectLocalidad.innerHTML = options;

    })
}

//guarda la provincia seleccionada
selectProvincia.addEventListener('change', e =>{
    localidades(e.target.value);// almaenamos el valor que selecciona el usuario
})
