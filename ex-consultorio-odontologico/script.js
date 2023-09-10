const form = document.querySelector("form");
const btnAdd = document.querySelector("#add");
const btnUrg = document.querySelector("#urgente");
const btnAtender = document.querySelector("#atender");

const txtAtendimento = document.querySelector("#emAtendimento");
const textLista = document.querySelector("#filaEspera");

const listaPacientes = [];
let numPacientes = 0;

// adiciona paciente na lista de espera
form.addEventListener("submit", (e) => {
 e.preventDefault();
 const paciente = form.inPaciente.value;
 listaPacientes.push(paciente);
 let lista = "";
 for (let i = 0; i < listaPacientes.length; i++) {
  lista += `${i + 1}. ${listaPacientes[i]}\n`;
 }
 textLista.innerText = lista;
 form.inPaciente.value = "";
 form.inPaciente.focus();
});

// Adiciona paciente com urgência
btnUrg.addEventListener("click", (e) => {
 e.preventDefault();
 if (!form.checkValidity()) {
  alert("Informe o nome do paciente a ser atendido em caráter de urgência.");
  form.inPaciente.focus();
  return;
 }

 const paciente = form.inPaciente.value;
 listaPacientes.unshift(paciente);
 let lista = "";

 listaPacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente} \n`));
 textLista.innerText = lista;
 form.inPaciente.value = "";
 form.inPaciente.focus();
});

// Atende paciente
btnAtender.addEventListener("click", (e) => {
 e.preventDefault();
 if (listaPacientes.length === 0) {
  txtAtendimento.innerText = `Nenhum paciente para ser atendido`;
  form.inPaciente.focus();
  return;
 } else {
  const pacienteAtendido = listaPacientes.shift();
  txtAtendimento.innerText = `Em Atendimento: ${pacienteAtendido}`;

  let lista = "";
  listaPacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));
  textLista.innerText = lista;
 }
});
