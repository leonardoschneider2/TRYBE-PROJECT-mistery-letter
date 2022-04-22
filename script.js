// criando as funcoes
const mold = ['newspaper', 'magazine1', 'magazine2'];
const tam = ['medium', 'big', 'reallybig'];
const rot = ['rotateleft', 'rotateright'];
const incl = ['skewleft', 'skewright'];

const sort = (i) => i[Math.ceil(Math.random() * i.length) - 1];

function addClass(event) {
  if (event.target !== undefined && event !== event.target) {
    event = event.target;
  }
  console.log(event);
  event.className = '';
  event.classList.add(sort(mold));
  event.classList.add(sort(tam));
  event.classList.add(sort(rot));
  event.classList.add(sort(incl));
}

function creatingCards() {
  const carta = document.querySelector('#carta-gerada');
  const phrase = document.querySelector('#carta-texto').value;
  let arrayWords = phrase.split(' ');
  let bool = false;
  for (let i = 0; i < arrayWords.length; i += 1) {
    if (arrayWords[i] !== '') {
      bool = true;
    }
  }
  if (phrase !== '' && bool === true) {
    // carta.textContent = '';
    carta.textContent = '';
    for (let i = 0; i < arrayWords.length; i += 1) {
      if (arrayWords[i] !== ''){
        const span = document.createElement('span');
        span.innerText = arrayWords[i];
        addClass(span);
        carta.appendChild(span);
        span.addEventListener('click', addClass);
      }
    }
    const contador = document.querySelector('#carta-contador');
    const tamContador = document.querySelectorAll('span').length;

    contador.textContent = tamContador;
  } else {
    carta.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

document.querySelector('#criar-carta').addEventListener('click', creatingCards);