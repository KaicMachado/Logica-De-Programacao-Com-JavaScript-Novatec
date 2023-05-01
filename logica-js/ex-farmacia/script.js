const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
 const remedio = frm.inRemedio.value;
 const valor = Number(frm.inValor.value);

 const promocao = Math.floor(valor * 2);

 resp1.innerText = `Promoção de ${remedio}`;
 resp2.innerText = `Leve 2 por apenas R$ ${promocao.toFixed(2)}`;

 e.preventDefault();
});
