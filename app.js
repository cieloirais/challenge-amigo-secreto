let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();

    if (!nombreAmigo) {
        alert("Debes ingresar un nombre");
        return;
    }

    // Evitar nombres duplicados
    if (amigo.includes(nombreAmigo)) {
        alert("Este amigo ya está en la lista");
        return;
    }

    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    rendAmigos();
}

function rendAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigo.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigo.length === 0) {
        alert("No hay amigos para sortear, añádelos :)");
        return;
    }

    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong></p>`;

    // Limpiar lista de amigos después del sorteo
    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
    amigo = [];  // Vaciado de arreglo
}
