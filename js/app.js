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
    obtenerImagenes(terminoBusqueda);
}

function obtenerImagenes(termino){

    terminoFormateado=termino.replace(/\s/g, '+');//para poder tener un termino de varias palabras ejemplo:casas azules;
    const key=`41208820-8ef12a29f5aeb69c4e14f36cc`;

    //key hace referencia a nuestra propia apikey
    //& concatena un termino de busqueda por lo cual podemos tener varios 
    const url=`https://pixabay.com/api/?key=${key}&q=${terminoFormateado}`;
   
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarImagenes(resultado.hits))
}

function mostrarImagenes(imagenes){
    imagenes.forEach(imagen => {
        const {previewURL,likes,views,largeImageURL} = imagen;
        resultado.innerHTML+=
        `
            <di class="w-1/2 md:w-1/3 lg:w-1/4 mb-4">
                <div class="bg-white">
                    <img class="w-full" src="${previewURL}">

                    <div class="p-4">
                        <p class="font-bold">${likes} <span class="font-light">Me Gusta</span></p>
                        <p class="font-bold">${views} <span class="font-light">Veces Vista</span></p>
                        <a
                            class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                            href="${largeImageURL}" target="_blank" rel="noopener noreferrer"
                        >
                            Ver Imagen
                        </a>
                    </div>
                </div>
            </di>
        `
    });
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