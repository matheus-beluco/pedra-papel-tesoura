// VARIAVEIS GLOBAIS - CONTAINER PRINCIPAL
let container = document.getElementById("container")

// VARIAVEIS GLOBAIS - PLAYER
let playerPedra = document.getElementById("1")
let playerPapel = document.getElementById("2")
let playerTesoura = document.getElementById("3")

// VARIAVEIS GLOBAIS - COMPUTER
let computerPedra = document.getElementById("computerPedra")
let computerPapel = document.getElementById("computerPapel")
let computerTesoura = document.getElementById("computerTesoura")

// VARIAVEIS GLOBAIS - RESULTADO
let result = document.getElementById("result")

// ADICIONAR EVENTO A TODAS IMGS
let options = document.querySelectorAll("img")
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", game);
}

// GERA NUMEROS ALEATORIOS DE 1 A 3
function randomNumber() {
    return Math.ceil(Math.random() * 3)
}

// MUDA O FILTRO GRAY
function changeGrayScale(user, randomUser) {
    // RESET CORES PLAYER
    playerPedra.style.filter = "grayscale(100%)"
    playerPapel.style.filter = "grayscale(100%)"
    playerTesoura.style.filter = "grayscale(100%)"
    // RESET CORES COMPUTADOR
    computerPedra.style.filter = "grayscale(100%)"
    computerPapel.style.filter = "grayscale(100%)"
    computerTesoura.style.filter = "grayscale(100%)"

    // MUDA O GRAYSCALE DOS ITENS SELECIONADOS DO PLAYER
    if (user === 1) {
        playerPedra.style.filter = "grayscale(0%)"
    } else if (user === 2) {
        playerPapel.style.filter = "grayscale(0%)"
    } else {
        playerTesoura.style.filter = "grayscale(0%)"
    }

    // MUDA O GRAYSCALE DOS ITENS SELECIONADOS DO COMPUTADOR
    if (randomUser === 1) {
        computerPedra.style.filter = "grayscale(0%)"
    } else if (randomUser === 2) {
        computerPapel.style.filter = "grayscale(0%)"
    } else {
        computerTesoura.style.filter = "grayscale(0%)"
    }
}

// ANALISA AS JOGADAS
function analyze(user, randomUser) {
    //EMPATE
    if (user === randomUser) {
        container.style.background = "#FFEC1C"
        result.innerText = "EMPATE"
        result.style.color = "#FFEC1C"
    }

    //VITORIA DO PLAYER
    if (user === 1 && randomUser === 3 ||
        user === 3 && randomUser === 2 ||
        user === 2 && randomUser === 1) {
        container.style.background = "#00E24F"
        result.innerText = "VOCÊ GANHOU!"
        result.style.color = "#00E24F"
    }
    //VITÓRIA COMPUTADOR
    if (randomUser === 1 && user === 3 ||
        randomUser === 3 && user === 2 ||
        randomUser === 2 && user === 1) {
        container.style.background = "#E20022"
        result.innerText = "VOCÊ PERDEU!"
        result.style.color = "#E20022"
    }
}

// PEDRA PAPEL TESOURA
function game(event) {
    // ARMAZENA OS VALORES DAS IDS
    let player = event.target
    player = Number(player.id)

    // ARMAZENA O NÚMERO ALEATORIO GERADO
    let computer = randomNumber()

    // MUDA O FILTRO DO ITEM SELECIONADO
    changeGrayScale(player, computer)

    // ANALISA AS JOGADAS
    analyze(player, computer)
}