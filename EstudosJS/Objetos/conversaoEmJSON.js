const pessoa = {
  nome: "Danilo",
  canal: "Danilo Canal",
  curos: "angular",
  aulas: {
    aula01: "introdução",
    aula02: "variaveis",
    aula03: "condicional",
  },
};
const s_json = JSON.stringify(pessoa); //converte objeto em string JSON
const o_json = JSON.parse(s_json); //converte string em string JSON
console.log(pessoa);
console.log(o_json);
