const frases = [
    { frase: "Antibiótico cura gripe.", resposta: "MITO" },
    { frase: "Vacinas causam autismo.", resposta: "MITO" },
    { frase: "Paracetamol pode causar hepatite em altas doses.", resposta: "VERDADE" },
    { frase: "Remédios naturais não têm efeitos colaterais.", resposta: "MITO" },
    { frase: "É perigoso misturar álcool com medicamentos.", resposta: "VERDADE" }
  ];
  
  let index = 0;
  let pontos = 0;
  
  function mostrarMito() {
    document.getElementById("pergunta").innerText = frases[index].frase;
  
    const opcoes = document.getElementById("opcoes");
    opcoes.innerHTML = "";
  
    ["MITO", "VERDADE"].forEach(opcao => {
      const btn = document.createElement("button");
      btn.innerText = opcao;
      btn.onclick = () => responder(opcao);
      opcoes.appendChild(btn);
    });
  }
  
  function responder(resposta) {
    const correta = frases[index].resposta;
    const resultado = document.getElementById("resultado");
  
    if (resposta === correta) {
      resultado.innerText = "✅ Correto!";
      pontos++;
    } else {
      resultado.innerText = `❌ Errado! Era: ${correta}`;
    }
  
    index++;
    if (index < frases.length) {
      setTimeout(() => {
        resultado.innerText = "";
        mostrarMito();
      }, 1500);
    } else {
      resultado.innerText = `🎉 Acabou! Pontuação: ${pontos}/${frases.length}`;
    }
  }
  
  mostrarMito();
  