/* const numero = document.querySelector("#numero");

let promise = new Promise((res, rej) => {
  let resultado = true;
  let tempo = 2000;
  setTimeout(() => {
    if (resultado) {
      res("deu tudo certo");
    } else {
      rej("deu tudo errado");
    }
  }, tempo);
});
promise.then((retorno) => {
  numero.innerHTML = retorno;
  numero.classList.remove("erro");
  numero.classList.add("ok");
});
promise.catch((retorno) => {
  numero.innerHTML = retorno;
  numero.classList.add("erro");
  numero.classList.remove("ok");
});
numero.innerHTML = "processando...";
 */
const numero = document.querySelector("#numero");

let promise = new Promise((res, rej) => {
  let resultado = true;
  let tempo = 2000;
  setTimeout(() => {
    if (resultado) {
      res("deu tudo certo");
    } else {
      rej("deu tudo errado");
    }
  }, tempo);
});
promise.then((retorno) => {
  numero.innerHTML = retorno;
  numero.classList.remove("erro");
  numero.classList.add("ok");
});
promise.catch((retorno) => {
  numero.innerHTML = retorno;
  numero.classList.add("erro");
  numero.classList.remove("ok");
});
numero.innerHTML = "processando...";
