function* contador() {
    let i = 0
    while (true) {
        yield i++
    }

}
const itc = contador()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
/* ----------------------------------------------- */
/* function* perguntas(){
    const nome=yield 'qual seu nome?'
    const esporte=yield 'qual seu esporte favorito?'
    return `seu nome é ${nome} seu esporte favorito é ${esporte}`
}
const itp=perguntas()
    console.log(itp.next().value)
    console.log(itp.next('Danilo').value)
    console.log(itp.next('Boxe').value) */
/* ----------------------------------------------- */
/* function* cores(){
    yield 'vermelho'
    yield 'verde'
    yield 'azul'
}
const itc=cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value) */