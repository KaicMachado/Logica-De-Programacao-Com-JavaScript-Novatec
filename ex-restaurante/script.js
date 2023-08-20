const frm = document.querySelector("form");
const h3 = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
 const quilo = Number(frm.inQuilo.value); // obtém conteúdo dos campos
 const consumo = Number(frm.inConsumo.value);

 const valor = (quilo / 1000) * consumo; // calcula o valor a ser pago
 h3.innerText = `Valor a pagar R$ ${valor.toFixed(2)}`; // exibe a resposta

 e.preventDefault(); // evita o envio do formulario
});
