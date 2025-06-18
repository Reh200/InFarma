const siglas = [
    { sigla: "SC", opcoes: ["Subcutânea", "Sem Contraindicação", "Sistema Circulatório"], resposta: "Subcutânea" },
    { sigla: "PO", opcoes: ["Pelo Ouvido", "Por Olhos", "Via Oral"], resposta: "Via Oral" },
    { sigla: "IM", opcoes: ["Injeção Muscular", "Infusão Médica", "Intra Medular"], resposta: "Injeção Muscular" },
    { sigla: "BID", opcoes: ["Duas vezes ao dia", "A cada 2 dias", "Antes das refeições"], resposta: "Duas vezes ao dia" }
  ];
  
  let atual = 0;
  let pontos = 0;
  
  function mostrarSigla() {
    const p = siglas[atual];
    document.getElementById("pergunta").innerText = `O que significa: ${p.sigla}?`;
  
    const opcoes = document.getElementById("opcoes");
    opcoes.innerHTML = "";
  
    p.opcoes.forEach(opcao => {
      const btn = document.createElement("button");
      btn.innerText = opcao;
      btn.onclick = () => responder(opcao);
      opcoes.appendChild(btn);
    });
  }
  
  function responder(escolha) {
    const correta = siglas[atual].resposta;
    const resultado = document.getElementById("resultado");
  
    if (escolha === correta) {
      resultado.innerText = "✅ Correto!";
      pontos++;
    } else {
      resultado.innerText = `❌ Errado! Correto: ${correta}`;
    }
  
    atual++;
    if (atual < siglas.length) {
      setTimeout(() => {
        resultado.innerText = "";
        mostrarSigla();
      }, 1500);
    } else {
      resultado.innerText = `🎉 Finalizado! Pontuação: ${pontos}/${siglas.length}`;
    }
  }
  
  mostrarSigla();
  