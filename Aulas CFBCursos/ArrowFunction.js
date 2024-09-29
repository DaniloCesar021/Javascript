const soma = (v1, v2) => {
    let res = v1 + v2
    return res
}

console.log(soma(129, 3))

/* //////////////////////////////////////////////////////////////////////////////////////////// */

const idade = (id) => {
    if (id >= 18) {
        return 'maior de idade';
    } else {
        return 'menor de idade';
    }
};

console.log(idade(18));

/* //////////////////////////////////////////////////////////////////////////////////////////// */

const nome = n => { return n } //? Qundo é uma paremetro só nao precisa adicionar os parenteses

console.log(nome('bruno'))

/* //////////////////////////////////////////////////////////////////////////////////////////// */

const add = n => n + 10 //? em alguns casos não precisa de return

console.log(add(10))

