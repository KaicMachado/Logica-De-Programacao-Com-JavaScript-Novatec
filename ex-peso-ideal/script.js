const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
 e.preventDefault();

 const nome = form.inNome.value;
 const altura = Number(form.inAltura.value);
 const masculino = form.inMasculino.checked;

 let peso;
 if (masculino) {
  peso = 22 * Math.pow(altura, 2);
 } else {
  peso = 21 * Math.pow(altura, 2);
 }

 resp.innerText = `Olá ${nome}, seu peso ideal é ${peso.toFixed(2)} kg.`;
});
