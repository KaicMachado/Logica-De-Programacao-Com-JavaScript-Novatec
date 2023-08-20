const form = document.querySelector("form");
const resp = document.querySelector("#resp");

form.addEventListener("submit", (e) => {
 e.preventDefault();
 const fruta = form.inFruta.value;
 const vezes = Number(form.inVezes.value);
 let frutas = "";

 for (let i = 1; i <= vezes; i++) {
  frutas += fruta + "*";

  resp.innerText = frutas;
 }
});
