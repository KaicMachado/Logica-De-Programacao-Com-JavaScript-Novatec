const form = document.querySelector("form");
const btnListar = document.querySelector("#btnListar");
const btnAprovados = document.querySelector("#btnAprovados");
const resp = document.querySelector("#listaNotas");

let listaCandidatos = [];

form.addEventListener("submit", (e) => {
 e.preventDefault();
 let nome = form.inCandidato.value;
 let acertos = Number(form.inAcertos.value);
 listaCandidatos.push({ nome, acertos });

 form.inCandidato.value = "";
 form.inAcertos.value = "";

 resp.innerHTML += `${nome} - ${acertos} acertos\n`;
 let lista = resp.innerHTML;

 btnListar.addEventListener("click", (e) => {
  e.preventDefault();
  resp.innerHTML = "";
  resp.innerHTML = lista;
 });
});

btnAprovados.addEventListener("click", (e) => {
 e.preventDefault();
 const aprovacao = Number(prompt("Digite o n° de acertos para 2° Etapa:"));
 resp.innerText = "";
 let aprovados = [];
 for (aluno of listaCandidatos) {
  if (aluno.acertos >= aprovacao) {
   resp.innerText += `${aluno.nome} - ${aluno.acertos} acertos\n`;
   aprovados.push({ aluno });
  }
 }
 if (aprovados.length === 0) {
  alert("Não houve alunos aprovados para 2° fase");
 }
});
