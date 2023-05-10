const btn_nao = document.querySelector('.btn-nao')
const btn_sim = document.querySelector('.btn-sim')
const titulo = document.querySelector('h2')


btn_nao.addEventListener('mouseover', desviarNao)
btn_sim.addEventListener('click', aceitou)

function aceitou(){
    let aceitou = document.querySelector('.aceitou')
    aceitou.style.display = 'flex'
    aceitou.style.justifycontent = 'center'
}


function randomPosition() {
    const x = Math.floor(Math.random() * 300) + 5;
    const y = Math.floor(Math.random() * 100) + 5;
    const yn = Math.floor(Math.random() * 300) + 5;
    const xn = Math.floor(Math.random() * 100) + 5;

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
