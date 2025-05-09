const medications = [
    { name: "Dipirona", image: "img/dipirona.png", active: "Analgésico" },
    { name: "Ibuprofeno", image: "img/ibuprofeno.png", active: "Anti-inflamatório" },
    { name: "Paracetamol", image: "img/paracetamol.png", active: "Antitérmico" },
    { name: "Captopril", image: "img/captopril.png", active: "Anti-hipertensivo" },
    { name: "Omeprazol", image: "img/omeprazol.png", active: "Antiulceroso" },
    { name: "Losartana", image: "img/losartana.png", active: "Anti-hipertensivo" },
    { name: "Loratadina", image: "img/loratadina.png", active: "Antialérgico" },
    { name: "Salmeterol", image: "img/salmeterol.png", active: "Broncodilatador" },
    { name: "Cloridrato de Sertralina", image: "img/sertralina.png", active: "Antidepressivo" },
    { name: "Furosemida", image: "img/furosemida.png", active: "Diurético" },
    { name: "Metformina", image: "img/metformina.png", active: "Antidiabético" },
    { name: "Dexametasona", image: "img/dexametasona.png", active: "Corticoide" },
    { name: "AAS", image: "img/aas.png", active: "Antiagregante plaquetário" },
    { name: "Diclofenaco", image: "img/diclofenaco.png", active: "Anti-inflamatório" },
    { name: "Amitriptilina", image: "img/amitriptilina.png", active: "Antidepressivo" },
    { name: "Tramadol", image: "img/tramadol.png", active: "Analgesia opioide" },
    { name: "Cetoconazol", image: "img/cetoconazol.png", active: "Antifúngico" },
    { name: "Trazodona", image: "img/trazodona.png", active: "Antidepressivo" },
    { name: "Ranitidina", image: "img/ranitidina.png", active: "Antiácido" },
    { name: "Bupropiona", image: "img/bupropiona.png", active: "Antidepressivo" },
    { name: "Naproxeno", image: "img/naproxeno.png", active: "Anti-inflamatório" },
    { name: "Anlodipino", image: "img/anlodipino.png", active: "Anti-hipertensivo" },
    { name: "Espironolactona", image: "img/espironolactona.png", active: "Anti-hipertensivo" },
    { name: "Atorvastatina", image: "img/atorvastatina.png", active: "Hipolipemiante" }
];

const duplicatedMedications = [...medications, ...medications];

let flippedCards = [];
let matchedCards = 0;
let timer;
let seconds = 0;
let minutes = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startGame() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("restart-button").style.display = "inline-block";
    document.getElementById("instrucoes").style.display = "none";
    timer = setInterval(updateTime, 1000);
    createBoard();
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    document.getElementById("timer").textContent = `Tempo: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function stopTimer() {
    clearInterval(timer);
}

function createBoard() {
    shuffle(duplicatedMedications);
    const board = document.getElementById("game-board");
    board.innerHTML = "";
    duplicatedMedications.forEach((med, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-index", index);
        card.setAttribute("data-flipped", "false");
        card.style.backgroundImage = `url(img/medicamentos-capa.jpeg)`;
        card.addEventListener("click", flipCard);
        board.appendChild(card);
    });
}

function flipCard() {
    const card = this;
    const index = card.getAttribute("data-index");
    const med = duplicatedMedications[index];

    if (card.getAttribute("data-flipped") === "true" || flippedCards.length >= 2) return;

    card.innerHTML = "";
    if (flippedCards.length === 0) {
        const img = document.createElement("img");
        img.src = med.image;
        card.appendChild(img);
    } else {
        const textDiv = document.createElement("div");
        textDiv.classList.add("category-text");
        textDiv.innerText = `${med.name} é um ${med.active}.`;
        card.appendChild(textDiv);
    }

    card.classList.add("flipped");
    card.setAttribute("data-flipped", "true");
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    const index1 = card1.getAttribute("data-index");
    const index2 = card2.getAttribute("data-index");

    const med1 = duplicatedMedications[index1];
    const med2 = duplicatedMedications[index2];

    if (med1.name === med2.name && med1.active === med2.active) {
        card1.classList.add("matched");
        card2.classList.add("matched");
        matchedCards += 2;
    } else {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1.setAttribute("data-flipped", "false");
        card2.setAttribute("data-flipped", "false");
        card1.innerHTML = "";
        card2.innerHTML = "";
        card1.style.backgroundImage = `url(img/medicamentos-capa.jpeg)`;
        card2.style.backgroundImage = `url(img/medicamentos-capa.jpeg)`;
    }

    flippedCards = [];

    if (matchedCards === duplicatedMedications.length) {
        stopTimer();
        setTimeout(() => alert(`Parabéns! Você completou o jogo em ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.`), 200);
    }
}

function restartGame() {
    matchedCards = 0;
    flippedCards = [];
    seconds = 0;
    minutes = 0;
    document.getElementById("timer").textContent = `Tempo: 00:00`;
    startGame();
}
