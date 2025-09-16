// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Array donde almacenaremos los nombres
let amigos = [];

// Funcion que permite sustituir texte de html
function asignarTextoElem (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Listado de nombre desde el boton añadir

function agregarAmigo (){
   let nomAmigo= document.getElementById("amigo").value;
   
   if (nomAmigo === ""){
    alert ("El nombre ingresado no corresponde.");

   } else{
    nombres.push(nomAmigo);
    console.log (nombres);
   }

   const lista = document.getElementById ("lista");
   const elementoNuevo = document.getElementById ("li");
   elementoNuevo.textContent = nomAmigo;
   lista.appendChild(elementoNuevo);
   borrarCampo ();
   
}

//Funcion para borrar el campo luego de poner el nombre

function borrarCampo (){
    document.querySelector ("#amigo").value = "";
}



