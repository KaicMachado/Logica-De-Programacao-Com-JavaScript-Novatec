const form = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");
const resp3 = document.querySelector("#resp3");

form.addEventListener("submit", (e) => {
 e.preventDefault();
 const saque = Number(form.inSaque.value);

 if (saque % 10 != 0) {
  return (resp1.innerText = "Esse valor não está disponível para saque");
 }
 const notasCem = Math.floor(saque / 100);
 let resto = saque % 100;
 const notasCinquenta = Math.floor(resto / 50);
 resto = resto % 50;
 const notaDez = Math.floor(resto / 10);
 if (notasCem > 0) {
  resp1.innerText = `Notas de R$100 = ${notasCem}`;
 }
 if (notasCinquenta > 0) {
  resp2.innerText = `Notas de R$50 = ${notasCinquenta}`;
 }
 if (notaDez > 0) {
  resp3.innerText = `Notas de R$10 = ${notaDez}`;
 }
});
