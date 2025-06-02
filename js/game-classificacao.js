const effects = document.querySelectorAll('.effect');
const groups = document.querySelectorAll('.group');
const resultDiv = document.getElementById('result');
const resetBtn = document.getElementById('reset-btn');
const originalContainer = document.querySelector('.effects');

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

let jogoFinalizado = false;

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

startBtn.addEventListener('click', () => {
  startBtn.style.display = 'none';
  restartBtn.style.display = 'inline-block';
  originalContainer.style.display = 'flex';
  document.querySelector('.groups').style.display = 'flex';
  habilitarArrastar(true);
});

restartBtn.addEventListener('click', () => {
  resetGame();
});

resetBtn.addEventListener('click', () => {
  resetGame();
});

effects.forEach(effect => {
  effect.addEventListener('dragstart', e => {
    if (jogoFinalizado) e.preventDefault();
    else e.dataTransfer.setData('text/plain', effect.dataset.id);
  });
});

groups.forEach(group => {
  group.addEventListener('dragover', e => {
    if (!jogoFinalizado) e.preventDefault();
  });

  group.addEventListener('drop', e => {
    if (jogoFinalizado) return;

    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const dragged = document.querySelector(`[data-id="${id}"]`);

    if (!dragged) return;
    if (dragged.parentElement === group) return;

    group.appendChild(dragged);

    checkCompletion();
  });
});

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
    restartBtn.style.display = 'none'; // Oculta reiniciar ao finalizar o jogo
  } else {
    resultDiv.textContent = "";
    resetBtn.style.display = 'none';
  }
}

function resetGame() {
  jogoFinalizado = false;
  effects.forEach(effect => {
    effect.classList.remove('correct', 'incorrect');
    originalContainer.appendChild(effect);
  });
  resultDiv.textContent = "";
  resetBtn.style.display = 'none';

  originalContainer.style.display = 'flex';
  document.querySelector('.groups').style.display = 'flex';

  habilitarArrastar(true);
  restartBtn.style.display = 'inline-block';
}
