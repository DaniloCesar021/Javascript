function poi(){
    let ip1 = document.getElementById('ip1')
    let res = document.getElementById('res')
    parouimp = Number(ip1.value)
    if (parouimp % 2 == 0) {
        res.innerHTML = 'Par'
    } else {
        res.innerHTML= 'impar'
    }

}
function poi(x){
    let res = document.getElementById('res')
    let parouimp = Number(x.value)
    if (parouimp % 2 == 0) {
        res.innerHTML = 'Par'
    } else {
        res.innerHTML= 'impar'
    }

}
