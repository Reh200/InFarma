const medications = [
    { name: "Amoxicilina", image: "img/amoxicilina.jpg", active: "Antibiótico" },
    { name: "Dipirona", image: "img/dipirona.jpg", active: "Analgésico" },
    { name: "Ibuprofeno", image: "img/ibuprofeno.jpg", active: "Anti-inflamatório" },
    { name: "Paracetamol", image: "img/paracetamol.jpg", active: "Antitérmico" },
    { name: "Amoxicilina", image: "img/amoxicilina.jpg", active: "Antibiótico" },
    { name: "Dipirona", image: "img/dipirona.jpg", active: "Analgésico" },
    { name: "Ibuprofeno", image: "img/ibuprofeno.jpg", active: "Anti-inflamatório" },
    { name: "Paracetamol", image: "img/paracetamol.jpg", active: "Antitérmico" }
];

let flippedCards = [];
let matchedCards = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createBoard() {
    shuffle(medications);
    const board = document.getElementById("game-board");
    board.innerHTML = "";
    medications.forEach((med, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-index", index);
        card.style.backgroundImage = `url(imagens/flip-card-back.jpg)`; // Imagem do verso da carta
        card.addEventListener("click", flipCard);
        board.appendChild(card);
    });
}

function flipCard() {
    const card = this;
    const index = card.getAttribute("data-index");
    const med = medications[index];

    // Mostrar a imagem do medicamento
    const img = document.createElement("img");
    img.src = med.image;
    card.innerHTML = "";
    card.appendChild(img);

    card.classList.add("flipped");
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    const index1 = card1.getAttribute("data-index");
    const index2 = card2.getAttribute("data-index");

    if (medications[index1].active === medications[index2].active) {
        card1.classList.add("matched");
        card2.classList.add("matched");
        matchedCards += 2;
    } else {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1.innerHTML = "";
        card2.innerHTML = "";
    }

    flippedCards = [];
    if (matchedCards === medications.length) {
        alert("Parabéns! Você completou o jogo.");
    }
}

function restartGame() {
    matchedCards = 0;
    flippedCards = [];
    createBoard();
}

createBoard();
