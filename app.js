// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listadeamigos = [];
let listanum = [1,2,3];

//botón de añadir
function agregarAmigo(){
    let amigoañadido = listadeamigos.push(document.getElementById('amigo').value);
    mostraramigo('listaAmigos', `${listadeamigos}`);
    Limpiarinput();
}

function mostraramigo(elemento, msj){
    let elementohtml= document.getElementById(elemento);
    elementohtml.innerHTML = msj;
}
console.log(listanum)

function Limpiarinput(){
    document.getElementById('amigo').value='';
}

