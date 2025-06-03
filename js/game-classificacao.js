const effects = document.querySelectorAll('.effect');
const groups = document.querySelectorAll('.group');
const resultDiv = document.getElementById('result');
const resetBtn = document.getElementById('reset-btn');
const originalContainer = document.querySelector('.effects');

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const instructions = document.getElementById('instructions');

let jogoFinalizado = false;

// Controla se os efeitos podem ser arrastados ou não
function habilitarArrastar(ativo) {
  effects.forEach(effect => {
    if (ativo) {
      effect.setAttribute('draggable', 'true');
    } else {
      effect.removeAttribute('draggable');
    }
  });
}

// Controla visibilidade inicial
startBtn.style.display = 'inline-block';
restartBtn.style.display = 'none';
originalContainer.style.display = 'none';
document.querySelector('.groups').style.display = 'none';
resetBtn.style.display = 'none';
instructions.style.display = 'block';  // Mostra instruções inicialmente

startBtn.addEventListener('click', () => {
  startBtn.style.display = 'none';
  restartBtn.style.display = 'inline-block';
  originalContainer.style.display = 'flex';
  document.querySelector('.groups').style.display = 'flex';
  habilitarArrastar(true);
  instructions.style.display = 'none';  // Oculta instruções ao iniciar
});

restartBtn.addEventListener('click', () => {
  resetGame();
});

resetBtn.addEventListener('click', () => {
  resetGame();
});

// Evento para iniciar o arrasto de um efeito
effects.forEach(effect => {
  effect.addEventListener('dragstart', e => {
    if (jogoFinalizado) e.preventDefault();
    else e.dataTransfer.setData('text/plain', effect.dataset.id); // Armazena o id do efeito
  });
});

// Eventos para as áreas de classificação (grupos)
groups.forEach(group => {
  group.addEventListener('dragover', e => {
    e.preventDefault(); // Permite o drop
  });

  group.addEventListener('drop', e => {
    if (jogoFinalizado) return;

    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain'); // Obtém o id do efeito arrastado
    const dragged = document.querySelector(`[data-id="${id}"]`); // Seleciona o efeito arrastado

    // Se o efeito não existir ou já estiver no grupo correto, não faz nada
    if (!dragged || dragged.parentElement === group) return;

    // Adiciona o efeito ao grupo
    group.appendChild(dragged);

    checkCompletion(); // Verifica se o jogo foi finalizado
  });
});

// Função para checar se todos os efeitos foram classificados
function checkCompletion() {
  const total = effects.length;
  let classificados = 0;

  effects.forEach(effect => {
    if (effect.parentElement.classList.contains('group')) classificados++;
  });

  if (classificados === total) {
    jogoFinalizado = true;
    habilitarArrastar(false);

    let correct = 0;
    let incorrect = 0;

    effects.forEach(effect => {
      if (effect.parentElement.dataset.type === effect.dataset.type) {
        effect.classList.add('correct');
        correct++;
      } else {
        effect.classList.add('incorrect');
        incorrect++;
      }
    });

    const respostas = { leve: [], moderado: [], grave: [] };
    effects.forEach(e => {
      respostas[e.dataset.type].push(e.textContent);
    });

    const respostasHTML = `
      <h3>Respostas Certas:</h3>
      <ul>
        <li><strong>Leves:</strong> ${respostas.leve.join(', ')}</li>
        <li><strong>Moderados:</strong> ${respostas.moderado.join(', ')}</li>
        <li><strong>Graves:</strong> ${respostas.grave.join(', ')}</li>
      </ul>
    `;

    resultDiv.innerHTML = `
      🎉 Você classificou todos os efeitos!<br>
      ✅ Correto: ${correct} <br>
      ❌ Incorreto: ${incorrect}
      ${respostasHTML}
    `;

    resetBtn.style.display = 'inline-block';
    restartBtn.style.display = 'none'; // Oculta o botão de reiniciar ao finalizar o jogo
  } else {
    resultDiv.textContent = "";
    resetBtn.style.display = 'none';
  }
}

// Função para resetar o jogo
function resetGame() {
  jogoFinalizado = false;
  effects.forEach(effect => {
    effect.classList.remove('correct', 'incorrect');
    originalContainer.appendChild(effect); // Reposiciona os efeitos de volta ao container original
  });
  resultDiv.textContent = "";
  resetBtn.style.display = 'none';

  originalContainer.style.display = 'flex';
  document.querySelector('.groups').style.display = 'flex';

  habilitarArrastar(true);
  restartBtn.style.display = 'inline-block';
  startBtn.style.display = 'none'; // Esconde o botão de início durante o reinício
  instructions.style.display = 'none'; // Oculta instruções no reinício do jogo
}
