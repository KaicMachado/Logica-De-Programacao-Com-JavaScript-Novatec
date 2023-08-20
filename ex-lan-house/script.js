const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
 const valorPorMinuto = Number(frm.inValor.value);
 const tempoDeUso = Number(frm.inTempo.value);

 const tempoCobrado = Math.ceil(tempoDeUso / 15);

 const valorCobrado = valorPorMinuto * tempoCobrado;

 resp.innerText = `Valor a pagar R$ ${valorCobrado.toFixed(2)}`;

 e.preventDefault();
});
