const form = document.querySelector("form");

const btnAdd = document.querySelector("#btnAdicionar");
const btnVerificar = document.querySelector("#btnVerificar");

const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

const listaNumeros = [];

form.addEventListener("submit", (e) => {
 e.preventDefault();

 const numero = Number(form.inNumero.value);

 if (listaNumeros.includes(numero)) {
  alert("Número Repetido\nTente outro número");
 } else {
  listaNumeros.push(numero);

  form.inNumero.value = "";

  resp1.innerText = `Números: ${listaNumeros.join()}`;
 }
});

btnVerificar.addEventListener("click", (e) => {
 e.preventDefault();
 const listaOrdenada = [...listaNumeros].sort((a, b) => a - b);

 if (JSON.stringify(listaNumeros) === JSON.stringify(listaOrdenada)) {
  resp2.innerText = `Os números estão em ordem crescente`;
 } else {
  resp2.innerText = "";
  resp2.innerText = `Atenção... Números não estão em ordem crescente`;
 }
 form.inNumero.value = "";
});
