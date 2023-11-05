const form = document.querySelector("form");
const respTabela = document.querySelector("#tabela");
const btnListar = document.querySelector("#listarClubes");
const montarTabela = document.querySelector("#montarTabela");
const listaTimes = [];

form.addEventListener("submit", (e) => {
 e.preventDefault();
 // pego o input do time digitado
 const time = form.inClube.value;

 // adiciono o time em uma array
 listaTimes.push(time);

 // limpo o formulário e o campo de texto
 form.inClube.value = "";
 respTabela.innerText = "";

 // faço um loop pela lista de times para listá-los
 listaTimes.forEach((time, i) => {
  respTabela.innerText += `${i + 1}. ${time} \n`;
 });
});

btnListar.addEventListener("click", (e) => {
 e.preventDefault();
});
