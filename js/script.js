let indiceAtual = 0;
let totalAcertos = 0;
let perguntasSorteadas = [];
let nomeUsuario = "";
const estadoRespostas = {}; 

// Elementos da Tela Inicial
const telaInicial = document.getElementById('tela-inicial');
const telaQuiz = document.getElementById('tela-quiz');
const inputNome = document.getElementById('nome-usuario');
const inputQtd = document.getElementById('qtd-perguntas');
const btnComecar = document.getElementById('btn-comecar');
const avisoMaxPerguntas = document.getElementById('max-perguntas-aviso');


// Elementos do Quiz
const elementoId = document.getElementById('pergunta-id');
const progressoQuiz = document.getElementById('progresso-quiz');
const elementoPergunta = document.getElementById('pergunta-texto');
const elementoOpcoes = document.getElementById('opcoes-container');
const btnVoltar = document.getElementById('btn-voltar');
const btnProximo = document.getElementById('btn-proximo');
const feedbackContainer = document.getElementById('feedback-container');
const containerPergunta = document.getElementById('pergunta-container'); 
const controles = document.querySelector('.controles'); 
const cabecalhoQuiz = document.getElementById('cabecalho-quiz');

// Informa ao usuário o máximo de perguntas disponíveis
avisoMaxPerguntas.innerText = `Máximo disponível: ${bancoDeQuestoes.length} perguntas.`;

// Função para embaralhar array (Algoritmo Fisher-Yates)
function embaralharArray(array) {
    const novoArray = [...array];
    for (let i = novoArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [novoArray[i], novoArray[j]] = [novoArray[j], novoArray[i]];
    }
    return novoArray;
}

// Inicia o Quiz
btnComecar.addEventListener('click', () => {
    nomeUsuario = inputNome.value.trim();
    let qtdSelecionada = parseInt(inputQtd.value);

    if (nomeUsuario === "") {
        alert("Por favor, digite seu nome.");
        return;
    }

    if (isNaN(qtdSelecionada) || qtdSelecionada < 1) {
        alert("Por favor, insira uma quantidade válida de perguntas.");
        return;
    }

    if (qtdSelecionada > bancoDeQuestoes.length) {
        alert(`Temos apenas ${bancoDeQuestoes.length} perguntas disponíveis. O valor foi ajustado para o máximo.`);
        qtdSelecionada = bancoDeQuestoes.length;
    }

    // Sorteia as perguntas e seleciona a quantidade desejada
    perguntasSorteadas = embaralharArray(bancoDeQuestoes).slice(0, qtdSelecionada);

    telaInicial.style.display = 'none';
    telaQuiz.style.display = 'block';

    carregarPergunta();
});

function carregarPergunta() {
    const questaoAtual = perguntasSorteadas[indiceAtual];
    const estado = estadoRespostas[indiceAtual] || { validada: false, selecionados: [] };

    elementoId.innerHTML = `ID: ${questaoAtual.id}`;
    progressoQuiz.innerText = `Questão ${indiceAtual + 1} de ${perguntasSorteadas.length}`;

    elementoPergunta.innerText = questaoAtual.pergunta;
    elementoOpcoes.innerHTML = '';
    
    questaoAtual.alternativas.forEach((opcao, index) => {
        const botaoOpcao = document.createElement('button');
        botaoOpcao.innerText = opcao;
        botaoOpcao.classList.add('opcao');
        botaoOpcao.dataset.index = index;
        
        if (estado.selecionados.includes(index)) {
            botaoOpcao.classList.add('selecionada');
        }

        if (estado.validada) {
            botaoOpcao.disabled = true;
        }
        
        botaoOpcao.addEventListener('click', () => {
            if (estadoRespostas[indiceAtual]?.validada) return; 

            if (questaoAtual.id_mult) {
                botaoOpcao.classList.toggle('selecionada');
            } else {
                document.querySelectorAll('.opcao').forEach(btn => btn.classList.remove('selecionada'));
                botaoOpcao.classList.add('selecionada');
            }
        });
        
        elementoOpcoes.appendChild(botaoOpcao);
    });

    btnVoltar.disabled = indiceAtual === 0;

    if (estado.validada) {
        mostrarFeedback(questaoAtual, estado.acertou);
        btnProximo.innerText = (indiceAtual === perguntasSorteadas.length - 1) ? 'Finalizar' : 'Próximo';
    } else {
        feedbackContainer.style.display = 'none';
        btnProximo.innerText = 'Validar';
    }
}

function mostrarFeedback(questaoAtual, acertou) {
    feedbackContainer.style.display = 'block';
    feedbackContainer.className = acertou ? 'feedback-correto' : 'feedback-erro';
    
    let conteudoFeedback = acertou ? '<strong>✅ Resposta Correta!</strong>' : '<strong>❌ Resposta Incorreta.</strong>';
    
    if (!acertou) {
        let textoCorretas = '';
        if (questaoAtual.id_mult) {
            textoCorretas = questaoAtual.id_resposta.map(i => questaoAtual.alternativas[i]).join('<br>');
        } else {
            textoCorretas = questaoAtual.alternativas[questaoAtual.id_resposta];
        }
        conteudoFeedback += `<br><br><strong>As alternativas corretas eram:</strong><br>${textoCorretas}`;
    }
    
    let textoExplicacao = questaoAtual.explicacao || 'Nenhuma explicação disponível.';
    conteudoFeedback += `<br><br><strong>Explicação:</strong><br>${textoExplicacao}`;
    
    feedbackContainer.innerHTML = conteudoFeedback;
}

btnProximo.addEventListener('click', () => {
    const questaoAtual = perguntasSorteadas[indiceAtual];
    const estado = estadoRespostas[indiceAtual] || { validada: false, selecionados: [] };

    if (!estado.validada) {
        const selecionados = Array.from(document.querySelectorAll('.opcao.selecionada'))
                                  .map(btn => parseInt(btn.dataset.index));
        
        if (selecionados.length === 0) {
            alert('Por favor, selecione uma opção antes de validar.');
            return;
        }

        let acertou = false;
        if (questaoAtual.id_mult) {
            const respostasCertas = questaoAtual.id_resposta.slice().sort();
            const respostasUsuario = selecionados.slice().sort();
            acertou = JSON.stringify(respostasCertas) === JSON.stringify(respostasUsuario);
        } else {
            acertou = selecionados[0] === questaoAtual.id_resposta;
        }

        if (acertou) {
            totalAcertos++;
        }

        estadoRespostas[indiceAtual] = {
            validada: true,
            selecionados: selecionados,
            acertou: acertou
        };

        document.querySelectorAll('.opcao').forEach(btn => btn.disabled = true);
        
        mostrarFeedback(questaoAtual, acertou);
        btnProximo.innerText = (indiceAtual === perguntasSorteadas.length - 1) ? 'Finalizar' : 'Próximo';

    } else {
        if (indiceAtual < perguntasSorteadas.length - 1) {
            indiceAtual++;
            carregarPergunta();
        } else {
            mostrarResultadoFinal();
        }
    }
});

btnVoltar.addEventListener('click', () => {
    if (indiceAtual > 0) {
        indiceAtual--;
        carregarPergunta();
    }
});

function mostrarResultadoFinal() {
    cabecalhoQuiz.style.display = 'none'; 
    const porcentagem = Math.round((totalAcertos / perguntasSorteadas.length) * 100);
    
    let mensagemTitulo = "";
    let mensagemApoio = "";
    let corDestaque = "";

    // A nota de aprovação oficial da AWS é 70%
    if (porcentagem >= 70) {
        mensagemTitulo = `Parabéns pela aprovação, ${nomeUsuario}! 🎉`;
        mensagemApoio = "Excelente trabalho! Você alcançou a nota necessária e demonstrou um ótimo domínio dos conceitos da AWS.";
        corDestaque = "#059669"; // Verde
    } else if (porcentagem >= 50) {
        mensagemTitulo = `Foi quase, ${nomeUsuario}! 💪`;
        mensagemApoio = "Você está no caminho certo! Revise os serviços que geraram dúvidas e tente novamente. A aprovação está muito perto!";
        corDestaque = "#D97706"; // Laranja
    } else {
        mensagemTitulo = `Não desanime, ${nomeUsuario}! 🚀`;
        mensagemApoio = "O início dos estudos é sempre o mais desafiador. Use este resultado para guiar suas revisões, continue praticando e você chegará lá!";
        corDestaque = "#DC2626"; // Vermelho
    }
    
    containerPergunta.innerHTML = `
        <h2 style="text-align: center; color: ${corDestaque};">${mensagemTitulo}</h2>
        <div style="text-align: center; margin-top: 20px; font-size: 18px; line-height: 1.6;">
            <p>Você acertou <strong>${totalAcertos}</strong> de <strong>${perguntasSorteadas.length}</strong> questões.</p>
            <p>Seu aproveitamento foi de <strong style="color: ${corDestaque}; font-size: 22px;">${porcentagem}%</strong>.</p>
            <p style="margin-top: 15px; font-size: 16px; color: #374151;">${mensagemApoio}</p>
            <p style="margin-top: 5px; font-size: 13px; color: #6B7280;">(Nota de aprovação do exame CLF-C02: 70%)</p>
            
            <button id="btn-reiniciar" style="margin-top: 25px; width: 100%;">Voltar para o Início</button>
        </div>
    `;
    controles.style.display = 'none'; 

    // Adiciona o evento de clique no novo botão para recarregar a página e voltar ao início
    document.getElementById('btn-reiniciar').addEventListener('click', () => {
        window.location.reload();
    });
}