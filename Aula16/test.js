var frutas = ['banana', 'maça', 'abacaxi', 'pera', 'melencia']
var legumes = ['abobora', 'couve', 'cenoura', 'batata', 'couve']
function cm(x){

    if (frutas.includes(x)){
        return 'é uma fruta'
    } else if (legumes.includes(x)) {
        return 'é um legume'
    }

}
var res = cm('abobora')
console.log(`${res}`)