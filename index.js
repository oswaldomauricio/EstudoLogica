const btn_nao = document.querySelector('.btn-nao')
const btn_sim = document.querySelector('.btn-sim')
const titulo = document.querySelector('.campo')
const btnenviar = document.querySelector('.enviar')
const receber = document.querySelector('.cemPorcento')


btn_nao.addEventListener('mouseover', desviarNao)
btn_sim.addEventListener('click', aceitou)
btnenviar.addEventListener('click', enviar)
function enviar(){
    const receber = document.querySelector('.cemPorcento')
    receber.style.display = 'flex'
    receber.style.justifycontent = 'center'
}


function aceitou(){

    let aceitou = document.querySelector('.aceitou')
    aceitou.style.display = 'flex'
    aceitou.style.justifycontent = 'center'
}


function randomPosition() {
    const x = Math.floor(Math.random() * 300) + 5;
    const y = Math.floor(Math.random() * 300) + 5;
    const yn = Math.floor(Math.random() * 300) + 5;
    const xn = Math.floor(Math.random() * 300) + 5;

    const xnn = Math.ceil(xn)
    const ynn = Math.ceil(yn)

    return {x, y, ynn, xnn}
}

function desviarNao(){
    const {x, y, yn, xn} = randomPosition()
    btn_nao.style.top = `${x}px`
    btn_nao.style.left = `${y}px`
    btn_nao.style.left = `${xn}px`
}
