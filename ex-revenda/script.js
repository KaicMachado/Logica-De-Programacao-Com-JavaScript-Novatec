const formulario = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

formulario.addEventListener("submit", (e) => {
 const veiculo = formulario.inVeiculo.value;
 const preco = Number(formulario.inPreco.value);

 const entrada = preco * 0.5;
 const parcela = preco / 12;

 resp1.innerText = `Promoção ${veiculo}`;
 resp2.innerText = `Entrada de R$ ${entrada.toFixed(2)}`;
 resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`;
 e.preventDefault();
});
