
const medicamentos = [
    { nome: "Paracetamol 500mg", resposta: "branca" },
    { nome: "Amoxicilina 500mg", resposta: "vermelha" },
    { nome: "Isotretinoína", resposta: "vermelha-retida" },
    { nome: "Diazepam", resposta: "preta" }
  ];
  
  let atual = 0;
  let pontos = 0;
  
  function mostrarTarja() {
    document.getElementById("pergunta").innerText =
      `Qual é a tarja de: ${medicamentos[atual].nome}?`;
  
    const opcoes = document.getElementById("opcoes");
    opcoes.innerHTML = "";
  
    const alternativas = [
      { valor: "branca", texto: "⚪ Tarja Branca" },
      { valor: "vermelha", texto: "🔴 Tarja Vermelha" },
      { valor: "vermelha-retida", texto: "🔴📄 Tarja Vermelha (Retida)" },
      { valor: "preta", texto: "⚫ Tarja Preta" }
    ];
  
    alternativas.forEach(op => {
      const btn = document.createElement("button");
      btn.innerText = op.texto;
      btn.onclick = () => responder(op.valor);
      opcoes.appendChild(btn);
    });
  }
  
  function responder(escolha) {
    const correta = medicamentos[atual].resposta;
    const resultado = document.getElementById("resultado");
  
    if (escolha === correta) {
      resultado.innerText = "✅ Correto!";
      pontos++;
    } else {
      resultado.innerText = `❌ Errado! Resposta certa: ${correta}`;
    }
  
    atual++;
    if (atual < medicamentos.length) {
      setTimeout(() => {
        resultado.innerText = "";
        mostrarTarja();
      }, 1500);
    } else {
      resultado.innerText = `🎉 Pontuação final: ${pontos}/${medicamentos.length}`;
    }
  }
  
  mostrarTarja();
  