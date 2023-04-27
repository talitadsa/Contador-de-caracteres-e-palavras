const texto = document.getElementById('texto');
const caracteres = document.getElementById('caracteres');
const palavras = document.getElementById('palavras');

texto.addEventListener('input', () => {
  const textoInput = texto.value;
  const caracteresInput = textoInput.length;
  const palavrasInput = textoInput.split(' ').filter(palavra => palavra.trim() !== '').length;
  
  caracteres.innerText = caracteresInput;
  palavras.innerText = palavrasInput;
});
