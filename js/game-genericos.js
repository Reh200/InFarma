const perguntas = [
    {
      comercial: "Tylenol",
      opcoes: ["Paracetamol", "Ibuprofeno", "Dipirona"],
      resposta: "Paracetamol"
    },
    {
      comercial: "Rivotril",
      opcoes: ["Diazepam", "Clonazepam", "Fluoxetina"],
      resposta: "Clonazepam"
    },
    {
      comercial: "Dramin",
      opcoes: ["Dimenidrinato", "Omeprazol", "Cimetidina"],
      resposta: "Dimenidrinato"
    },
    {
      comercial: "Dorflex",
      opcoes: ["Dipirona", "Paracetamol", "AAS"],
      resposta: "Dipirona"
    },
    {
      comercial: "Neosaldina",
      opcoes: ["Dipirona + Isometepteno", "Naproxeno", "Clonazepam"],
      resposta: "Dipirona + Isometepteno"
    }
  ];
  
  let atual = 0;
  let pontos = 0;
  
  function mostrarPergunta() {
    const p = perguntas[atual];
    document.getElementById("pergunta").innerText = `Qual é o genérico de: ${p.comercial}?`;
  
    const container = document.getElementById("opcoes");
    container.innerHTML = "";
  
    p.opcoes.forEach(opcao => {
      const btn = document.createElement("button");
      btn.innerText = opcao;
      btn.onclick = () => responder(opcao);
      container.appendChild(btn);
    });
  }
  
  function responder(escolha) {
    const correta = perguntas[atual].resposta;
    const resultado = document.getElementById("resultado");
  
    if (escolha === correta) {
      resultado.innerText = "✅ Correto!";
      pontos++;
    } else {
      resultado.innerText = `❌ Errado! Resposta certa: ${correta}`;
    }
  
    atual++;
    if (atual < perguntas.length) {
      setTimeout(() => {
        resultado.innerText = "";
        mostrarPergunta();
      }, 1500);
    } else {
      setTimeout(() => {
        resultado.innerText = `🎉 Fim do jogo! Pontuação: ${pontos}/${perguntas.length}`;
        mostrarBotaoReiniciar(); // Exibe o botão "Reiniciar"
      }, 1500);
    }
  }
  
  function mostrarBotaoReiniciar() {
    // Exibe o botão "Reiniciar" ao final do jogo
    document.getElementById("btnReiniciar").style.display = "inline-block";
  }
  
  function iniciarJogo() {
    document.getElementById("instrucoes").style.display = "none"; // Esconde as instruções
    document.getElementById("btnIniciar").style.display = "none"; // Esconde o botão Iniciar
    mostrarPergunta(); // Começa o jogo
  }
  
  function reiniciarJogo() {
    atual = 0;
    pontos = 0;
    document.getElementById("resultado").innerText = "";
    document.getElementById("instrucoes").style.display = "block"; // Volta as instruções
    document.getElementById("btnIniciar").style.display = "block"; // Exibe o botão Iniciar novamente
    document.getElementById("btnReiniciar").style.display = "none"; // Esconde o botão Reiniciar
    mostrarPergunta(); // Recomeça o jogo
  }
  
  document.getElementById("btnIniciar").addEventListener("click", iniciarJogo);
  document.getElementById("btnReiniciar").addEventListener("click", reiniciarJogo);
  