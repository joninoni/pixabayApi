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
        mostrarAlerta("Agrega un termino de busqueda");
        return;
    }
}

function mostrarAlerta(mensaje){
    const existe=document.querySelector(".bg-red-100");
    if (!existe) {
        const alerta=document.createElement("p");
        alerta.classList.add("bg-red-100","border-red-400","text-red-700","px-4","py-3","rounded","max-w-lg","mx-auto","mt-6","text-center");
        alerta.innerHTML=
        `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;
        formulario.appendChild(alerta);
        setTimeout(() => {
            alerta.remove();
        }, 2000);
    }
}