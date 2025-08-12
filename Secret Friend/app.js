// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//funcionalidades : agregarAmigo, validarEntrada, visualizarLista, sortearAmigo
let amigos = [];

function agregarAmigo() {
    //obtengo el valor del input
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    //valido entrada
    validarEntrada(nombre);
    //agrego amigo
    amigos.push(nombre);
    input.value = ''; //limpio el input
    console.log(`Amigo agregado: ${nombre}`);
    //visualizo la lista de amigos
    visualizarLista();
}
////////////////////////////////////////////////////////////////////
function validarEntrada(nombre) {
    if (nombre === '') {
        alert('El nombre no puede estar vacío.');
    }
} 
function visualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; //limpio la lista antes de agregar los amigos
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
/////////////////////////////////////////////////////////////////////
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Amigo sorteado: ${amigoSorteado}`;
}
