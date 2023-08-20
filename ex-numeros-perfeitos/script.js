const form = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

form.addEventListener("submit", (e) => {
 e.preventDefault();
 const num = Number(form.inNumero.value);
 let divisores = `Divisores de ${num} : 1`;
 let soma = 1;

 for (let i = 2; i <= num / 2; i++) {
  const divisor = num % i;
  if (divisor === 0) {
   divisores += `, ${i}`;
   soma += i;
  }
 }

 divisores += ` (Soma: ${soma})`;
 resp1.innerText = divisores;

 if (num === soma) {
  resp2.innerText = `${num} É um número Perfeito!`;
 } else {
  resp2.innerText = `${num} Não é um número Perfeito!`;
 }
});
