const form = document.querySelector("form");

const taxaMulta = 2 / 100;
const taxaJuros = 0.33 / 100;

form.addEventListener("submit", (e) => {
 e.preventDefault();

 const dataVencimento = form.dataVencimento.value;
 const valorConta = Number(form.valorConta.value);

 const hoje = new Date();
 const vencimento = new Date();

 const partes = dataVencimento.split("-");
 vencimento.setDate(Number(partes[2]));
 vencimento.setMonth(Number(partes[1]) - 1);
 vencimento.setFullYear(partes[0]);

 const atraso = hoje - vencimento;

 let multa = 0;
 let juros = 0;

 if (atraso > 0) {
  const dias = atraso / 86400000;
  multa = valorConta * taxaMulta;
  juros = valorConta * taxaJuros * dias;

  const total = valorConta + multa + juros;

  form.valorMulta.value = multa.toFixed(2);
  form.valorJuros.value = juros.toFixed(2);
  form.total.value = total.toFixed(2);
 } else {
  alert("Conta em dia");
 }
});
