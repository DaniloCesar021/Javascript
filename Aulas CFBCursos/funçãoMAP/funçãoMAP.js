const cursos = ['html', 'css', 'javascript', 'php', 'react']
cursos.map((el, i) => {
    console.log(`curso ${el} - posição do curso ${i}`)
})



/*
/// MAP com return///
 ? ------------------------------------------------------------------
const cursos = ['html', 'css', 'javascript', 'php', 'react']
let c = cursos.map((el, i) => {
    return el
})

console.log(c) 
 ? ------------------------------------------------------------------

 
 ! ------------------------------------------------------------------
 const cursos = ['html', 'css', 'javascript', 'php', 'react']
 let c = cursos.map((el, i) => {
    return `<div>${el}</div>`
})
console.log(c)
 ! ------------------------------------------------------------------
*/

/*MAP no DOM 

let el = document.getElementsByTagName('div')
el = [...el]
el.map((e, i) => {
    console.log(e)
})
    
*/