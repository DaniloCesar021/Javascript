const soma = (...numeros) => {
    let n = 0 
    for(v of numeros){
        n += v
    }
    return n
}
console.log(soma(120,5))