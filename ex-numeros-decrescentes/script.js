alert("Digite 0 para sair");
do {
 const num = Number(prompt("Número: "));
 if (num == 0 || isNaN(num)) {
  const sair = confirm("Confirma saída?");
  if (sair) {
   break;
  } else {
   continue;
  }
 }
 if (num % 2 == 0) {
  alert(`O dobro de ${num} é ${num * 2}`);
 } else {
  alert(`O triplo  de ${num} é ${num * 3}`);
 }
} while (true);
alert("Bye, bye ....");

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
