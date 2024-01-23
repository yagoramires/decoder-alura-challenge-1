const createNoMessageFoundComponent = () => {
  const container = document.getElementById('decode-message-box-container');
  container.innerHTML = '';

  const textContainer = document.createElement('div');
  textContainer.classList.add('decode-no-message-container');
  const image = document.createElement('img');
  image.src = './assets/image.svg';
  image.alt = 'Uma mulher olhando para um diamante com uma lupa';
  image.classList.add('decode-no-message-image');
  const title = document.createElement('h3');
  title.classList.add('decode-no-message-title');
  title.innerHTML = 'Nenhuma mensagem encontrada';
  const text = document.createElement('p');
  text.classList.add('decode-no-message-text');
  text.innerHTML =
    'Digite um texto que você deseja criptografar ou descriptografar.';

  textContainer.appendChild(image);
  textContainer.appendChild(title);
  textContainer.appendChild(text);
  container.appendChild(textContainer);
  return;
};

createNoMessageFoundComponent();

const createDecodeMessageComponent = (message) => {
  const container = document.getElementById('decode-message-box-container');
  container.innerHTML = '';

  const textContainer = document.createElement('div');
  textContainer.classList.add('decoded-message-container');
  const text = document.createElement('p');
  text.innerHTML = message;
  text.classList.add('decoded-message-text');
  const copyBtn = document.createElement('button');
  copyBtn.classList.add('decoded-message-copyBtn');
  copyBtn.innerHTML = 'Copiar';
  copyBtn.onclick = () => copyDecodedMessage(message);

  textContainer.appendChild(text);
  textContainer.appendChild(copyBtn);
  container.appendChild(textContainer);

  return;
};

const copyDecodedMessage = (message) => {
  navigator.clipboard.writeText(message);

  alert('Texto copiado com sucesso');
};

const encode = () => {
  const str = document.getElementById('encode-text-input').value;

  if (str === '') return alert('Digite um texto válido');

  const removeAccentsAndUpperCaseFromStr = str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

  const lettersArray = removeAccentsAndUpperCaseFromStr.toLowerCase().split('');

  const codificatedArray = lettersArray.map((letter) => {
    switch (letter) {
      case 'e':
        return 'enter';
      case 'i':
        return 'imes';
      case 'a':
        return 'ai';
      case 'o':
        return 'ober';
      case 'u':
        return 'ufat';
      default:
        return letter;
    }
  });

  const codificatedStr = codificatedArray.join('');

  createDecodeMessageComponent(codificatedStr);

  return;
};

const decode = () => {
  const str = document.getElementById('encode-text-input').value;

  if (str === '') return alert('Digite um texto válido');

  const wordsArray = str.toLowerCase().split(' ');

  const decodificatedArray = wordsArray.map((word) => {
    let text = word;

    while (text.includes('enter')) {
      text = text.replace('enter', 'e');
    }

    while (text.includes('imes')) {
      text = text.replace('imes', 'i');
    }

    while (text.includes('ai')) {
      text = text.replace('ai', 'a');
    }

    while (text.includes('ober')) {
      text = text.replace('ober', 'o');
    }

    while (text.includes('ufat')) {
      text = text.replace('ufat', 'u');
    }

    return text;
  });

  const decodificatedStr = decodificatedArray.join(' ');

  createDecodeMessageComponent(decodificatedStr);

  return;
};
