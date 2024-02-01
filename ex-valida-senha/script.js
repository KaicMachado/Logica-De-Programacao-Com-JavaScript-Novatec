const form = document.querySelector("form");
const resp = document.querySelector("#resp");

form.addEventListener("submit", (e) => {
 e.preventDefault();

 const senha = form.inSenha.value;
 const erros = [];

 //  if (
 //   senha.match(
 //    /^(?=(?:.*[A-Z]){2})(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%^&*()-_=+{};:,<.>]).{8,15}$/
 //   )
 //  ) {
 //   resp.innerText = "Senha válida ";
 //  }
 if (senha.length < 8 || senha.length > 15)
  erros.push("possuir entre 8 e 15 caracteres");

 if (!senha.match(/[A-Z]/g || !senha.match(/[A-Z]/g).length === 1))
  erros.push("possuir letras maiúsculas (pelo menos 2)");

 if (!senha.match(/[0-9]/g) == null)
  erros.push("possuir números (pelo menos 1)");

 if (!senha.match(/[a-z]/g))
  erros.push("possuir letra minúscula (pelo menos 1)");

 if (!senha.match(/[\W|_]/g)) erros.push("possuir símbolos ( pelo menos 1 ).");

 if (erros.length === 0) {
  resp.innerText = "Ok ! Senha Válida ";
 } else {
  resp.innerText = `Erro... A senha deve ${erros.join(", ")}`;
 }
});
