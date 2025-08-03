// Seleciona os botões e o campo de resultado pelo ID
const btn_soma = document.querySelector("#btn_soma");
const btn_subtracao = document.querySelector("#btn_subtracao");
const btn_multiplicacao = document.querySelector("#btn_multiplicacao");
const btn_divisao = document.querySelector("#btn_divisao");
const res = document.querySelector("#res");

// Array de funções que realizam as operações
const op = [
    // Função para soma
    () => {
        const val = [
            document.getElementById("valor1").value,
            document.getElementById("valor2").value
        ];
        res.value = Number(val[0]) + Number(val[1]);
    },
    // Função para subtração
    () => {
        const val = [
            document.getElementById("valor1").value,
            document.getElementById("valor2").value
        ];
        res.value = Number(val[0]) - Number(val[1]);
    },
    // Função para multiplicação
    () => {
        const val = [
            document.getElementById("valor1").value,
            document.getElementById("valor2").value
        ];
        res.value = Number(val[0]) * Number(val[1]);
    },
    // Função para divisão
    () => {
        const val = [
            document.getElementById("valor1").value,
            document.getElementById("valor2").value
        ];
        res.value = Number(val[0]) / Number(val[1]);
    }
];

// Adiciona os event listeners aos botões para chamar a operação correspondente
btn_soma.addEventListener("click", () => { op[0]() });
btn_subtracao.addEventListener("click", () => { op[1]() });
btn_multiplicacao.addEventListener("click", () => { op[2]() });
btn_divisao.addEventListener("click", () => { op[3]() });
