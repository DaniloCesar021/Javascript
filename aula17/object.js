/*let amigo = {nome: `carlos`,sexo: 'masculino',peso: 90,
    engordar(p = 0) {
        console.log('engordou')
        this.peso += p
    }
}
amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso} kilos`)*/


let pai = {
    nome: 'luiz', sexo: 'masculino', peso: 70,
    peso1(p = 0) {
        this.peso += p
    }
}

pai.peso1(10)
console.log(pai.peso)



