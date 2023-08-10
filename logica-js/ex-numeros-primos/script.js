const form = document.querySelector("form");
const resp = document.querySelector("#resp");

form.addEventListener("submit", (e) => {
 e.preventDefault();

 const numero = Number(form.inNumero.value);

 let divisores = 0;

 for (let i = 1; i <= numero; i++) {
  if (numero % i == 0) {
   divisores++;
  }
 }
 if (divisores == 2) {
  resp.innerText = `${numero} é primo !`;
 } else {
  resp.innerText = `${numero} não é primo !`;
 }
});
