// alert('Olá euuuuuuu')
'use strict'

const nota1 = document.getElementById('nota1');
const nota2 = document.getElementById('nota2');
const calcular = document.getElementById('calcular');
const situacao = document.getElementById('situacao')
const formulario = document.getElementById('formulario')


function media(){
    const resultado = (Number(nota1.value)+ Number(nota2.value)) / 2 ;
    console.log(resultado);

    const link = document.getElementById('resultado')

   if(nota1.value > 10 || nota2.value > 10){

       alert('Não pode colocar número maior que 10')
       formulario.classList.add('sombra-amarelo')

   }else if (nota1.value < 0 || nota2.value < 0){

       alert('Não pode colocar um número menor que 0')
       formulario.classList.add('sombra-amarelo')

   }else{
     if(resultado < 7){

        formulario.classList.add('sombra-vermelho')
        situacao.value = 'REPROVADO!!'  

    }else{

        formulario.classList.add('sombra-azul')
        situacao.value = 'APROVADO!!'

    }
}

    
}


calcular.addEventListener('click', media);
