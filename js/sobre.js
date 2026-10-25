const telaSobre = document.getElementById('tela-sobre');
const telaInicialObj = document.getElementById('tela-inicial');
const telaQuizObj = document.getElementById('tela-quiz');
const linkSobre = document.getElementById('link-sobre');
const btnVoltarInicio = document.getElementById('btn-voltar-inicio');

linkSobre.addEventListener('click', () => {
    // Esconde qualquer tela ativa e mostra a tela sobre
    telaInicialObj.style.display = 'none';
    telaQuizObj.style.display = 'none';
    telaSobre.style.display = 'block';
});

btnVoltarInicio.addEventListener('click', () => {
    // Retorna para a tela inicial
    telaSobre.style.display = 'none';
    telaInicialObj.style.display = 'block';
});