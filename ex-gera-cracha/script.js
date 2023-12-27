const form = document.querySelector("form");
const resp = document.querySelector("span");

form.addEventListener("submit", (e) => {
 e.preventDefault();

 const nome = form.inNome.value;

 if (!nome.includes(" ")) {
  alert("Digite o Nome Completo...");
  return;
 }

 const primeiroNome = nome.indexOf(" ");
 const ultEspaco = nome.lastIndexOf(" ");

 const cracha = nome.substr(0, primeiroNome) + nome.substr(ultEspaco);

 resp.innerText = cracha;
});
