const form = document.querySelector("form");
const resp = document.querySelector("#resp");

form.addEventListener("submit", (e) => {
 e.preventDefault();
 const numero = Number(form.inNumber.value);
 let resposta = `Entre ${numero} e 1: `;
 for (let i = numero; i > 1; i--) {
  resposta = resposta + i + " , ";
 }
 resp.innerText = resposta + "1.";
});
