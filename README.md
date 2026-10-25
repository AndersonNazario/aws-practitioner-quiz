# 🚀 AWS Cloud Practitioner - Quiz!

> Uma aplicação web interativa desenvolvida em JavaScript puro para testar, treinar e consolidar conhecimentos voltados para os exames de certificação da Amazon Web Services (AWS).

---

## 📋 Sobre o Projeto

Este projeto é um simulador de quiz desenvolvido com o objetivo de auxiliar estudantes e profissionais de tecnologia na preparação para certificações da AWS. A aplicação conta com um banco de questões robusto, suporte a perguntas de múltipla escolha simples e múltipla, sistema de pontuação e explicações detalhadas para cada resposta.

---

## ✨ Funcionalidades

* 🎲 **Sorteio Aleatório Justo:** Utiliza o algoritmo *Fisher-Yates* para garantir que todas as perguntas do banco tenham chances iguais de serem sorteadas[cite: 9].
* ⚙️ **Customização do Simulado:** Permite escolher a quantidade de perguntas desejada antes de iniciar o quiz[cite: 9].
* ✅ **Múltipla Escolha Flexível:** Suporta questões com uma ou múltiplas respostas corretas[cite: 9].
* 💡 **Feedback Imediato e Explicações:** Após validar cada questão, o usuário visualiza o gabarito correto e uma explicação teórica detalhada baseada na documentação da AWS.
* 📊 **Resultado Final Detalhado:** Exibe o percentual de aproveitamento e compara com a nota de corte oficial do exame da AWS[cite: 9].
* 📱 **Design Responsivo:** Interface limpa e adaptada para diferentes tamanhos de tela.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias nativas da web, sem a necessidade de frameworks complexos ou instalação de dependências:

* **HTML5** (Estruturação)
* **CSS3** (Estilização e Design)
* **JavaScript (ES6+)** (Lógica do Quiz, manipulação do DOM e algoritmos de embaralhamento)

---

## 📁 Estrutura de Arquivos

```text
aws-practitioner-quiz/
│
├── css/
│   └── style.css       # Estilos da aplicação
│
├── js/
│   ├── dados_2.js      # Banco de dados com as questões e explicações
│   ├── script.js       # Lógica principal do quiz (sorteio, validação e fluxo)
│   └── sobre.js        # Lógica de navegação para telas secundárias
│
├── index.html          # Página principal da aplicação
└── README.md           # Documentação do projeto
````

---

# 🚀 Como Executar o Projeto Localmente

> Como a aplicação é totalmente front-end (HTML/CSS/JS), você não precisa instalar nenhum ambiente Node.js ou dependências de servidor.

```# 1. Clone o repositório:
git clone [https://github.com/AndersonNazario/aws-practitioner-quiz.git](https://github.com/AndersonNazario/aws-practitioner-quiz.git)
```
# 2. Abra a pasta do projeto no seu editor de código favorito (ex: Visual Studio Code).
# 3. Abra o arquivo index.html:
* A maneira mais fácil é utilizando a extensão Live Server no VS Code.
* Ou simplesmente dê um duplo clique no arquivo index.html para abri-lo diretamente no seu navegador.

---

# 🤝 Contribuindo
> Contribuições são sempre bem-vindas! Se você quiser adicionar novas questões ao banco de dados, corrigir algum termo técnico ou melhorar o design:

* Faça um Fork do projeto.
* Crie uma Branch para a sua funcionalidade (git checkout -b feature/nova-funcionalidade).
* Faça o Commit das suas alterações (git commit -m 'feat: adiciona novas questões de S3').
* Faça o Push para a Branch (git push origin feature/nova-funcionalidade).
* Abra um Pull Request.

--- 

# 👤 Autor
> Desenvolvido por Anderson Nazário.
