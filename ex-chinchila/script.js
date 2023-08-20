const form = document.querySelector("form");
const resp = document.querySelector("#resp");

form.addEventListener("submit", (e) => {
 let numChinchila = Number(form.inChinchilas.value);
 const anos = Number(form.inAnos.value);

 console.log(numChinchila);

 if (numChinchila < 2) {
  resp.innerText += `Não será possivel o acasalamento`;
 } else {
  for (let i = 1; i <= anos; i++) {
   resp.innerText += `${i}° Ano: ${numChinchila} Chinchilas \n`;
   numChinchila = numChinchila * 3;
  }
 }
 e.preventDefault();
});
