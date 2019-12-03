var cartas = [
    [1, "./assets/img/clubs_1.png"],
    [2, "./assets/img/clubs_2.png"],
    [3, "./assets/img/clubs_3.png"],
    [4, "./assets/img/clubs_4.png"],
    [5, "./assets/img/clubs_5.png"],
    [6, "./assets/img/clubs_6.png"],
    [7, "./assets/img/clubs_7.png"],
    [8, "./assets/img/clubs_8.png"],
    [9, "./assets/img/clubs_9.png"],
    [10, "./assets/img/clubs_10.png"],
    [10, "./assets/img/clubs_11.png"],
    [10, "./assets/img/clubs_12.png"],
    [10, "./assets/img/clubs_13.png"],
    [1, "./assets/img/diamond_1.png"],
    [2, "./assets/img/diamond_2.png"],
    [3, "./assets/img/diamond_3.png"],
    [4, "./assets/img/diamond_4.png"],
    [5, "./assets/img/diamond_5.png"],
    [6, "./assets/img/diamond_6.png"],
    [7, "./assets/img/diamond_7.png"],
    [8, "./assets/img/diamond_8.png"],
    [9, "./assets/img/diamond_9.png"],
    [10, "./assets/img/diamond_10.png"],
    [10, "./assets/img/diamond_11.png"],
    [10, "./assets/img/diamond_12.png"],
    [10, "./assets/img/diamond_13.png"],
    [1, "./assets/img/hearts_1.png"],
    [2, "./assets/img/hearts_2.png"],
    [3, "./assets/img/hearts_3.png"],
    [4, "./assets/img/hearts_4.png"],
    [5, "./assets/img/hearts_5.png"],
    [6, "./assets/img/hearts_6.png"],
    [7, "./assets/img/hearts_7.png"],
    [8, "./assets/img/hearts_8.png"],
    [9, "./assets/img/hearts_9.png"],
    [10, "./assets/img/hearts_10.png"],
    [10, "./assets/img/hearts_11.png"],
    [10, "./assets/img/hearts_12.png"],
    [10, "./assets/img/hearts_13.png"],
    [1, "./assets/img/spades_1.png"],
    [2, "./assets/img/spades_2.png"],
    [3, "./assets/img/spades_3.png"],
    [4, "./assets/img/spades_4.png"],
    [5, "./assets/img/spades_5.png"],
    [6, "./assets/img/spades_6.png"],
    [7, "./assets/img/spades_7.png"],
    [8, "./assets/img/spades_8.png"],
    [9, "./assets/img/spades_9.png"],
    [10, "./assets/img/spades_10.png"],
    [10, "./assets/img/spades_11.png"],
    [10, "./assets/img/spades_12.png"],
    [10, "./assets/img/spades_13.png"]
]

var jogador = []
var banca = []

function pegarCarta() {
    var idCarta = Math.floor(Math.random() * ((cartas.length - 1) - 0) + 0)
    return cartas.splice(idCarta, 1)[0]
}

function verificarMao(cartas) {
    let soma = 0;
    cartas.forEach((el) => {
        soma += el[0];
    })
    return soma;
}

function reiniciar() {
    cartas.concat(jogador, banca);
    jogador = [];
    banca = [];
    btnComprar.disabled = true;
    btnPassar.disabled = true;
    btnIniciar.disabled = false;
}

function imprimir() {
    pJogo.innerText = `Jogador: ${verificarMao(jogador)} \n`
    jogador.forEach(
        (el) => {
            pJogo.innerText += el[0] + `\n`
        }
    )
    pJogo.innerText += `Banca: ${verificarMao(banca)} \n`
    banca.forEach(
        (el) => {
            pJogo.innerText += el[0] + `\n`
        }
    )
}

btnIniciar.onclick = () => {
    jogador.push(pegarCarta())
    jogador.push(pegarCarta())
    banca.push(pegarCarta())

    imprimir();

    btnIniciar.disabled = true
    btnComprar.disabled = false;
    btnPassar.disabled = false;

}

btnComprar.onclick = () => {
    jogador.push(pegarCarta())

    imprimir();

    if (verificarMao(jogador) > 21) {
        alert('Jogador Perdeu!');
        setInterval(reiniciar(), 3000)
    }
}

btnPassar.onclick = () => {
    btnComprar.disabled = true;
    while (verificarMao(banca) < verificarMao(jogador) &&
        verificarMao(banca) < 21) {
        setTimeout(banca.push(pegarCarta()), 2000);
        imprimir();
    }

    if (verificarMao(banca) > 21) {
        alert('Jogador Ganhou!');
        setInterval(reiniciar(), 3000)
    } else {
        alert('Jogador Perdeu!');
        setInterval(reiniciar(), 3000)
    }
}

function criarCarta(el, pos) {
    var card = document.createElement("img")
    var att1 = document.createAttribute("class")
    var att2 = document.createAttribute("style")
    var att3 = document.createAttribute("src")
    att1.value = "card"
    att2.value = `top: ${pos[0]}px; left: ${pos[1]}px`
    att3.value = el[1]
    card.setAttributeNode(att1)
    card.setAttributeNode(att2)
    card.setAttributeNode(att3)
    mesa.appendChild(card)
}