// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listadeamigos = [];

//botón de añadir
function agregarAmigo(){
    //obtenemos el valor (nombre del amigo) del input
    let amigoañadido = document.getElementById('amigo').value;
    //validamos de que no esté vacío
    amigoañadido === '' ? alert('ingrese un nombre porfavor') : listadeamigos.push(amigoañadido);
    //mostramos
    mostraramigo('listaAmigos', `${listadeamigos}`);
    Limpiarinput('amigo');
}
//funcion de mostrar los nombres en la lista de html
function mostraramigo(elemento, amigos){
    let elementohtml= document.getElementById(elemento);
    //limpiamos la lista cada que se añada un nuevo amigo
    elementohtml.innerHTML = '';
    for(let i=0; i<listadeamigos.length; i++){
        //se crea el <li> mediante una variable li
        let li = document.createElement('li');
        //se le asigna el valor del array listadeamigos con el indice del valor de i
        li.textContent = listadeamigos[i];
        //se inserta o anexa la etiqueta li al <ul>
        elementohtml.appendChild(li);
    }
}

function sortearAmigo(){
    //generamos el indice para el amigo secreto elegido (el suertudo)
    let indicesorteado = Math.floor(Math.random()*listadeamigos.length);
    //a suertudo le asignamos el input donde va el resultado
    let suertudo = document.getElementById('resultado');
    // validamos de que la lista de amigos no esté vacía
    listadeamigos === '' ? alert('ingrese los amigos porfavor') : (suertudo.innerHTML=(`el amigo secreto sorteado es: ${listadeamigos[indicesorteado]}`));   
}

function Limpiarinput(input){
    document.getElementById(input).value='';
}