const form = document.querySelector("form");
const inModelo = document.querySelector("#inModelo");
const inAno = document.querySelector("#inAno");
const inPreco = document.querySelector("#inPreco");

const txtModelo = document.querySelector("#modelo");
const txtEntrada = document.querySelector("#entrada");
const txtParcelas = document.querySelector("#parcelas");

form.addEventListener("submit", (e) => {
 e.preventDefault();
 const modelo = inModelo.value;
 const ano = Number(inAno.value);
 const preco = inPreco.value;

 const estado = classificarVeiculo(ano);
 const entrada = calcularEntrada(preco, estado);
 const parcelas = calcularParcelas(entrada, preco);

 txtModelo.innerText = `${modelo} - ${estado}`;
 txtEntrada.innerText = `Entrada R$: ${entrada.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL",
 })}`;
 txtParcelas.innerText = `+10x de R$: ${parcelas.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL",
 })}`;
});

function classificarVeiculo(ano) {
 let estado;
 const anoAtual = new Date().getFullYear();
 if (ano === anoAtual) {
  estado = "Novo";
 } else if (ano < anoAtual && ano > anoAtual - 3) {
  estado = "SemiNovo";
 } else {
  estado = "Usado";
 }
 return estado;
}

function calcularEntrada(valor, estado) {
 let entrada;
 if (estado === "Novo") {
  entrada = valor * 0.5;
 } else {
  entrada = valor * 0.3;
 }
 return entrada;
}

function calcularParcelas(entrada, valor) {
 return (valor - entrada) / 10;
}
