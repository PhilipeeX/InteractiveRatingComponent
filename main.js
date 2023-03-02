const nota1 = document.getElementById('nota1');
const nota2 = document.getElementById('nota2');
const nota3 = document.getElementById('nota3');
const nota4 = document.getElementById('nota4');
const nota5 = document.getElementById('nota5');
const submitBnt = document.querySelector('.submit');
var notaEscolhida;

function resetaValores(){
    nota1.style.backgroundColor = '#323c48';
    nota1.style.color = 'hsl(217, 12%, 63%)';
    nota2.style.backgroundColor = '#323c48';
    nota2.style.color = 'hsl(217, 12%, 63%)';
    nota3.style.backgroundColor = '#323c48';
    nota3.style.color = 'hsl(217, 12%, 63%)';
    nota4.style.backgroundColor = '#323c48';
    nota4.style.color = 'hsl(217, 12%, 63%)';
    nota5.style.backgroundColor = '#323c48';
    nota5.style.color = 'hsl(217, 12%, 63%)';
}
nota1.addEventListener('click', function(){
    resetaValores()
    notaEscolhida = 1;
    nota1.style.backgroundColor = 'hsl(217, 12%, 63%)';
    nota1.style.color = 'white';
})
nota2.addEventListener('click', function(){
    resetaValores()
    notaEscolhida = 2;
    nota2.style.backgroundColor = 'hsl(217, 12%, 63%)';
    nota2.style.color = 'white';
})
nota3.addEventListener('click', function(){
    resetaValores()
    notaEscolhida = 3;
    nota3.style.backgroundColor = 'hsl(217, 12%, 63%)';
    nota3.style.color = 'white';
})
nota4.addEventListener('click', function(){
    resetaValores()
    notaEscolhida = 4;
    nota4.style.backgroundColor = 'hsl(217, 12%, 63%)';
    nota4.style.color = 'white';
})
nota5.addEventListener('click', function(){
    resetaValores()
    notaEscolhida = 5;
    nota5.style.backgroundColor = 'hsl(217, 12%, 63%)';
    nota5.style.color = 'white';
})
submitBnt.addEventListener('mousedown', function(){
    if (typeof notaEscolhida == 'undefined'){
        alert('Faça uma avaliação de 1 à 5 para continuar.');
    }
})
