const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const nome = frm.inNome.value;

frm.addEventListener("submit", (e) => {
 e.preventDefault();

 const nota1 = Number(frm.inNota1.value);
 const nota2 = Number(frm.inNota2.value);
 const media = (nota1 + nota2) / 2;
 resp1.innerText = `A média das Notas é ${media.toFixed(2)}`;
 if (media >= 7) {
  resp2.innerText = `Parabéns ${nome} você foi Aprovado!`;
  resp2.style.color = "green";
 } else if (media >= 4) {
  resp2.innerText = `Opa ${nome}, você está de Exame!`;
  resp2.style.color = "orange";
 } else {
  resp2.innerText = `Ops ${nome}, vc foi Reprovado!`;
  resp2.style.color = "red";
 }
});
