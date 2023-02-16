'use strict'

const adicionar = document.getElementById('adicionar')

// function adicionarCard(){
//     alert('ERRO')
// }

// const adicionarCard = () => {
//     const container = document.getElementById('container')
//     container.innerHTML = container.innerHTML +'<div class="item"></div>'
// }

const adicionarCard = (nome, nota) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    novaDiv.classList.add('aluno')
    novaDiv.innerHTML = `<h2 class="aluno_name">${aluno.nome.toUpperCase()}</h2> 
                            <span class="aluno_nota">${aluno.nota}</span>`

    if (nome == '' || nota == '') {
        alert('VAZIO')
    }else if(nota > 10 || nota < 0) {
        alert('Erro: o valor da nota tem que ser entre 0 e 10')
    }else if (isNaN(nota)){
        alert('ERRO: só é possivel colocar números, e não letras')
    }
    else {
        if (nota >= 5) {
            novaDiv.classList.add('caixa_azul')
        } else {
            novaDiv.classList.add('caixa_vermelha')
        }
        container.appendChild(novaDiv)
    }
}
const handleClick = () => {

    // const aluno = {
    //     nome : prompt('Digite o nome do Aluno:'),
    //     nota : prompt('Digite a nota do Aluno')
    // }
    // adicionarCard(aluno)

    const nome = prompt('Digite o nome do Aluno:')
    const nota = prompt('Digite a nota do Aluno')
    adicionarCard(nome, nota)

}
adicionar.addEventListener('click', handleClick)

