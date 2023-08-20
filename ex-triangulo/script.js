const form = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

form.addEventListener("submit", (e) => {
 e.preventDefault();
 const ladoA = Number(form.inLado1.value);
 const ladoB = Number(form.inLado2.value);
 const ladoC = Number(form.inLado3.value);
 //  console.log(ladoA, ladoB, ladoC);
 if (ladoA + ladoB > ladoC || ladoB + ladoC > ladoA || ladoC + ladoA > ladoB) {
  resp1.innerText = "É um triângulo";
 } else {
  if (ladoA > ladoB + ladoC || ladoB > ladoC + ladoA || ladoC > ladoA + ladoB) {
   resp1.innerText = "Não forma um triângulo, tente outros valores";
  }
 }
});
