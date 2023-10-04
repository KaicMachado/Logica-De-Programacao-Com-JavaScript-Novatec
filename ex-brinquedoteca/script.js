const form = document.querySelector("form");
const resp = document.querySelector("#resp");

const listaCriancas = [];

form.addEventListener("submit", (e) => {
 e.preventDefault();

 const nome = form.inNome.value;
 const idade = Number(form.inIdade.value);

 listaCriancas.push({ nome, idade });

 form.reset();
 form.inNome.focus();

 form.btnListar.dispatchEvent(new Event("click"));
});

form.btnListar.addEventListener("click", () => {
 if (listaCriancas.length == 0) {
  alert("Não há crianças na lista");
  return;
 }
 let lista = "";
 for (const crianca of listaCriancas) {
  const { nome, idade } = crianca;
  lista += nome + " - " + idade + " anos\n";
 }
 resp.innerText = lista;
});

form.btnResumir.addEventListener("click", () => {
 if (listaCriancas.length == 0) {
  alert("Não há crianças na lista");
  return;
 }
 const copia = [...listaCriancas]; // cria cópia do vetor criança
 copia.sort((a, b) => a.idade - b.idade); // ordena pela idade

 let resumo = ""; // para  concatenar a saída
 let aux = copia[0].idade; // menor idade do vetor ordenado
 let nomes = []; // para inserir nomes de cada idade

 for (const crianca of copia) {
  const { nome, idade } = crianca;
  if (idade == aux) {
   // se é da mesma idade auxiliar
   nomes.push(nome);
  } else {
   // senão, monta o resumo para cada idade
   resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
   resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
   resumo += "(" + nomes.join(", ") + ")\n\n";
   aux = idade; //obtem a nova idade na ordem
   nomes = []; // limpa o vetor dos nomes
   nomes.push(nome); // adiciona o primeiro da nova idade
  }
 }
 // adiciona a última criança
 resumo += aux + " ano(s): " + nomes.length + "criança(s) - ";
 resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
 resumo += "(" + nomes.join(", ") + ")\n\n";
 resp.innerText = resumo;
});
