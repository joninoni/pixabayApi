//variables
const formulario=document.querySelector("#formulario");
const resultado=document.querySelector("#resultado");

//eventos
window.onload = () => {
    formulario.addEventListener("submit",validarFormulario);
}

//funciones
function validarFormulario(e){
    e.preventDefault();
    const terminoBusqueda=document.querySelector("#termino").value;
    if(terminoBusqueda===""){
        console.log("no puede haber campos vacios");
        return;
    }
}