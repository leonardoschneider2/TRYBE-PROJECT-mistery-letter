// criando as funcoes
const mold = ['newspaper', 'magazine1', 'magazine2'];
const tam = ['medium', 'big', 'reallybig'];
const rot = ['rotateleft', 'rotateright'];
const incl = ['skewleft', 'skewright'];

const sort = (i) => i[Math.ceil(Math.random() * i.length) - 1];

function addClass(event) {
  let a = event;
  if (event.target !== undefined && a !== event.target) {
    a = event.target;
  }
  a.className = '';
  a.classList.add(sort(mold));
  a.classList.add(sort(tam));
  a.classList.add(sort(rot));
  a.classList.add(sort(incl));
}

function creatingCards() {
  const carta = document.querySelector('#carta-gerada');
  const phrase = document.querySelector('#carta-texto').value;
  const arraySemVazios = phrase.split(' ');
  if (phrase !== '' && phrase.trim().length !== 0) {
    carta.textContent = '';
    for (let i = 0; i < arraySemVazios.length; i += 1) {
      const span = document.createElement('span');
      span.innerText = arraySemVazios[i];
      addClass(span);
      carta.appendChild(span);
      span.addEventListener('click', addClass);
      document.querySelector('#carta-contador').innerText = arraySemVazios.length;
    }
  } else {
    carta.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}
// alo
document.querySelector('#criar-carta').addEventListener('click', creatingCards);
