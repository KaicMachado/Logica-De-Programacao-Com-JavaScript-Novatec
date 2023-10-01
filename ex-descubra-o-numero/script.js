const form = document.querySelector("form");
const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("#outChances");
const respDicas = document.querySelector("#outDica");
const btnNovo = document.querySelector("#btnNovo");
const btnSubmit = document.querySelector("#btnSubmit");

const erros = [];
const sorteado = Math.floor(Math.random() * 100 + 1);
const chances = 6;

form.addEventListener("submit", (e) => {
 e.preventDefault();
 const numero = form.inNumero.value;

 if (numero == sorteado) {
  respDicas.innerText = `Parabéns!! Número Sorteado ${sorteado}`;
  form.btnNovo.className = "ativo";
  form.btnSubmit.disabled = true;
 } else {
  if (erros.includes(numero)) {
   alert(`Você já apostou esse número ${numero}. Tente Outro...`);
  } else {
   erros.push(numero);
   const numErros = erros.length;
   const numChances = chances - numErros;

   respErros.innerText = `${numErros} (${erros.join(",")})`;
   respChances.innerText = numChances;

   if (numChances == 0) {
    alert("Suas chances acabaram....");
    form.btnSubmit.disabled = true;
    form.btnNovo.className = "ativo";
    respDicas.innerText = `Game Over !! Número Sorteado: ${sorteado}`;
   } else {
    const dica = numero < sorteado ? "maior" : "menor";
    respDicas.innerText = `Dica: Tente um número ${dica} que ${numero}`;
   }
  }
 }
 form.inNumero.value = "";
 form.inNumero.focus();

 form.btnNovo.addEventListener("click", () => {
  location.reload();
 });
});
