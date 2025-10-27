const numero = document.querySelector("#numero");

let promisse = new Promise((res, rej) => {
  let tempo = 2000;
  let resultado = true;
  setTimeout(() => {
    if (resultado) {
      res("deu certo");
    } else {
      rej("deu errado");
    }
  }, tempo);
});
promisse.then((retorno) => {
  numero.innerHTML = retorno;
  numero.classList.remove("erro");
  numero.classList.add("ok");
});
promisse.catch((retorno) => {
  numero.innerHTML = retorno;
  numero.classList.add("erro");
  numero.classList.remove("ok");
});
numero.innerHTML = "processando...."