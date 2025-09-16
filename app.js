// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Array donde almacenaremos los nombres
let nombres = []; 

//Listado de nombre desde el boton añadir

function agregarAmigo (){
   let newAmigo= document.getElementById("amigo").value;
   
   
   if (newAmigo === ""){
    alert ("Ingrese un nombre.");

   } else{
    if (/\d/. test(newAmigo)){
        alert ("NO pongas numeros");
        borrarCampo();
    } else {
        if (nombres.includes(newAmigo)){
            alert("Este nombre se repite en la lista. Escriba uno nuevo.");
            borrarCampo();
    }   else  {
         nombres.push(newAmigo);
         borrarCampo();
         mostrarAmigos();
        }
    } 
 } 
}
   
   
    


//Funcion para borrar el campo luego de poner el nombre

function borrarCampo (){
    document.getElementById ("resultado").textContent = "";
    document.querySelector ("#amigo").value = "";
}

// Funcion que muestra en una lista la cantidad de amigos
// Al actualizar la pagina se limpia la lista

function mostrarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    
    for (let i=0; i<nombres.length; i++){
        let cadaAmigo = document.createElement("li");
        cadaAmigo.textContent = nombres[i];
        listaAmigos.appendChild(cadaAmigo);
    }
}

function sortearAmigo (){

    if (nombres.length === 0){
        alert("No hay nombres para sortear");
        resultado.textContent = "";
        return;

    } else{
        let sortear = Math.floor(Math.random()* nombres.length); 
        let nombreSelec = nombres [sortear];
        document.getElementById("resultado").innerHTML = `${nombreSelec}`;
    }    

}




function reiniciarJuego(){
    nombres = [];

    document.getElementById("listaAmigos").innerHTML="";
    document.getElementById("resultado").innerHTML = "";

    borrarCampo();

    console.log( "Juego reiniciado");

    nombres.length = 0;
}

