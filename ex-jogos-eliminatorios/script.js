const form = document.querySelector("form");
const respTabela = document.querySelector("#tabela");
const btnListar = document.querySelector("#listarClubes");
const montarTabela = document.querySelector("#montarTabela");
const listaTimes = [];

let lista = " ";

// criei uma funcao especifica para listar o clubes
function listarClubes(lista) {
 lista.forEach((time, i) => {
  respTabela.innerText += `${i + 1}. ${time} \n`;
  lista += `${i + 1}. ${time} \n`;
 });
}

form.addEventListener("submit", (e) => {
 e.preventDefault();
 // pego o input do time digitado
 const time = form.inClube.value;

 // verifico se o input foi preenchido
 if (time === "") {
  alert("Digite algum time!");
  return;
 } else {
  // adiciono o time em uma array
  listaTimes.push(time);

  // limpo o formulário e o campo de texto
  form.inClube.value = "";
  respTabela.innerText = "";

  //  faço um loop pela lista de times para listá-los
  listarClubes(listaTimes);
 }
});

btnListar.addEventListener("click", (e) => {
 e.preventDefault();
 respTabela.innerText = "";
 listarClubes(listaTimes);
});
