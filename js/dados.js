const bancoDeQuestoes = [
    {
        "id": 1,
        "pergunta": "Qual serviço da Amazon Web Services (AWS) pode ser usado para criar um modelo semelhante a script que represente uma pilha de recursos da AWS?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "AWS Systems Manager",
            "Alarmes do Amazon CloudWatch",
            "AWS CloudFormation",
            "AWS CodeDeploy"
        ],
        "explicacao": "O AWS CloudFormation permite modelar e provisionar recursos de infraestrutura em nuvem de forma automatizada e previsível usando código (Infraestrutura como Código - IaC)."
    },
    {
        "id": 2,
        "pergunta": "Por que um administrador de sistemas usaria uma solução de gerenciamento de configuração?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "Para automatizar as tarefas de configuração e fazer com que sejam repetíveis.",
            "Para gerenciar a autenticação de usuários em um sistema.",
            "Para aumentar a escalabilidade das instâncias do Amazon Elastic Compute Cloud (Amazon EC2).",
            "Para executar backups agendados do sistema."
        ],
        "explicacao": "Soluções de gerenciamento de configuração são utilizadas para automatizar o provisionamento e a configuração de servidores, garantindo que as implementações sejam padronizadas, consistentes e facilmente repetíveis."
    },
    {
        "id": 3,
        "pergunta": "Qual é o objetivo de uma condição de espera em um modelo do AWS CloudFormation?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "Sinalizar quando os valores de saída estão disponíveis para serem lidos.",
            "Coordenar a criação de recursos de modelo com outras ações de configuração externa.",
            "Validar parâmetros e aguardar para que estejam livres de erros.",
            "Definir valores de entrada personalizados e aguardar sua inicialização."
        ],
        "explicacao": "No AWS CloudFormation, uma condição de espera (WaitCondition) é empregada para pausar a criação de uma pilha e aguardar um sinal externo (como a conclusão de um script de inicialização em uma instância EC2) antes de continuar o provisionamento. Para a inicialização de recursos EC2 e Auto Scaling, prefira avaliar CreationPolicy com ResourceSignal quando suportado."
    },
    {
        "id": 4,
        "pergunta": "Um administrador deseja armazenar um modelo do AWS CloudFormation em um bucket do Amazon Simple Storage Service (Amazon S3), mas ele recebe um erro. Qual deve ser o motivo?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "O bucket está cheio.",
            "Há um erro de sintaxe no modelo do CloudFormation.",
            "O modelo do CloudFormation é escrito em JavaScript Object Notation (JSON) em vez de YAML Ain't Markup Language (YAML).",
            "O administrador deve ter permissões para acessar o bucket."
        ],
        "explicacao": "O Amazon S3 possui armazenamento virtualmente ilimitado, o que invalida a ideia de um bucket 'cheio'. Como o CloudFormation suporta JSON e YAML, e os erros de sintaxe seriam apontados pelo próprio CloudFormation, o erro no S3 está relacionado à falta de permissões adequadas no IAM para acessar ou gravar no bucket."
    },
    {
        "id": 5,
        "pergunta": "Qual afirmação sobre as imagens de máquina da Amazon (AMIs) é verdadeira?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Uma AMI é usada para uma instância por vez.",
            "Uma AMI não pode ser copiada.",
            "Uma AMI está ancorada no nível da Região.",
            "Uma AMI é aplicada a uma instância depois que a instância é iniciada."
        ],
        "explicacao": "As AMIs (Amazon Machine Images) são recursos vinculados a uma Região específica da AWS. Para lançar instâncias a partir da mesma AMI em uma Região diferente, é obrigatório primeiro copiar a AMI para a nova Região."
    },
    {
        "id": 6,
        "pergunta": "Uma prestadora de serviços federal localizada em Seattle está expandindo sua presença na nuvem para a Alemanha, que tem regras rigorosas sobre a saída de dados originados na região. Isso é conhecido como soberania de dados. Quais critérios de seleção devem ser priorizados para as necessidades de expansão desse cliente?",
        "id_mult": false,
        "id_resposta": 4,
        "alternativas": [
            "Serviços disponíveis na região",
            "Requisitos do cliente",
            "Proximidade com os clientes",
            "Custos de serviço",
            "Governança de dados, requisitos legais"
        ],
        "explicacao": "Quando um cliente enfrenta regras rigorosas de soberania de dados e necessita passar por auditorias federais, a 'Governança de dados e os requisitos legais' tornam-se o fator crítico para a seleção da região, garantindo o compliance regulatório local."
    },
    {
        "id": 7,
        "pergunta": "Uma prestadora de serviços federal localizada em Seattle está expandindo sua presença na nuvem para a Alemanha. Quais serviços seriam considerados globais para este cliente? Selecione três respostas.",
        "id_mult": true,
        "id_resposta": [
            2,
            3,
            4
        ],
        "alternativas": [
            "Amazon Elastic Compute Cloud (Amazon EC2)",
            "Imagens de máquina da Amazon (AMIs)",
            "AWS Identity and Access Management (IAM)",
            "Amazon Route 53",
            "Amazon CloudFront"
        ],
        "explicacao": "Na AWS, IAM (gerenciamento de identidade), Route 53 (DNS) e CloudFront (CDN) operam em nível global e não são restritos a uma região específica. Em contrapartida, EC2 e AMIs são recursos isolados regionalmente."
    },
    {
        "id": 8,
        "pergunta": "Uma empresa financeira está trabalhando com a AWS para seu novo site. Os administradores percebem que as imagens do site demoram um pouco para serem carregadas para clientes globais. Qual serviço seria benéfico para reduzir a latência nos downloads de imagens?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Amazon CloudWatch",
            "Amazon Elastic Block Store (Amazon EBS)",
            "Amazon CloudFront",
            "Amazon Elastic Compute Cloud (Amazon EC2)",
            "Amazon Simple Storage Service (Amazon S3)"
        ],
        "explicacao": "O Amazon CloudFront é o serviço de Content Delivery Network (CDN) da AWS. Ele armazena conteúdo em cache nos pontos de presença de borda (Edge Locations) globais, reduzindo consideravelmente a latência para os clientes ao redor do mundo."
    },
    {
        "id": 9,
        "pergunta": "Uma empresa financeira está trabalhando com a AWS para seu novo site. Onde as imagens que são usadas para o site devem ser armazenadas?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Amazon Glacier",
            "Amazon CloudFront",
            "Amazon Simple Storage Service (Amazon S3)",
            "Amazon Elastic Block Store (Amazon EBS)",
            "Amazon DynamoDB"
        ],
        "explicacao": "O Amazon S3 é o serviço de armazenamento de objetos nativo e de alta durabilidade da AWS, sendo a prática mais recomendada e econômica para abrigar arquivos e mídias estáticas de sites web, muitas vezes servindo como origem primária para o CloudFront."
    },
    {
        "id": 10,
        "pergunta": "Qual formato de saída da AWS CLI é mais legível por uma pessoa e deve ser selecionado pelo administrador de operações do sistema para mostrar ao cliente os resultados da pesquisa de imagens?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Texto",
            "JavaScript Object Notation (JSON)",
            "Tabela",
            "Comando"
        ],
        "explicacao": "Ao configurar a AWS CLI, a saída 'Tabela' ('table') formata os dados em um quadro visualmente tabulado, tornando os resultados instantaneamente legíveis para humanos e facilitando a exibição para o cliente."
    },
    {
        "id": 11,
        "pergunta": "Qual parâmetro da AWS CLI permite testar permissões sem executar uma operação EC2 que ofereça suporte a essa funcionalidade?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "--filter",
            "--output",
            "--dry-run",
            "--query"
        ],
        "explicacao": "O parâmetro --dry-run verifica as permissões necessárias para a chamada de API específica que oferece suporte a esse parâmetro, sem executar a ação. Não é um teste universal de todas as permissões."
    },
    {
        "id": 12,
        "pergunta": "Uma startup de tecnologia acabou de criar um aplicativo para pedidos de almoço. Ela quer fornecer ao cliente e ao restaurante uma notificação de que a entrega foi concluída. Quais são os serviços que podem ser usados para fornecer essa notificação? Selecione duas respostas.",
        "id_mult": true,
        "id_resposta": [
            0,
            3
        ],
        "alternativas": [
            "AWS Lambda",
            "Imagens de máquina da Amazon (AMIs)",
            "Amazon Elastic Compute Cloud (Amazon EC2)",
            "Amazon Simple Notification Service (Amazon SNS)",
            "Amazon Lightsail"
        ],
        "explicacao": "O Amazon SNS (Simple Notification Service) é responsável pelo disparo e distribuição das mensagens (SMS, e-mail, Push), enquanto o AWS Lambda pode ser acionado para processar a lógica no backend e orquestrar a publicação do evento no SNS."
    },
    {
        "id": 13,
        "pergunta": "Qual endereço IP fornece serviço de metadados para todas as instâncias associadas ao aplicativo móvel?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "100.127.255.255",
            "169.254.255.255",
            "127.255.255.255",
            "169.254.169.254"
        ],
        "explicacao": "O IPv4 link-local estático 169.254.169.254 é o endpoint padrão embutido na AWS para que uma instância do EC2 recupere dados do usuário (user data) e atributos de metadados próprios do serviço de IMDS."
    },
    {
        "id": 14,
        "pergunta": "Em que momento os dados do usuário (User Data) são executados quando você provisiona uma instância do Amazon EC2?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Criação",
            "Implantação",
            "Encerramento",
            "Inicialização"
        ],
        "explicacao": "Os scripts de 'Dados do Usuário' são injetados no provisionamento e executados automaticamente na fase final da 'Inicialização' (Boot) da máquina, garantindo que a infraestrutura seja instalada antes do primeiro uso."
    },
    {
        "id": 15,
        "pergunta": "Um engenheiro iniciante decidiu usar EC2 para reduzir o hardware, operando em uma região até o negócio crescer. Qual tipo de instância do Amazon EC2 seria a prática recomendada?",
        "id_mult": false,
        "id_resposta": 4,
        "alternativas": [
            "Spot",
            "Temporária",
            "Reservada",
            "Dedicada",
            "Sob demanda"
        ],
        "explicacao": "Para ambientes novos, onde a carga de trabalho ainda não foi definida ou estudada e não se deseja compromisso financeiro antecipado, o modelo 'Sob demanda' (On-Demand) é a opção recomendada."
    },
    {
        "id": 16,
        "pergunta": "Que medidas o cliente deve tomar se quiser que um novo hardware ofereça suporte à instância do Amazon EC2? Selecione duas respostas.",
        "id_mult": true,
        "id_resposta": [
            0,
            3
        ],
        "alternativas": [
            "Interromper a instância.",
            "Reinicializar a instância.",
            "Encerrar a instância.",
            "Iniciar a instância.",
            "Criar uma nova instância."
        ],
        "explicacao": "Instâncias suportadas por Amazon EBS podem ser 'Interrompidas' (Stop) e, em seguida, 'Iniciadas' (Start). Esse ciclo força a AWS a inicializar a máquina virtual base em um nó de hardware físico completamente diferente no Data Center, mitigando falhas no hardware anterior."
    },
    {
        "id": 17,
        "pergunta": "Um armazém de flores busca aprimorar a infraestrutura. Qual recurso daria suporte para que seus clientes recebam mensagens em tempo real sem exigir que eles façam solicitações adicionais ao servidor?",
        "id_mult": false,
        "id_resposta": 4,
        "alternativas": [
            "Rastreamento da solicitação",
            "Sticky sessions",
            "Monitoramento operacional",
            "Verificações de integridade",
            "WebSockets"
        ],
        "explicacao": "O protocolo WebSockets cria uma conexão full-duplex persistente, que permite ao servidor empurrar ativamente dados (mensagens em tempo real) para o cliente sem depender de atualizações contínuas de polling HTTP."
    },
    {
        "id": 18,
        "pergunta": "Qual configuração de failover do Amazon Route 53 ofereceria suporte ao site para que ele ficasse disponível durante a maior parte do tempo, mesmo se houvesse instâncias com problemas de integridade?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Configurações mistas de failover",
            "Failover ativo-ativo-passivo",
            "Failover ativo-passivo",
            "Failover ativo-ativo"
        ],
        "explicacao": "No modelo ativo-ativo do Route 53, todos os registros processam ativamente o tráfego a menos que a verificação de saúde correspondente falhe, cenário no qual o tráfego defeituoso é removido e distribuído entre os nós sobreviventes."
    },
    {
        "id": 19,
        "pergunta": "Que funções o Amazon Route 53 disponibiliza para um site? Selecione três respostas.",
        "id_mult": true,
        "id_resposta": [
            0,
            2,
            3
        ],
        "alternativas": [
            "Registra nomes de domínio.",
            "Configura a melhor rota para auto scaling para um recurso.",
            "Conclui as verificações de integridade do recurso para garantir que ele possa ser acessado.",
            "Encaminha o tráfego para o site com base no nome de domínio inserido.",
            "Hospedagem para o site localizada em diferentes locais de borda."
        ],
        "explicacao": "O Amazon Route 53 é amplamente utilizado como sistema principal para gerenciamento e Registro de domínios, configuração de regras para roteamento/encaminhamento de tráfego, e implantação de verificações de saúde/integridade (health checks) contra as origens de um serviço."
    },
    {
        "id": 20,
        "pergunta": "Que serviços podem ser usados para armazenar informações relacionadas à sessão de uma instância do Amazon EC2 para que a instância permaneça stateless? Selecione duas respostas.",
        "id_mult": true,
        "id_resposta": [
            3,
            4
        ],
        "alternativas": [
            "Amazon Simple Storage Service (Amazon S3)",
            "Amazon Relational Database Service (Amazon RDS)",
            "Amazon Auto Scaling",
            "Amazon ElastiCache",
            "Amazon DynamoDB"
        ],
        "explicacao": "Para extrair o estado de sessão de uma camada computacional, desacoplando os perfis estáticos das máquinas e tornando-as 'stateless' (sem estado), o armazenamento nos serviços DynamoDB (tabela NoSQL em micro-milissegundos) ou no Amazon ElastiCache (armazenamento em cache em memória Redis/Memcached) são as opções ideais da AWS."
    },
    {
        "id": 21,
        "pergunta": "Uma empresa de caminhões quer rastrear melhor sua frota e garantir que as informações sejam portáveis entre diferentes ambientes. Que tipo de solução seria a ideal para a empresa de caminhões?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Local",
            "Sem servidor",
            "Híbrida",
            "Contêineres",
            "Internet das Coisas (IoT)"
        ],
        "explicacao": "A utilização de contêineres oferece grande portabilidade. Eles permitem que os aplicativos rodem de maneira padronizada tanto na nuvem quanto nos servidores físicos da base da empresa ou de parceiros, evitando o 'aprisionamento' a um único provedor."
    },
    {
        "id": 22,
        "pergunta": "Que tipo de instância do Amazon EC2 deve ser usada com o AWS Lambda para a obtenção do benefício mais econômico, ao mesmo tempo mantendo a segurança e a resiliência para o caso de uso da empresa de caminhões?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Dedicada",
            "Reservada",
            "Sob demanda",
            "Spot",
            "Temporária"
        ],
        "explicacao": "Para cargas de trabalho irregulares (como caminhões que retornam à base ocasionalmente) integradas a arquiteturas orientadas a eventos (Lambda), as instâncias 'Sob demanda' (On-Demand) oferecem flexibilidade sem exigir contratos de longo prazo, pagando apenas pelo uso."
    },
    {
        "id": 23,
        "pergunta": "Que serviço de streaming de dados pode ser adicionado ao projeto sem servidor da empresa de caminhões para analisar dados que possam ser personalizados para aplicativos futuros?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "AWS OpsWorks",
            "Amazon Redshift",
            "AWS Lambda",
            "Amazon Kinesis",
            "Amazon Cognito"
        ],
        "explicacao": "O Amazon Kinesis é o serviço gerenciado da AWS específico para coleta, processamento e análise de streaming de dados em tempo real (como a telemetria contínua de uma frota de caminhões)."
    },
    {
        "id": 24,
        "pergunta": "Quantas políticas do IAM oferecem suporte à autenticação do AWS Lambda?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "Duas",
            "Quatro",
            "Três",
            "Uma"
        ],
        "explicacao": "O AWS Lambda utiliza duas políticas principais de IAM: a 'Execution Role' (Função de execução), que concede permissões para a função acessar outros serviços AWS, e a 'Resource-based policy' (Política baseada em recursos), que define quem pode invocar a função."
    },
    {
        "id": 25,
        "pergunta": "Um banco FinTech criou uma nova linha de cartões de crédito. Qual razão deve ser usada para selecionar o Amazon DynamoDB como banco de dados para oferecer suporte ao aplicativo para dispositivos móveis? Selecione três respostas.",
        "id_mult": true,
        "id_resposta": [
            0,
            3,
            4
        ],
        "alternativas": [
            "Fornecer latência de um dígito.",
            "Garantir que réplicas de leitura estejam altamente disponíveis.",
            "Oferecer suporte para ferramentas de Business Intelligence (BI).",
            "Oferecer suporte a modelos de armazenamento de documentos e chave-valor.",
            "Utilizar coleções não ordenadas de pares nome-valor."
        ],
        "explicacao": "O Amazon DynamoDB é focado em performance e flexibilidade. Suas principais razões de uso incluem a latência de milissegundos de um único dígito, o suporte a modelos de dados NoSQL (documentos e chave-valor) e o uso flexível de atributos por meio de coleções não ordenadas de pares nome-valor."
    },
    {
        "id": 26,
        "pergunta": "Qual atributo do Amazon DynamoDB pode armazenar coleções de pares nome-valor entre {}?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Tipo binário",
            "Tipo lista",
            "Tags de metadados",
            "Tipo de mapa",
            "Dados de string"
        ],
        "explicacao": "No Amazon DynamoDB, o tipo de dados 'Mapa' (Map) é utilizado para representar objetos JSON não ordenados e armazenar coleções de pares nome-valor aninhados dentro de chaves {}."
    },
    {
        "id": 27,
        "pergunta": "Qual solução de banco de dados seria a opção ideal e mais econômica em termos de arquitetura para armazenar as informações de perfil pessoal dos clientes continuamente?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Amazon Aurora",
            "Amazon Redshift",
            "Amazon DynamoDB",
            "Amazon Neptune",
            "Amazon ElastiCache"
        ],
        "explicacao": "O Amazon DynamoDB é um banco de dados NoSQL sem servidor, altamente escalável e ideal para perfis de utilizadores, oferecendo um modelo de faturação baseado no consumo (pay-per-request) que é económico para cargas de trabalho contínuas e variáveis."
    },
    {
        "id": 28,
        "pergunta": "Qual banco de dados deve ser usado para rastrear os dados da sessão mensal do cliente, que pode fornecer informações sobre os recursos de aplicativos móveis que os clientes mais usam e, desta maneira, ajudar a desenvolver melhorias econômicas para atualizações de versão?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "Amazon Aurora",
            "Amazon Redshift",
            "Amazon ElastiCache",
            "Amazon Neptune",
            "Amazon DynamoDB"
        ],
        "explicacao": "Para armazenar grandes volumes de dados históricos de sessões com o intuito de analisar padrões de uso e desenvolver melhorias (Business Intelligence e Data Warehousing), o Amazon Redshift é o serviço de análise estruturada recomendado."
    },
    {
        "id": 29,
        "pergunta": "O setor automotivo agora está desenvolvendo um UGV. O aplicativo usado por cada UGV será hospedado em sua própria nuvem privada virtual (VPC) e executado em uma sub-rede privada. Que tipo de conexão de rede deve ser usada para permitir que os aplicativos UGV compartilhem dados com segurança entre si?",
        "id_mult": false,
        "id_resposta": 4,
        "alternativas": [
            "Internet gateway",
            "AWS Direct Connect",
            "Hosts dedicados",
            "Instâncias dedicadas",
            "Peering de VPC"
        ],
        "explicacao": "O emparelhamento de VPC (VPC Peering) permite rotear o tráfego de forma privada entre duas VPCs diferentes usando a rede global da AWS, sem expor os dados à Internet pública."
    },
    {
        "id": 30,
        "pergunta": "O operador informou que o aplicativo UGV não consegue enviar tráfego de saída após manutenção recente. Qual etapa de solução de problemas deve ser considerada? Selecione duas respostas.",
        "id_mult": true,
        "id_resposta": [
            0,
            4
        ],
        "alternativas": [
            "Validar as permissões do security group para as portas de serviço e os endereços IP de origem/destino",
            "Revisar o log do Amazon CloudWatch para determinar se os locais de borda não estão mais armazenando os dados em cache.",
            "Verificar se o par de chaves correto está sendo usado para criptografia e descriptografia de dados com Secure Sockets Layer (SSL).",
            "Determinar se a conexão direta com o endpoint está causando atrasos adicionais.",
            "Confirmar se as listas de controle de acesso à rede (ACLs de rede) fornecem acesso aos protocolos IP e às portas de serviço."
        ],
        "explicacao": "Problemas de conectividade de rede a nível de sub-rede e instância (tráfego de saída bloqueado) requerem a verificação das regras de saída dos Grupos de Segurança (Security Groups - stateful) e das Listas de Controlo de Acesso à Rede (Network ACLs - stateless)."
    },
    {
        "id": 31,
        "pergunta": "O setor automotivo agora está desenvolvendo um Unmanned Ground Vehicle (UGV). O operador deseja visualizar os logs produzidos pelo aplicativo no Amazon CloudWatch Logs. Que tipo de solução de conectividade deve ser usada para enviar os dados de log do aplicativo para o CloudWatch Logs sem passar pela internet?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "AWS VPN CloudHub",
            "Instância NAT",
            "Endpoint de VPC da interface",
            "Gateway do endpoint de VPC"
        ],
        "explicacao": "Para aceder aos serviços da AWS (como o CloudWatch Logs) a partir de uma sub-rede privada sem que o tráfego atravesse a Internet pública, deve utilizar-se um VPC Endpoint de interface (baseado no AWS PrivateLink)."
    },
    {
        "id": 32,
        "pergunta": "A empresa de energia local instalou recentemente uma nova rede elétrica na comunidade. A empresa de energia determinou que acessará os dados no final de cada trimestre, mas o CEO quer ter a possibilidade de acessar esses dados a qualquer momento, sem esperar. Que solução de armazenamento ofereceria o melhor suporte a esse caso de uso?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Amazon Elastic Block Store (Amazon EBS)",
            "Amazon Simple Storage Service (Amazon S3)",
            "Amazon S3 Glacier Deep Archive",
            "Amazon S3 STANDARD Infrequent Access (IA)",
            "Amazon Glacier"
        ],
        "explicacao": "A classe de armazenamento Amazon S3 Standard-Infrequent Access (S3 Standard-IA) é ideal para dados acedidos com pouca frequência (como no final de cada trimestre), mas que exigem acesso rápido e imediato quando necessário (como exigido pelo CEO), oferecendo um custo de armazenamento inferior ao S3 Standard."
    },
    {
        "id": 33,
        "pergunta": "Um bucket S3 com versionamento ativado apresenta aumento dos custos de armazenamento e respostas HTTP 503 em algumas operações PUT/DELETE sobre objetos com milhões de versões. Qual fator pode explicar ambos os sintomas?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Elastic Load Balancing (ELB) não foi ativado.",
            "A configuração de compartilhamento de recursos de origem cruzada (CORS) não foi ativada.",
            "O Amazon EC2 Auto Scaling não foi ativado.",
            "Acúmulo de milhões de versões de determinados objetos em um bucket versionado."
        ],
        "explicacao": "O versionamento mantém versões anteriores e pode elevar os custos. Segundo a documentação do S3, objetos com milhões de versões podem provocar aumento de erros HTTP 503 em operações PUT/DELETE. O simples ato de ativar o versionamento não implica, por si só, erros 503."
    },
    {
        "id": 34,
        "pergunta": "Qual modo do AWS Storage Gateway apresenta arquivos no protocolo NFS ou SMB enquanto armazena seus objetos no Amazon S3?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Tape Gateway",
            "Volume Gateway em modo cached",
            "S3 File Gateway",
            "Amazon EFS",
            "AWS DataSync"
        ],
        "explicacao": "O Amazon S3 File Gateway expõe compartilhamentos de arquivos NFS e SMB, armazenando os arquivos como objetos no Amazon S3."
    },
    {
        "id": 35,
        "pergunta": "Um hospital local está se preparando para uma auditoria e precisa mostrar que está em conformidade com os requisitos da HIPAA. O gerente de departamento do SysOps decidiu usar tags para classificar grupos de logs com o Amazon CloudWatch Logs. Quais instruções descrevem uma restrição de tag? Selecione três respostas.",
        "id_mult": true,
        "id_resposta": [
            0,
            1,
            2
        ],
        "alternativas": [
            "Comprimento máximo do valor da tag de 256 caracteres Unicode.",
            "Comprimento da chave de tag entre 1 e 128 caracteres Unicode.",
            "As chaves e os valores diferenciam maiúsculas de minúsculas em uma tag.",
            "O número máximo de tags por grupo é 20.",
            "As chaves de tag podem começar com aws."
        ],
        "explicacao": "Na AWS, as tags possuem restrições rigorosas: as chaves e os valores diferenciam maiúsculas de minúsculas (case-sensitive), o comprimento máximo da chave é de 128 caracteres, o comprimento máximo do valor é de 256 caracteres e o prefixo 'aws:' é reservado para uso exclusivo da AWS (não pode ser criado pelo utilizador)."
    },
    {
        "id": 36,
        "pergunta": "Um hospital local está se preparando para uma auditoria. Um engenheiro de suporte está tentando recuperar arquivos de log do AWS CloudTrail. Qual extensão de arquivo está associada a esse tipo de arquivo de log?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            ".png",
            ".gz",
            ".aws",
            ".log"
        ],
        "explicacao": "Os arquivos de log do AWS CloudTrail são entregues e armazenados nativamente no Amazon S3 num formato compactado para economizar espaço e reduzir custos, utilizando a extensão '.gz' (GZIP)."
    },
    {
        "id": 37,
        "pergunta": "Um hospital local está se preparando para uma auditoria. O engenheiro de suporte foi notificado de que o AWS Config não está agregando dados de uma organização dentro do hospital. Depois de uma investigação, foi constatado que o AWS Config não consegue acessar os detalhes da organização devido a uma função inválida do AWS Identity and Access Management (IAM). Quais etapas corretivas devem ser seguidas com base neste problema?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Aguardar o atraso da agregação de dados.",
            "Ativar o AWS Config na conta de origem.",
            "Selecionar ou criar uma função do IAM válida.",
            "Ativar todos os recursos do AWS Organizations.",
            "Integrar o AWS Config e o AWS Organizations por meio de uma interface de programação de aplicativo (API)."
        ],
        "explicacao": "Como a causa raiz identificada é uma função inválida do IAM, a etapa corretiva direta e necessária é selecionar uma função existente que tenha as permissões adequadas ou criar uma nova função do IAM válida que permita ao AWS Config aceder aos dados da organização."
    },
    {
        "id": 38,
        "pergunta": "Um hospital local está se preparando para uma auditoria. Uma engenheira de suporte está analisando as métricas do Amazon CloudWatch. Que métrica fornecerá a ela informações sobre o número de bytes gravados em todos os volumes de armazenamento de instância disponíveis para uma instância?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "DiskReadOps",
            "DiskWriteOps",
            "DiskReadBytes",
            "DiskWriteBytes"
        ],
        "explicacao": "No Amazon CloudWatch, a métrica 'DiskWriteBytes' regista o volume total de dados (em bytes) que são gravados (written) nos volumes de armazenamento de instâncias físicas disponíveis para a instância do EC2."
    },
    {
        "id": 39,
        "pergunta": "Um hospital local está se preparando para uma auditoria. O engenheiro de suporte está considerando os limites flexíveis e rígidos da configuração atual e tentando determinar quais recursos podem ser modificados. Quais recursos têm limites flexíveis? Selecione duas respostas.",
        "id_mult": true,
        "id_resposta": [
            1,
            3
        ],
        "alternativas": [
            "Period (Período)",
            "DescribeAlarms (Descrever Alarmes)",
            "Actions (Ações)",
            "ListMetrics (Métricas de Lista)",
            "Metric Data (Dados Métricos)"
        ],
        "explicacao": "As operações da API do Amazon CloudWatch, como 'DescribeAlarms' e 'ListMetrics', possuem limites de taxa de solicitação (limites flexíveis ou 'soft limits') que podem ser ajustados ou aumentados mediante solicitação ao suporte da AWS, ao contrário de limites rígidos que não podem ser alterados."
    },
    {
        "id": 40,
        "pergunta": "Um hospital local está se preparando para uma auditoria. A CEO do hospital solicitou informações adicionais sobre quais são exatamente as responsabilidades deles em relação à segurança, pois eles poderão ser questionados durante uma auditoria. Quais declarações descrevem as únicas responsabilidades de segurança do hospital (cliente) que podem ser apoiadas por evidências do monitoramento? Selecione três respostas.",
        "id_mult": true,
        "id_resposta": [
            0,
            2,
            4
        ],
        "alternativas": [
            "Dados armazenados pelo cliente",
            "Gerenciamento de patches no nível da infraestrutura",
            "Logins de rede",
            "Hardware e software no nível do hipervisor ou abaixo",
            "Acesso a recursos"
        ],
        "explicacao": "De acordo com o Modelo de Responsabilidade Partilhada da AWS, o cliente é responsável pela segurança 'na' nuvem. Isto inclui a gestão e proteção dos 'Dados armazenados pelo cliente', o controlo dos 'Logins de rede' e a configuração das permissões de 'Acesso a recursos'. A AWS é responsável pela segurança 'da' nuvem (hardware, infraestrutura e hipervisor)."
    },
    {
        "id": 41,
        "pergunta": "Uma organização sem fins lucrativos tem vários comitês que têm contas individuais. Eles buscam maneiras de reduzir custos. O diretor financeiro foi configurado como um usuário do IAM com permissões completas no AWS Organizations, mas continua recebendo uma mensagem de 'acesso negado'. Quais etapas de solução de problemas devem ser consideradas? Selecione duas respostas.",
        "id_mult": true,
        "id_resposta": [
            3,
            4
        ],
        "alternativas": [
            "Instruir o diretor financeiro a efetuar logout e iniciar sessão novamente utilizando credenciais de raiz para efetuar a solicitação.",
            "Validar se o diretor financeiro assinou corretamente sua solicitação.",
            "Certificar-se de que o período de espera adequado foi concluído e, em seguida, fazer com que o diretor financeiro repita a solicitação.",
            "Verificar se o diretor financeiro tem credenciais válidas.",
            "Verificar se o diretor financeiro tem as permissões para chamar a ação e o recurso solicitado."
        ],
        "explicacao": "Ao solucionar problemas de 'Acesso Negado' (Access Denied) no AWS IAM, as etapas fundamentais consistem em verificar se as credenciais do utilizador são válidas e confirmar se as políticas anexadas concedem efetivamente as permissões necessárias para a ação e o recurso específicos."    },
    {
        "id": 42,
        "pergunta": "Qual tag do IAM e chave de condição de tag associada devem ser aplicadas para controlar a capacidade do novo funcionário de concluir tarefas específicas com base em sua identidade?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "aws:TagKeys",
            "tagManager=true",
            "aws:RequestTag/key-name",
            "aws:PrincipalTag/key-name",
            "iam:ResourceTag/key-name"
        ],
        "explicacao": "A chave de condição `aws:PrincipalTag/key-name` é utilizada para comparar a tag anexada ao principal (o utilizador ou função do IAM que faz a solicitação) com a tag exigida na política, permitindo o controlo de acesso baseado em atributos (ABAC)."
    },
    {
        "id": 43,
        "pergunta": "O diretor perguntou sobre o AWS Trusted Advisor. Qual declaração você fornece em relação ao seu propósito e função?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Um serviço que permitirá que certificados SSL/TLS sejam provisionados, gerenciados e implantados com outros serviços da AWS baseados na nuvem.",
            "Um serviço que fornece avaliações de segurança automatizadas para, no fim das contas, melhorar a segurança e a conformidade de um aplicativo implantado na AWS.",
            "Um serviço de suporte ao cliente que fornece monitoramento e segurança de performance na nuvem.",
            "Um serviço de detecção de ameaças para contas e cargas de trabalho da AWS. Ele monitora continuamente comportamentos mal-intencionados ou não autorizados.",
            "Um firewall que protege aplicativos web de ataques. Essa proteção é baseada em regras configuradas em condições definidas."
        ],
        "explicacao": "O AWS Trusted Advisor é uma ferramenta que atua como um consultor online, fornecendo orientações em tempo real (monitorização de performance, segurança, otimização de custos, tolerância a falhas e limites de serviço) para ajudar a provisionar recursos de acordo com as melhores práticas da AWS."
    },
    {
        "id": 44,
        "pergunta": "Qual política do AWS Identity and Access Management (IAM) é compatível com condições baseadas em tags?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Executar scripts automatizados de início/parada somente durante o horário comercial",
            "Organizar recursos por grupo.",
            "Capacidade de alocar custos a um usuário.",
            "Limitar chamadas da interface de programação de aplicativos (API) do Amazon Elastic Compute Cloud (Amazon EC2) somente para ambientes de desenvolvimento."
        ],
        "explicacao": "As políticas do IAM suportam condições baseadas em tags para restringir o acesso de forma granular. Um caso de uso clássico é limitar ações de API (como iniciar ou parar instâncias EC2) apenas a recursos que possuam uma tag específica, como 'Ambiente=Desenvolvimento'."
    },
    {
        "id": 45,
        "pergunta": "Seu gerente solicitou que você crie agrupamentos de tags relevantes para a empresa a fim de organizar recursos. Quais tags seriam benéficas para automação? Selecione duas respostas.",
        "id_mult": true,
        "id_resposta": [
            1,
            2
        ],
        "alternativas": [
            "Confidencialidade",
            "Version (Versão)",
            "Data/hora",
            "Centro de custo/unidade de negócios",
            "Aceitação/recusa"
        ],
        "explicacao": "Para fins de automação (como scripts de gestão do ciclo de vida, backups automatizados ou rotinas de início/paragem), as tags que definem 'Data/hora' e 'Version (Versão)' são essenciais para que os scripts identifiquem quando agir e em qual versão do recurso."
    },
    {
        "id": 46,
        "pergunta": "Uma empresa global de viagens anunciou uma reestruturação. Que soluções potenciais o engenheiro de nuvem pode usar para proteger as informações dos clientes em implantações de nuvem contra o ataque de hackers? Selecione três respostas.",
        "id_mult": true,
        "id_resposta": [
            0,
            2,
            4
        ],
        "alternativas": [
            "Automação de implantações seguras com o AWS CloudFormation e o AWS Config",
            "Políticas de permissão para todos os tipos de teste, que é obtido por meio de credenciais raiz e uso de controles de acesso",
            "Criptografia de dados em trânsito com Transport Layer Security (TLS) e em repouso com o AWS Key Management Service (AWS KMS)",
            "Utilizar Amazon GuardDuty como firewall de rede que bloqueia diretamente qualquer pacote na VPC.",
            "Usar o Amazon CloudFront como ponto de entrada, com AWS WAF para filtrar solicitações HTTP(S) maliciosas."
        ],
        "explicacao": "CloudFormation com AWS Config apoia configurações e conformidade; TLS e KMS protegem dados; CloudFront em conjunto com AWS WAF filtra tráfego de aplicação. GuardDuty detecta ameaças, mas não funciona como firewall de rede."
    },
    {
        "id": 47,
        "pergunta": "O engenheiro de nuvem está planejando seus modelos do AWS CloudFormation. Qual é o número máximo de saídas que podem ser declaradas por modelo?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "100",
            "80",
            "40",
            "200",
            "60"
        ],
        "explicacao": "De acordo com as quotas e limites atuais do AWS CloudFormation, pode declarar um máximo de 200 saídas (Outputs) num único modelo (template)."
    },
    {
        "id": 48,
        "pergunta": "A engenheira de nuvem está tentando implementar mais automação usando o AWS CloudFormation. O que deve ser especificado se uma função de serviço tiver sido definida com a política da respectiva função? Por exemplo: AWS::IAM::Policy ou AWS::IAM::ManagedPolicy",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "Uma política de usuário do IAM que atue como uma função de serviço.",
            "Os recursos que usarão a função; uma dependência de política também deve ser adicionada.",
            "Uma política de função do IAM que atue como uma função de serviço.",
            "Um modelo que define uma função de serviço sem dependências.",
            "Uma política de função do IAM que atue como uma função de recurso"
        ],
        "explicacao": "No CloudFormation, se definir uma função do IAM e anexar-lhe políticas em recursos separados (como `AWS::IAM::Policy`), terá de utilizar o atributo `DependsOn` nos recursos (como instâncias EC2) que vão assumir essa função, garantindo que as políticas são criadas antes do recurso."
    },
    {
        "id": 49,
        "pergunta": "O engenheiro de nuvem está revisando os campos de saída do AWS CloudFormation criados por um colega. Quais restrições para referências de pilha cruzada para a saída de recurso exportado ele deve considerar? Selecione três respostas.",
        "id_mult": true,
        "id_resposta": [
            0,
            3,
            4
        ],
        "alternativas": [
            "Os nomes devem ser exclusivos dentro de uma região.",
            "Os valores podem ser importados de qualquer Região que tenha sido exportada anteriormente.",
            "Um valor de saída pode ser modificado ou removido mesmo que ele faça referência a outra pilha em uma de suas saídas.",
            "Uma pilha exportadora não pode ser excluída enquanto outra pilha importar seu valor exportado.",
            "Referências de pilha cruzadas não podem ser criadas entre regiões."
        ],
        "explicacao": "Nas referências de pilha cruzada (cross-stack), os nomes de exportação devem ser únicos na Região e não podem ser referenciados por pilhas noutras Regiões. Além disso, não é possível eliminar a pilha de origem se outra pilha estiver a importar os seus valores."
    },
    {
        "id": 50,
        "pergunta": "A engenheira de nuvem está trabalhando com o gerente de departamento e está explicando os modelos do AWS CloudFormation. Qual seção de modelo forneceria informações adicionais sobre o modelo e viria após a descrição?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "Saída",
            "Metadados",
            "Recursos",
            "Condições",
            "Parâmetros"
        ],
        "explicacao": "Na estrutura anatómica de um modelo do AWS CloudFormation, a secção 'Metadata' (Metadados) é utilizada para fornecer detalhes e configurações adicionais e aparece tipicamente logo a seguir à secção 'Description'."
    },
    {
        "id": 51,
        "pergunta": "Quais declarações descrevem as práticas recomendadas para o AWS CloudFormation que um engenheiro de nuvem pode exigir que sua equipe use como padrão de eficiência? Selecione três respostas.",
        "id_mult": true,
        "id_resposta": [
            0,
            1,
            3
        ],
        "alternativas": [
            "Organizar recursos na mesma pilha com base em sua propriedade e ciclos de vida.",
            "Planejar e organizar pilhas antes de criá-las.",
            "Certificar-se de que não haja dependências entre camadas.",
            "Reutilizar modelos para criar pilhas para diferentes ambientes.",
            "Dissipar recursos em várias pilhas com base em suas tags."
        ],
        "explicacao": "As melhores práticas oficiais do AWS CloudFormation incluem planear a arquitetura antecipadamente, agrupar recursos com o mesmo ciclo de vida e propriedade na mesma pilha, e reutilizar modelos (templates) para replicar infraestruturas em diferentes ambientes (como Dev, Test e Prod)."
    },
    {
        "id": 52,
        "pergunta": "Uma solicitação de lançamento de instância EC2 falhou porque a quota regional aplicável de vCPUs sob demanda foi atingida. Quais medidas podem ajudar? Selecione duas respostas.",
        "id_mult": true,
        "id_resposta": [
            2,
            4
        ],
        "alternativas": [
            "Iniciar um tipo diferente de instância.",
            "Criar a instância novamente.",
            "Solicitar um aumento de limite.",
            "Colocar a instância em outra conta.",
            "Encerrar instâncias em execução que consomem a quota aplicável e já não são necessárias."
        ],
        "explicacao": "As quotas de EC2 são geralmente expressas em vCPUs por grupos de famílias e variam por conta e Região. Pode-se pedir um aumento de quota ou liberar capacidade na quota relevante."
    },
    {
        "id": 53,
        "pergunta": "O engenheiro de nuvem está solucionando problemas nas pilhas do AWS CloudFormation. A funcionária informou que fez algumas alterações na pilha fora do AWS CloudFormation. Que implicações isso poderia ter na pilha?",
        "id_mult": false,
        "id_resposta": 4,
        "alternativas": [
            "A pilha continuará a fornecer mensagens de erro até que o erro seja corrigido.",
            "Não haverá impacto na pilha nem nos respectivos modelos.",
            "Os modelos da pilha precisarão ser reconfigurados.",
            "A pilha deve ser recuperável com modificações no AWS CloudFormation.",
            "A pilha pode estar em um estado irrecuperável."
        ],
        "explicacao": "Fazer alterações manuais em recursos (out-of-band) que foram criados e são geridos pelo CloudFormation pode causar divergência (drift). Se recursos essenciais forem alterados ou eliminados manualmente, a pilha pode entrar num estado irrecuperável para atualizações ou eliminações futuras através do CloudFormation."
    },
    {
        "id": 54,
        "pergunta": "Ao mudar um volume Amazon EBS gp2 para io1 com Elastic Volumes, quais práticas são recomendadas? Selecione três respostas.",
        "id_mult": true,
        "id_resposta": [
            0,
            2,
            3
        ],
        "alternativas": [
            "Criar um snapshot de precaução antes da alteração.",
            "Apagar imediatamente o volume antes de confirmar a nova configuração.",
            "Solicitar ModifyVolume selecionando io1 e IOPS compatíveis.",
            "Monitorar o estado da modificação até a conclusão.",
            "Criar obrigatoriamente um volume novo e descartar o antigo."
        ],
        "explicacao": "Com Elastic Volumes pode-se alterar o tipo do volume em uso via ModifyVolume, definir IOPS compatíveis e monitorar o progresso. Snapshot prévio é precaução recomendada, não requisito obrigatório. Não é necessário excluir o volume existente."
    },
    {
        "id": 55,
        "pergunta": "Qual opção é um serviço sem servidor para executar contêineres?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Amazon Elastic Container Registry (Amazon ECR)",
            "Amazon Elastic Container Service (Amazon ECS)",
            "Amazon Elastic Compute Cloud (Amazon EC2)",
            "AWS Fargate"
        ],
        "explicacao": "O AWS Fargate é um mecanismo de computação sem servidor (serverless) para contentores. Permite executar contentores ECS e EKS sem a necessidade de provisionar, gerir ou escalar servidores e instâncias EC2 subjacentes."
    },
    {
        "id": 56,
        "pergunta": "Qual serviço um cliente deve usar se precisar armazenar, gerenciar e implantar imagens de contêiner do Docker?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "Amazon Lightsail",
            "Amazon Elastic Container Registry (Amazon ECR)",
            "Docker",
            "Amazon Elastic Kubernetes Service (Amazon EKS)"
        ],
        "explicacao": "O Amazon Elastic Container Registry (ECR) é o serviço de registo de contentores totalmente gerido da AWS, utilizado especificamente para armazenar, gerir e partilhar imagens de contentores Docker."
    },
    {
        "id": 57,
        "pergunta": "O que executa o trabalho em um fluxo de trabalho quando você usa o AWS Step Functions?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "Tarefas",
            "Etapas",
            "Action (Ação)",
            "Estados"
        ],
        "explicacao": "No AWS Step Functions, um estado de 'Tarefa' (Task state) representa uma unidade única de trabalho executada por outro serviço da AWS (como invocar uma função AWS Lambda)."
    },
    {
        "id": 58,
        "pergunta": "Qual serviço pode ser usado para criar e executar aplicativos sem provisionar ou gerenciar servidores?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Amazon Elastic Container Service (Amazon ECS)",
            "Amazon Elastic Kubernetes Service (Amazon EKS)",
            "Docker",
            "AWS Lambda"
        ],
        "explicacao": "O AWS Lambda é o principal serviço de computação sem servidor (serverless) da AWS. Ele executa código em resposta a eventos de forma automática, sem a necessidade de provisionar, dimensionar ou gerir infraestrutura de servidores."
    },
    {
        "id": 59,
        "pergunta": "Qual método de solicitação REST é usado para criar um recurso?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "DELETE",
            "PUT",
            "POST",
            "GET"
        ],
        "explicacao": "Na arquitetura de APIs RESTful, o método POST é o protocolo padrão utilizado para enviar dados para o servidor com a intenção de criar um novo recurso."
    },
    {
        "id": 60,
        "pergunta": "Qual é a prática recomendada da AWS para gerenciar um usuário-raiz da conta da AWS?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Não alternar a senha do usuário-raiz.",
            "Compartilhar a senha do usuário-raiz com a equipe de operações.",
            "Ativar autenticação com multifator (MFA) para o usuário-raiz.",
            "Criar uma chave de acesso para o usuário-raiz."
        ],
        "explicacao": "A AWS recomenda fortemente habilitar a Autenticação Multifator (MFA) para o usuário-raiz (root user) a fim de proteger o acesso total à conta contra invasões."
    },
    {
        "id": 61,
        "pergunta": "Qual serviço de banco de dados da AWS fornece armazenamento de dados na memória?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Amazon DynamoDB",
            "Amazon Timestream",
            "Amazon RDS",
            "Amazon ElastiCache"
        ],
        "explicacao": "O Amazon ElastiCache é um serviço de armazenamento de dados na memória (in-memory) totalmente gerenciado, oferecendo suporte a mecanismos populares como Redis e Memcached."
    },
    {
        "id": 62,
        "pergunta": "Uma empresa tem uma aplicação web Java. A empresa quer usar a implantação automática para criar o ambiente da AWS e implantar novas versões de sua aplicação. Qual serviço da AWS atenderá a esses requisitos?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "AWS Control Tower",
            "Amazon EC2",
            "AWS Elastic Beanstalk",
            "AWS Auto Scaling"
        ],
        "explicacao": "O AWS Elastic Beanstalk é um serviço fácil de usar para implantar e dimensionar aplicações e serviços web desenvolvidos com Java, .NET, PHP, Node.js, Python, entre outras linguagens, abstraindo a infraestrutura subjacente."
    },
    {
        "id": 63,
        "pergunta": "Uma aplicação está recebendo ataques de injeção SQL de vários recursos externos. Qual serviço ou recurso da AWS pode ajudar a automatizar a mitigação desses ataques?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "AWS WAF",
            "Elastic Load Balancing (ELB)",
            "Grupos de segurança",
            "ACL de rede"
        ],
        "explicacao": "O AWS WAF (Web Application Firewall) ajuda a proteger aplicações web contra explorações comuns da web e bots, como ataques de injeção de SQL (SQLi) e cross-site scripting (XSS)."
    },
    {
        "id": 64,
        "pergunta": "Qual serviço ou ferramenta da AWS uma empresa pode usar para visualizar, entender e gerenciar os gastos e o uso da AWS ao longo do tempo?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Amazon CloudWatch",
            "AWS Budgets",
            "AWS Trusted Advisor",
            "AWS Cost Explorer"
        ],
        "explicacao": "O AWS Cost Explorer possui uma interface fácil de usar que permite visualizar, entender e analisar os custos e o uso da AWS ao longo do tempo, identificando tendências de gastos."
    },
    {
        "id": 65,
        "pergunta": "Qual serviço da AWS pode ajudar uma empresa a detectar uma interrupção nos servidores do site e redirecionar os usuários para servidores alternativos?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "Amazon GuardDuty",
            "Amazon Route 53",
            "AWS Trusted Advisor",
            "Amazon CloudFront"
        ],
        "explicacao": "O Amazon Route 53 possui recursos avançados de verificações de integridade (health checks) e roteamento de failover de DNS, podendo redirecionar automaticamente o tráfego para recursos íntegros alternativos em caso de interrupção."
    },
    {
        "id": 66,
        "pergunta": "Uma empresa quer monitorar continuamente a atividade da conta da AWS, incluindo ações realizadas por meio do Console de Gerenciamento AWS, kits de desenvolvimento de software (SDKs) da AWS e ferramentas de linha de comando. Qual serviço da AWS atende a esses requisitos?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "Amazon Inspector",
            "AWS CloudTrail",
            "AWS Trusted Advisor",
            "Amazon CloudWatch"
        ],
        "explicacao": "O AWS CloudTrail registra de forma contínua as chamadas de API feitas na conta, rastreando toda a atividade do usuário, seja ela feita via Console de Gerenciamento, SDKs ou ferramentas de linha de comando (CLI)."
    },
    {
        "id": 67,
        "pergunta": "Uma empresa está criando uma aplicação que precisa ser capaz de enviar, armazenar e receber mensagens entre seus componentes. Outro requisito é que as mensagens sejam processadas na ordem primeiro a entrar, primeiro a sair (FIFO). Qual serviço da AWS a empresa deve usar?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "AWS Step Functions",
            "Amazon Simple Notification Service (Amazon SNS)",
            "Amazon Kinesis Data Streams",
            "Amazon Simple Queue Service (Amazon SQS)"
        ],
        "explicacao": "O Amazon SQS (Simple Queue Service) oferece o recurso de filas FIFO (First-In-First-Out), que garantem que as mensagens sejam processadas e entregues estritamente na ordem exata em que foram enviadas."
    },
    {
        "id": 68,
        "pergunta": "Depois de selecionar uma reserva de host dedicado do Amazon EC2, qual opção de preço forneceria o maior desconto?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Sem pagamento antecipado",
            "Pagamento por hora sob demanda",
            "Pagamento antecipado parcial",
            "Pagamento antecipado total"
        ],
        "explicacao": "Nos modelos de precificação e reserva da AWS, a opção de 'Pagamento antecipado total' (All Upfront) sempre oferece o maior nível de desconto em comparação com opções parciais ou sem pagamento adiantado."
    },
    {
        "id": 69,
        "pergunta": "Uma empresa quer garantir que duas instâncias do Amazon EC2 estejam em data centers separados com latência mínima de comunicação entre os data centers. Como a empresa pode atender a esses requisitos?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "Colocar as instâncias do EC2 em duas regiões AWS separadas conectadas a uma conexão de peering de VPC.",
            "Colocar as instâncias do EC2 em duas zonas de disponibilidade separadas na mesma região da AWS.",
            "Colocar uma instância do EC2 on-premises e a outra em uma região da AWS. Em seguida, conectá-las usando uma conexão VPN da AWS.",
            "Colocar as duas instâncias do EC2 em um grupo de posicionamento para obter largura de banda dedicada."
        ],
        "explicacao": "As Zonas de Disponibilidade (AZs) representam data centers fisicamente separados dentro da mesma Região da AWS. Elas são interconectadas com redes de alta largura de banda e baixa latência, cumprindo perfeitamente esses dois requisitos."
    },
    {
        "id": 70,
        "pergunta": "De acordo com o modelo de responsabilidade compartilhada da AWS, quais das seguintes tarefas são responsabilidades da AWS? (Selecione DUAS)",
        "id_mult": true,
        "id_resposta": [
            0,
            4
        ],
        "alternativas": [
            "A correção e atualização do hipervisor.",
            "A criptografia dos dados do cliente.",
            "A definição de firewalls de rede dentro da VPC.",
            "A correção dos sistemas operacionais no Amazon EC2.",
            "A segurança física das instalações da AWS."
        ],
        "explicacao": "No modelo de responsabilidade compartilhada, a AWS é responsável pela 'segurança DA nuvem'. Isso inclui manter a segurança física das instalações e gerenciar a infraestrutura subjacente, como a correção (patching) e atualização do hipervisor que roda as máquinas virtuais."
    },
    {
        "id": 71,
        "pergunta": "Uma empresa precisa gerar relatórios de business intelligence e analytics operacional em petabytes de dados estruturados e semiestruturados. Esses relatórios são produzidos com base em consultas SQL padrão em dados que estão em um data lake do Amazon S3. Qual serviço da AWS permite analisar esses dados?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Amazon Neptune",
            "Amazon RDS",
            "Amazon Redshift",
            "Amazon DynamoDB"
        ],
        "explicacao": "O Amazon Redshift (por meio do recurso Redshift Spectrum) permite executar consultas de data warehousing e relatórios de BI usando SQL padrão diretamente em exabytes de dados armazenados em um data lake no Amazon S3."
    },
    {
        "id": 72,
        "pergunta": "Qual serviço da AWS deve ser usado para monitorar as instâncias do Amazon EC2 quanto à utilização da CPU e da rede?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "Amazon Inspector",
            "Amazon CloudWatch",
            "AWS Config",
            "AWS CloudTrail"
        ],
        "explicacao": "O Amazon CloudWatch é o serviço principal de monitoramento da AWS. Ele coleta e rastreia automaticamente métricas de desempenho no nível do sistema, como utilização de CPU, rede e disco das instâncias do EC2."
    },
    {
        "id": 73,
        "pergunta": "Um sistema se recupera automaticamente de uma falha quando uma empresa lança sua carga de trabalho na plataforma de serviços em nuvem AWS. Qual pilar do AWS Well-Architected Framework essa situação demonstra?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Otimização de custos",
            "Eficiência de desempenho",
            "Excelência operacional",
            "Confiabilidade"
        ],
        "explicacao": "A capacidade de um sistema de prevenir e recuperar-se rapidamente e automaticamente de falhas para atender à demanda de negócios é o princípio fundamental do pilar de Confiabilidade (Reliability)."
    },
    {
        "id": 74,
        "pergunta": "Quais princípios de design da nuvem AWS podem ajudar a aumentar a confiabilidade? (Selecione DUAS)",
        "id_mult": true,
        "id_resposta": [
            0,
            3
        ],
        "alternativas": [
            "Recuperar-se automaticamente de falhas",
            "Adotar um modelo de consumo",
            "Usar a arquitetura monolítica",
            "Testar procedimentos de recuperação",
            "Avaliar a eficiência geral"
        ],
        "explicacao": "Testar procedimentos de recuperação e recuperar-se automaticamente de falhas são dois dos princípios fundamentais de design do pilar de Confiabilidade (Reliability) do AWS Well-Architected Framework."
    },
    {
        "id": 75,
        "pergunta": "Uma empresa está criando um aplicativo web usando a AWS. Qual serviço da AWS ajuda a evitar ataques de DDoS contra o aplicativo web na camada de rede?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Amazon GuardDuty",
            "AWS Firewall Manager",
            "AWS WAF",
            "AWS Shield"
        ],
        "explicacao": "O AWS Shield é um serviço gerenciado de proteção contra DDoS que defende aplicações em execução na AWS. Ele atua especificamente nas camadas de rede e transporte (camadas 3 e 4) na sua versão Standard."
    },
    {
        "id": 76,
        "pergunta": "Quais são as características dos usuários e grupos do IAM da AWS? (Selecione DUAS)",
        "id_mult": true,
        "id_resposta": [
            0,
            2
        ],
        "alternativas": [
            "Os grupos podem conter somente usuários e não podem ser aninhados.",
            "Um usuário só pode ser membro de um único grupo ao mesmo tempo.",
            "Um usuário pode ser membro de vários grupos.",
            "Todos os usuários novos são adicionados automaticamente a um grupo padrão.",
            "Os grupos podem ser aninhados e podem conter outros grupos."
        ],
        "explicacao": "No AWS IAM, os grupos são coleções de usuários. Um usuário pode pertencer a vários grupos simultaneamente (até 10 por padrão). Além disso, grupos só podem conter usuários; eles não podem conter outros grupos (não é possível aninhá-los)."
    },
    {
        "id": 77,
        "pergunta": "Qual serviço computacional da AWS é sem servidor?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "AWS Lambda",
            "Amazon RDS",
            "Amazon Elastic Container Service (Amazon ECS)",
            "Amazon EC2"
        ],
        "explicacao": "O AWS Lambda é o principal serviço de computação sem servidor (serverless) da AWS, permitindo que você execute códigos sem precisar provisionar ou gerenciar a infraestrutura de servidores subjacente."
    },
    {
        "id": 78,
        "pergunta": "Um profissional de nuvem está desenvolvendo um plano de recuperação de desastres e pretende replicar dados entre várias áreas geográficas. Qual componente da Nuvem AWS a empresa deve usar para atender a esses requisitos?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Contas da AWS",
            "Locais de borda",
            "Zonas de disponibilidade",
            "Regiões AWS"
        ],
        "explicacao": "As Regiões da AWS são áreas geográficas isoladas e fisicamente separadas ao redor do mundo (como São Paulo, Norte da Virgínia, Frankfurt). Replicar dados entre diferentes Regiões é a estratégia correta para isolamento geográfico e recuperação de desastres de grande escala."
    },
    {
        "id": 79,
        "pergunta": "Qual princípio de design de arquitetura se aplica ao conceito de dimensionamento correto da infraestrutura da nuvem AWS?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Escalar horizontalmente para aumentar a disponibilidade da carga de trabalho.",
            "Fazer alterações frequentes, pequenas e reversíveis.",
            "Executar operações como código.",
            "Otimizar para fins de custo."
        ],
        "explicacao": "O dimensionamento correto (right-sizing) consiste em escolher a capacidade, tipo e tamanho exatos dos recursos para atender ao desempenho exigido com o menor custo possível. Esta é uma técnica central do pilar de Otimização de Custos."
    },
    {
        "id": 80,
        "pergunta": "Qual das seguintes opções ajudará o usuário a determinar se precisa solicitar um aumento do limite do serviço da VPC?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "AWS Service Catalog",
            "AWS Health Dashboard",
            "AWS Trusted Advisor",
            "AWS relatório de uso e custo"
        ],
        "explicacao": "O AWS Trusted Advisor fornece uma verificação de 'Limites de serviço' (Service Limits). Ele monitora o uso dos recursos e alerta quando a sua conta está se aproximando dos limites das cotas padrão, indicando que é necessário solicitar um aumento."
    },
    {
        "id": 81,
        "pergunta": "Qual responsabilidade é compartilhada entre o usuário e a AWS?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "Fornecer uma chave para a criptografia do lado do cliente do Amazon S3",
            "Oferecer conscientização e treinamento",
            "Controlar o ambiente dos data centers físicos da AWS",
            "Configurar uma instância do Amazon EC2"
        ],
        "explicacao": "De acordo com o Modelo de Responsabilidade Compartilhada, 'Conscientização e treinamento' (Awareness and Training) é classificado como um controle compartilhado. A AWS é responsável por treinar seus próprios funcionários, enquanto o cliente é responsável por treinar a sua equipe."
    },
    {
        "id": 82,
        "pergunta": "Qual serviço da AWS pode criar cópias de recursos nas Regiões AWS?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Amazon ElastiCache",
            "AWS Systems Manager",
            "AWS CloudTrail",
            "AWS CloudFormation"
        ],
        "explicacao": "O AWS CloudFormation usa Infraestrutura como Código (IaC). Isso permite que você crie um modelo (template) e o utilize para implantar cópias exatas dos seus recursos de infraestrutura em qualquer Região da AWS de forma automatizada."
    },
    {
        "id": 83,
        "pergunta": "Uma empresa precisa auditar seus recursos da AWS. A empresa deve documentar todas as alterações feitas nos recursos. Qual serviço da AWS atenderá a esses requisitos?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "AWS Artifact",
            "Amazon Inspector",
            "AWS Config",
            "Amazon CloudWatch"
        ],
        "explicacao": "O AWS Config é um serviço que monitora, avalia e registra continuamente as configurações dos seus recursos. Ele atua como um inventário, permitindo que você audite o histórico e documente exatamente quais alterações foram feitas e quando."
    },
    {
        "id": 84,
        "pergunta": "Qual serviço um cliente pode usar para configurar uma conta de pagador administrativo para visualizar relatórios de cobrança consolidados?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "Amazon QuickSight",
            "AWS Organizations",
            "Amazon Macie",
            "AWS Budgets"
        ],
        "explicacao": "O AWS Organizations possui o recurso de faturamento consolidado (Consolidated Billing). Isso permite que uma conta de gerenciamento atue como pagadora central e visualize os relatórios de uso e cobrança de todas as contas associadas de forma unificada."
    },
    {
        "id": 85,
        "pergunta": "Uma empresa quer melhorar sua postura de segurança e auditoria limitando o acesso de entrada do Amazon EC2. O que a empresa deve usar para acessar instâncias remotamente em vez de abrir portas SSH de entrada e gerenciar chaves SSH?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Pares de chaves do EC2",
            "AWS Identity and Access Management (IAM)",
            "Session Manager do AWS Systems Manager",
            "ACLs de rede"
        ],
        "explicacao": "O Session Manager do AWS Systems Manager permite aceder e gerir instâncias de forma segura através do browser ou da CLI da AWS sem necessidade de abrir portas de entrada (inbound ports), manter anfitriões de bastião (bastion hosts) ou gerir chaves SSH, melhorando consideravelmente a postura de segurança."
    },
    {
        "id": 86,
        "pergunta": "Qual benefício o Amazon Rekognition oferece?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "A capacidade de detectar objetos que aparecem nas imagens",
            "A capacidade de redimensionar milhões de imagens automaticamente",
            "A capacidade de disputar trabalhos de detecção de objetos",
            "A capacidade de colocar marcas d'água nas imagens"
        ],
        "explicacao": "O Amazon Rekognition é um serviço de análise de imagem e vídeo baseado em machine learning (aprendizagem automática) que consegue identificar objetos, pessoas, texto, cenas e atividades em imagens e vídeos."
    },
    {
        "id": 87,
        "pergunta": "Qual serviço da AWS oferece uma maneira simples de configurar um novo ambiente da AWS com várias contas e governá-lo em grande escala?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "AWS Trusted Advisor",
            "AWS Resource Access Manager",
            "AWS Control Tower",
            "AWS Security Hub"
        ],
        "explicacao": "O AWS Control Tower oferece uma forma simplificada de configurar e governar um ambiente AWS seguro com várias contas (multi-conta), baseando-se nas melhores práticas da AWS de forma automatizada e à escala."
    },
    {
        "id": 88,
        "pergunta": "Um desenvolvedor precisa acessar os recursos da AWS a partir da AWS CLI. Qual recurso do AWS Identity and Access Management (IAM) o desenvolvedor pode usar para autenticação?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Chaves SSH",
            "As políticas de senha da conta",
            "Chaves de acesso do IAM",
            "Políticas do IAM"
        ],
        "explicacao": "Para aceder aos serviços da AWS de forma programática através da AWS CLI ou de SDKs, os utilizadores do IAM precisam de gerar e utilizar Chaves de Acesso (Access Keys), que consistem numa ID de chave de acesso e numa chave de acesso secreta."
    },
    {
        "id": 89,
        "pergunta": "De acordo com o modelo de responsabilidade compartilhada da AWS, quais tarefas de segurança são de responsabilidade do cliente? (Selecione DUAS)",
        "id_mult": true,
        "id_resposta": [
            0,
            1
        ],
        "alternativas": [
            "Criptografia de dados do lado do cliente",
            "Integridade dos dados do cliente",
            "Segurança de hardware nas regiões AWS",
            "Segurança de locais de borda"
        ],
        "explicacao": "No modelo de responsabilidade partilhada da AWS, a segurança \"na\" nuvem é da responsabilidade do cliente. Isto abrange a gestão e proteção dos seus dados, incluindo a manutenção da integridade dos mesmos e a implementação de criptografia de dados do lado do cliente."
    },
    {
        "id": 90,
        "pergunta": "Qual oferta da AWS pode ser associada de forma nativa ao AWS WAF?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Network Load Balancer (NLB)",
            "Gateway Load Balancer (GWLB)",
            "AWS Lambda",
            "Application Load Balancer (ALB)"
        ],
        "explicacao": "O AWS WAF (Web Application Firewall) pode ser associado de forma nativa a recursos que servem tráfego web na camada 7, como o Application Load Balancer (ALB), o Amazon CloudFront, o Amazon API Gateway e o AWS AppSync."
    },
    {
        "id": 91,
        "pergunta": "Qual opção é um recurso fundamental do AWS Cloud Adoption Framework (AWS CAF) para a perspectiva das operações?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Identity and Access Management",
            "Gerenciamento de produtos",
            "Gerenciamento de desempenho e capacidade",
            "Gerenciamento de portfólio de aplicações"
        ],
        "explicacao": "No AWS Cloud Adoption Framework (CAF), a perspetiva de Operações concentra-se em operar, monitorizar e recuperar sistemas de TI, englobando áreas fundamentais como o 'Gerenciamento de desempenho e capacidade'."
    },
    {
        "id": 92,
        "pergunta": "Qual serviço ou recurso da AWS um desenvolvedor pode usar para acessar os serviços da AWS de forma programática?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "AWS Management Console",
            "AWS CodeDeploy",
            "AWS CodePipeline",
            "Kits de desenvolvimento de software (SDKs) da AWS"
        ],
        "explicacao": "Os Kits de desenvolvimento de software (SDKs) da AWS fornecem APIs específicas para diversas linguagens de programação, permitindo aos programadores interagirem e acederem de forma programática aos serviços da AWS diretamente a partir do seu código."
    },
    {
        "id": 93,
        "pergunta": "Qual recurso pode ser usado para proteger os buckets do Amazon S3 contra substituições ou exclusões acidentais?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Criptografia do lado do servidor",
            "Pontos de acesso do S3",
            "Políticas de ciclo de vida",
            "Versionamento de bucket"
        ],
        "explicacao": "O Versionamento do Amazon S3 permite manter várias variantes de um objeto no mesmo bucket, protegendo os dados contra eliminações e substituições acidentais, visto que possibilita a recuperação fácil de versões anteriores do ficheiro."
    },
    {
        "id": 94,
        "pergunta": "Qual plano do AWS Support inclui um Technical Account Manager (TAM) designado da AWS?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "AWS Basic Support",
            "Operações unificadas da AWS",
            "AWS Business Support+",
            "AWS Enterprise Support"
        ],
        "explicacao": "O plano Enterprise Support é o nível mais elevado e abrangente do AWS Support, sendo o único que inclui de forma proativa a designação de um Technical Account Manager (TAM) dedicado para coordenar e orientar a arquitetura e as operações do cliente."
    },
    {
        "id": 95,
        "pergunta": "Cite um exemplo de alta disponibilidade na nuvem AWS.",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "Garantir que uma aplicação permaneça acessível, mesmo que ocorra uma falha em um recurso",
            "Implantar em qualquer parte do mundo usando regiões AWS",
            "Disponibilizar qualquer serviço da AWS para uso pagando sob demanda",
            "Consultar o suporte técnico da AWS a qualquer hora do dia"
        ],
        "explicacao": "A alta disponibilidade (High Availability) refere-se à capacidade de um sistema permanecer acessível e operacional sem interrupções significativas, mesmo quando ocorrem falhas em componentes individuais."
    },
    {
        "id": 96,
        "pergunta": "Uma empresa precisa não só fazer consultas mas também pesquisar e analisar dados de log de forma interativa. Qual serviço ou recurso da AWS atende a esse requisito?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Amazon EventBridge",
            "Detecção de anomalias do Amazon CloudWatch",
            "Amazon CloudWatch Logs Insights",
            "Fluxos do Amazon CloudWatch Logs"
        ],
        "explicacao": "O Amazon CloudWatch Logs Insights permite pesquisar, analisar e visualizar interativamente dados de log armazenados no CloudWatch Logs utilizando uma linguagem de consulta dedicada."
    },
    {
        "id": 97,
        "pergunta": "Qual benefício da AWS permite que os usuários implantem uma infraestrutura de nuvem que consiste em várias regiões geográficas conectadas por uma rede com baixa latência, alta taxa de transferência e redundância?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Segurança",
            "Economias de escala",
            "Alcance global",
            "Elasticidade"
        ],
        "explicacao": "O 'Alcance global' (Global Reach) da AWS permite implantar recursos em múltiplas Regiões ao redor do mundo, interligadas por uma rede global altamente redundante e robusta."
    },
    {
        "id": 98,
        "pergunta": "Uma empresa está migrando uma aplicação para a AWS. Como parte da migração, a empresa precisa mover o banco de dados da aplicação para o Amazon RDS. Qual serviço da AWS a empresa deve usar para migrar o banco de dados?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "AWS Application Migration Service",
            "Migration Evaluator",
            "AWS Schema Conversion Tool (AWS SCT)",
            "AWS Database Migration Service (AWS DMS)"
        ],
        "explicacao": "O AWS Database Migration Service (DMS) é o serviço criado especificamente para migrar bases de dados relacionais e não relacionais para a AWS de forma segura, mantendo a base de dados de origem totalmente operacional durante a migração."
    },
    {
        "id": 99,
        "pergunta": "Qual serviço da AWS pode gerar uma descoberta quando informações de identificação pessoal (PII) são armazenadas em um bucket do Amazon S3?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "AWS Trusted Advisor",
            "Amazon GuardDuty",
            "Amazon Macie",
            "Amazon Inspector"
        ],
        "explicacao": "O Amazon Macie é um serviço de segurança e privacidade de dados que utiliza machine learning (aprendizagem automática) para descobrir, monitorizar e proteger dados confidenciais (como PII) armazenados no Amazon S3."
    },
    {
        "id": 100,
        "pergunta": "De acordo com o modelo de responsabilidade compartilhada da AWS, qual tarefa é de responsabilidade da AWS para as cargas de trabalho executadas no Amazon EC2?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "Atualizar o sistema operacional",
            "Atualizar o hardware físico",
            "Atualizar os dados do usuário",
            "Atualizar o mecanismo de banco de dados"
        ],
        "explicacao": "Para serviços de infraestrutura como o Amazon EC2, a AWS é responsável pela segurança 'da' nuvem, o que inclui a manutenção e atualização do hardware físico, das instalações e do hipervisor subjacente."
    },
    {
        "id": 101,
        "pergunta": "Uma empresa tem licenças de software existentes que deseja trazer para a AWS, mas o modelo de licenciamento exige o licenciamento de núcleos físicos. Como a empresa pode atender a esse requisito na nuvem AWS?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Comprar instâncias reservadas dedicadas.",
            "Iniciar uma instância do Amazon EC2 com tenancy padrão.",
            "Iniciar uma instância do Amazon EC2 em um host dedicado.",
            "Criar uma reserva de capacidade sob demanda."
        ],
        "explicacao": "Os Hosts Dedicados (Dedicated Hosts) do Amazon EC2 fornecem servidores físicos com capacidade totalmente dedicada ao cliente, permitindo a utilização de licenças de software vinculadas a soquetes, núcleos ou VMs (modelo Bring Your Own License - BYOL)."
    },
    {
        "id": 102,
        "pergunta": "Uma empresa planeja migrar para a nuvem AWS. Ela quer usar o AWS Cloud Adoption Framework (AWS CAF) para definir e acompanhar os resultados comerciais como parte de sua jornada de transformação na nuvem. Qual recurso de perspectiva de governança do AWS CAF atende a esses requisitos?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "Gerenciamento de benefícios",
            "Gerenciamento de portfólio de aplicações",
            "Gerenciamento de riscos",
            "Gerenciamento financeiro da nuvem"
        ],
        "explicacao": "No AWS CAF, a perspetiva de Governança inclui o 'Gerenciamento de benefícios', que se concentra em garantir que os resultados comerciais esperados da transformação digital sejam devidamente definidos, medidos e acompanhados."
    },
    {
        "id": 103,
        "pergunta": "Qual é a vantagem de migrar para a nuvem AWS em termos de melhorar o tempo de lançamento no mercado?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "Maior agilidade empresarial",
            "Capacidades de backup aprimoradas",
            "Velocidade de implantação reduzida",
            "Maior segurança para a aplicação"
        ],
        "explicacao": "A nuvem proporciona uma 'maior agilidade empresarial', permitindo às equipas provisionar e escalar infraestrutura rapidamente, acelerando a inovação e o tempo de lançamento de novos produtos no mercado (Time to Market)."
    },
    {
        "id": 104,
        "pergunta": "Uma empresa possui uma instância do Amazon EC2 que deve acessar o AWS Secrets Manager para recuperar credenciais. Qual identidade ou serviço é exigido pela instância do EC2 para realizar a tarefa?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Grupo do IAM",
            "Grupos de segurança",
            "Perfil do IAM",
            "Autenticação com multifator (MFA)"
        ],
        "explicacao": "A prática recomendada para conceder permissões a uma instância do EC2 para aceder a outros serviços (como o Secrets Manager) sem guardar credenciais permanentes é anexar-lhe um Perfil do IAM (IAM Role) com as políticas adequadas."
    },
    {
        "id": 105,
        "pergunta": "Quais das seguintes são características das regiões e zonas de disponibilidade da AWS? (Selecione DUAS)",
        "id_mult": true,
        "id_resposta": [
            2,
            4
        ],
        "alternativas": [
            "As regiões levam os serviços da AWS para instalações on-premises.",
            "Uma zona de disponibilidade contém várias regiões.",
            "As regiões estão localizadas em todo o mundo.",
            "As regiões estão a 100 km (60 milhas) umas das outras.",
            "As regiões consistem em várias zonas de disponibilidade."
        ],
        "explicacao": "Segundo a documentação da infraestrutura global da AWS, as Regiões são localizações físicas ao redor do mundo onde os data centers são agrupados. Cada Região da AWS consiste em múltiplas Zonas de Disponibilidade (AZs) isoladas e fisicamente separadas dentro de uma área geográfica."
    },
    {
        "id": 106,
        "pergunta": "Você está criando um aplicativo web de comércio eletrônico que escalará para centenas de milhares de usuários simultâneos. Qual tecnologia de banco de dados é mais adequada para manter o estado da sessão neste exemplo?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "Amazon Simple Storage Service (Amazon S3)",
            "Tabela de banco de dados NoSQL usando o Amazon DynamoDB",
            "Banco de dados relacional usando o Amazon Relational Database Service (Amazon RDS)",
            "Data warehouse usando o Amazon Redshift"
        ],
        "explicacao": "O Amazon DynamoDB é um banco de dados NoSQL de chave-valor que oferece latência de milissegundos de um dígito, sendo a escolha arquitetural ideal e mais comum para armazenar dados de estado de sessão em aplicações web de alta escala."
    },
    {
        "id": 107,
        "pergunta": "Você precisa encontrar um item em uma tabela do Amazon DynamoDB usando um atributo diferente da chave primária do item. Qual das seguintes operações você deve usar? Selecione a melhor resposta.",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "GET",
            "POST",
            "Consulta",
            "Verificação"
        ],
        "explicacao": "No DynamoDB, a operação 'Verificação' (Scan) lê todos os itens de uma tabela para procurar atributos específicos quando você não possui a chave primária ou um índice secundário configurado para a operação de 'Consulta' (Query)."
    },
    {
        "id": 108,
        "pergunta": "Qual serviço de nuvem AWS é mais adequado para o processamento analítico online (OLAP)? Selecione a melhor resposta.",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Amazon Simple Storage Service Glacier",
            "Amazon Relational Database Service (Amazon RDS)",
            "Amazon DynamoDB",
            "Amazon Redshift"
        ],
        "explicacao": "O Amazon Redshift é o serviço de data warehouse da AWS, projetado especificamente para consultas complexas e processamento analítico online (OLAP) em grandes volumes de dados."
    },
    {
        "id": 109,
        "pergunta": "No Amazon DynamoDB, um atributo é _______. Selecione a melhor resposta.",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "uma coleção de atributos",
            "um elemento de dados fundamental",
            "uma coleção de itens",
            "Nenhuma das alternativas",
            "Todas as respostas acima"
        ],
        "explicacao": "Em um banco de dados NoSQL como o DynamoDB, um 'atributo' representa um elemento de dados fundamental que não precisa ser quebrado ainda mais (semelhante a uma coluna ou campo em bancos relacionais)."
    },
    {
        "id": 110,
        "pergunta": "Ao criar uma tabela no Amazon DynamoDB, além do nome, você deve especificar a _______ da tabela. Selecione a melhor resposta.",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "chave primária",
            "chave de classificação",
            "índice secundário local",
            "índice secundário global"
        ],
        "explicacao": "Ao criar uma tabela no DynamoDB, é obrigatório definir uma chave primária (primary key) para identificar exclusivamente cada item da tabela. Índices secundários e chaves de classificação são opcionais dependendo da modelagem."
    },
    {
        "id": 111,
        "pergunta": "O _______ é até cinco vezes mais rápido que os bancos de dados MySQL padrão e três vezes mais rápido que os bancos de dados PostgreSQL padrão. Selecione a melhor resposta.",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Amazon DynamoDB",
            "Amazon Relational Database Service (Amazon RDS)",
            "Amazon Neptune",
            "Amazon Aurora",
            "Amazon Redshift"
        ],
        "explicacao": "Esta é a definição oficial da AWS para o Amazon Aurora: um banco de dados relacional compatível com MySQL e PostgreSQL, desenvolvido para a nuvem, que oferece até cinco vezes a performance do MySQL e três vezes a do PostgreSQL padrão."
    },
    {
        "id": 112,
        "pergunta": "Se você está desenvolvendo um aplicativo que exige um banco de dados com alta performance, escalabilidade rápida e flexibilidade no esquema do banco de dados, qual serviço você deve considerar? Selecione a melhor resposta.",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Amazon Relational Database Service (Amazon RDS)",
            "Amazon ElastiCache",
            "Amazon DynamoDB",
            "Amazon Redshift"
        ],
        "explicacao": "A flexibilidade no esquema (schema-less) combinada com escalabilidade rápida e alta performance são as características principais do Amazon DynamoDB, o serviço de banco de dados NoSQL gerenciado da AWS."
    },
    {
        "id": 113,
        "pergunta": "Verdadeiro ou falso? O Amazon Relational Database Service (Amazon RDS) corrige automaticamente o software do banco de dados e faz backup do banco de dados, armazenando os backups por um período de retenção definido pelo usuário e permitindo a recuperação point-in-time.",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "Falso",
            "Verdadeiro"
        ],
        "explicacao": "Verdadeiro. O Amazon RDS é um serviço totalmente gerenciado que automatiza tarefas administrativas demoradas, como provisionamento de hardware, configuração de banco de dados, aplicação de patches (correções) e backups automáticos com recuperação point-in-time."
    },
    {
        "id": 114,
        "pergunta": "Quais são os quatro planos de suporte oferecidos pelo AWS Support? Escolha quatro respostas.",
        "id_mult": true,
        "id_resposta": [
            1,
            2,
            3,
            4
        ],
        "alternativas": [
            "Individual",
            "Enterprise",
            "Business",
            "Desenvolvedor",
            "Basic",
            "Startup"
        ],
        "explicacao": "A AWS oferece quatro níveis principais de planos de suporte para atender a diferentes necessidades: Basic (gratuito para todos), Desenvolvedor, Business e Enterprise."
    },
    {
        "id": 115,
        "pergunta": "Quais são as características do Plano de Suporte ao Desenvolvedor? Selecione duas respostas.",
        "id_mult": true,
        "id_resposta": [
            2,
            4
        ],
        "alternativas": [
            "Contatos ilimitados podem abrir um caso",
            "Acesso 24 horas por dia, 7 dias por semana aos engenheiros de suporte na nuvem por e-mail, bate-papo",
            "Um contato primário pode abrir um caso",
            "Atribuído a um technical account manager (TAM)",
            "Acesso em horário comercial ao Cloud Support Associates via e-mail"
        ],
        "explicacao": "O Plano Developer permite que apenas um contato primário da conta abra casos de suporte técnico, e fornece acesso aos Cloud Support Associates por e-mail apenas durante o horário comercial local."
    },
    {
        "id": 116,
        "pergunta": "Qual das seguintes opções não está disponível no Plano de Suporte Business? Selecione a melhor resposta.",
        "id_mult": false,
        "id_resposta": 4,
        "alternativas": [
            "Acesso ao AWS Infrastructure Event Management",
            "Acesso aos engenheiros de suporte em nuvem para problemas técnicos",
            "Acesso ao Health Dashboard e a API AWS Health",
            "Acesso ao suporte de software de terceiros",
            "Acesso a uma análise do Well-Architected entregue pelos arquitetos de soluções da AWS"
        ],
        "explicacao": "Análises consultivas do Well-Architected Framework conduzidas por Arquitetos de Soluções da AWS (e acesso a um Technical Account Manager - TAM) são benefícios exclusivos do plano Enterprise. O plano Business possui os demais benefícios listados."
    },
    {
        "id": 117,
        "pergunta": "Qual dos níveis do AWS Support oferece suporte 24 horas por dia, 7 dias por semana por telefone ou bate-papo? Selecione duas respostas.",
        "id_mult": true,
        "id_resposta": [
            1,
            2
        ],
        "alternativas": [
            "Suporte ao Desenvolvedor",
            "Suporte Business",
            "Suporte Enterprise",
            "Suporte Basic"
        ],
        "explicacao": "O suporte 24/7 por telefone, web e chat (bate-papo) para engenheiros de suporte em nuvem começa a partir do plano Business e também está incluído no plano Enterprise. O plano Developer possui apenas suporte por e-mail em horário comercial."
    },
    {
        "id": 118,
        "pergunta": "A equipe de gerenciamento de TI da sua empresa está procurando uma ferramenta online para fornecer recomendações para economizar dinheiro, melhorar a disponibilidade e a performance do sistema e ajudar a reduzir as lacunas de segurança. Que ferramenta pode ajudar a equipe de gestão?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "AWS Trusted Advisor",
            "Detetive de nuvem",
            "AWS Config",
            "Gravador de configuração"
        ],
        "explicacao": "O AWS Trusted Advisor atua como um consultor em tempo real, fornecendo orientações e recomendações automáticas para ajudar a otimizar a infraestrutura da AWS em cinco categorias principais: custos, segurança, tolerância a falhas, performance e limites de serviço."
    },
    {
        "id": 119,
        "pergunta": "O AWS Support tem cinco níveis de gravidade diferentes para casos de suporte. Quais são elas? Selecione cinco respostas.",
        "id_mult": true,
        "id_resposta": [
            0,
            3,
            4,
            5,
            6
        ],
        "alternativas": [
            "Alta",
            "Sistema inativo",
            "Média",
            "Baixa",
            "Normal",
            "Urgente",
            "Crítico"
        ],
        "explicacao": "Os cinco níveis padrão de gravidade (Severity Levels) para classificação de casos no AWS Support são: Normal, Baixa (Low), Alta (High), Urgente (Urgent) e Crítico (Critical)."
    },
    {
        "id": 120,
        "pergunta": "Qual é o tempo de resposta de problemas urgentes para clientes do Plano de Suporte Enterprise? Selecione a melhor resposta.",
        "id_mult": false,
        "id_resposta": 4,
        "alternativas": [
            "12 horas ou menos",
            "1 hora ou menos",
            "24 horas ou menos",
            "4 horas ou menos",
            "15 minutos ou menos"
        ],
        "explicacao": "Para clientes do plano de Suporte Enterprise, problemas de gravidade extrema (como falhas em sistemas críticos para os negócios) possuem um SLA de tempo de resposta inicial de 15 minutos ou menos."
    },
    {
        "id": 121,
        "pergunta": "Um plano de suporte Basic permite quantos casos de suporte por mês? Selecione a melhor resposta.",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "10",
            "1",
            "0",
            "5"
        ],
        "explicacao": "O plano Basic Support (gratuito) fornece atendimento apenas para questões de faturamento e conta; ele permite 0 (zero) casos de suporte técnico por mês."
    },
    {
        "id": 122,
        "pergunta": "O que o AWS Trusted Advisor dirá a você? Selecione três respostas.",
        "id_mult": true,
        "id_resposta": [
            0,
            1,
            4
        ],
        "alternativas": [
            "Recursos implantados que não estão sendo usados, mas estão incorrendo em cobranças",
            "Se você está usando ou não tolerância a falhas",
            "Quando os security groups forem fechados",
            "Avaliar o risco de Implantação de uma única região",
            "Como está o desempenho da infraestrutura"
        ],
        "explicacao": "O AWS Trusted Advisor monitoriza o seu ambiente e informa-o sobre recursos subutilizados (Otimização de Custos), verifica as melhores práticas de alta disponibilidade (Tolerância a Falhas) e analisa a utilização e limites da sua capacidade (Performance)."
    },
    {
        "id": 123,
        "pergunta": "Uma equipa quer receber alertas quando os custos previstos da AWS ultrapassarem um limite mensal definido. Qual ferramenta deve configurar?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "AWS CloudTrail",
            "AWS Budgets",
            "Amazon Inspector",
            "AWS Artifact"
        ],
        "explicacao": "O AWS Budgets permite criar orçamentos e alertas baseados em gastos reais ou previstos, inclusive com limites mensais."
    },
    {
        "id": 124,
        "pergunta": "Qual das seguintes opções não é uma das quatro áreas do pilar Eficiência de performance do Well-Architected Framework? Selecione a melhor resposta.",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Monitoramento",
            "Seleção",
            "Tradeoffs",
            "Rastreabilidade"
        ],
        "explicacao": "A Rastreabilidade (Traceability) não pertence à Eficiência de Performance; ela é, na verdade, um dos princípios fundamentais de design do pilar de Segurança do Well-Architected Framework."
    },
    {
        "id": 125,
        "pergunta": "Qual não é uma característica do Amazon EC2 Auto Scaling? Selecione a melhor resposta.",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "Envia tráfego para instâncias íntegras.",
            "Responde à alteração das condições adicionando ou encerrando instâncias do Amazon Elastic Compute Cloud (Amazon EC2)",
            "Executa instâncias de uma imagem de máquina da Amazon (AMI) especificada",
            "Impõe um número mínimo de instâncias em execução do Amazon Elastic Compute Cloud (Amazon EC2)"
        ],
        "explicacao": "A funcionalidade de monitorizar o estado (health checks) e 'enviar tráfego' ativamente apenas para as instâncias íntegras é responsabilidade do serviço de balanceamento de carga (Elastic Load Balancing), e não do serviço de Auto Scaling (que se encarrega de criar/destruir as máquinas)."
    },
    {
        "id": 126,
        "pergunta": "Quais opções ajudarão a aumentar a disponibilidade de um conjunto de servidores web? Selecione duas respostas.",
        "id_mult": true,
        "id_resposta": [
            0,
            2
        ],
        "alternativas": [
            "Inicie a instância do servidor web em várias Zonas de Disponibilidade.",
            "Implante as instâncias em uma Amazon Virtual Private Cloud (Amazon VPC).",
            "Aproveite o scaling para se recuperar de instâncias com falha.",
            "Usar o Amazon CloudFront para fornecer conteúdo a usuários finais com baixa latência.",
            "Adicionar mais CPU e RAM em cada instância."
        ],
        "explicacao": "Para aumentar a disponibilidade arquitetural de servidores web, recomenda-se implantar a carga de trabalho através de várias Zonas de Disponibilidade (Multi-AZ) e utilizar o Auto Scaling para substituir e recuperar instâncias automaticamente caso elas falhem."
    },
    {
        "id": 127,
        "pergunta": "Quais são os princípios de design recomendados ao se considerar a eficiência de performance? Selecione duas respostas.",
        "id_mult": true,
        "id_resposta": [
            2,
            4
        ],
        "alternativas": [
            "Ativar a rastreabilidade",
            "Promover a visibilidade de gastos",
            "Usar arquiteturas sem servidor",
            "Equiparar a oferta com a demanda",
            "Democratizar tecnologias avançadas"
        ],
        "explicacao": "Dois dos princípios fundamentais do pilar de Eficiência de Performance são a utilização de arquiteturas sem servidor (para remover a sobrecarga operacional) e a democratização de tecnologias avançadas (consumindo tecnologias como serviços geridos em vez de as administrar)."
    },
    {
        "id": 128,
        "pergunta": "Qual oferta da AWS permite que os clientes encontrem, comprem e comecem imediatamente a usar soluções de software em seu ambiente AWS? Selecione a melhor resposta.",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "AWS Database Migration Service (AWS DMS)",
            "AWS SDK",
            "AWS Marketplace",
            "AWS Storage Gateway"
        ],
        "explicacao": "O AWS Marketplace é um catálogo digital que hospeda milhares de listagens de software (de fabricantes independentes e parceiros), facilitando aos clientes encontrar, testar, comprar e implantar rapidamente aplicações e serviços nas suas contas AWS."
    },
    {
        "id": 129,
        "pergunta": "Em um data center físico, a segurança geralmente está concentrada em que área? Selecione a melhor resposta.",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Nas Zonas de Disponibilidade mais próximas",
            "Na região mais próxima",
            "Apenas no perímetro",
            "Em um local de borda"
        ],
        "explicacao": "Em infraestruturas de TI locais clássicas (data centers físicos on-premises), o modelo de segurança baseia-se tradicionalmente na proteção focada quase inteiramente 'no perímetro' da rede, contrariando o modelo de nuvem que promove a proteção simultânea em todas as camadas (Zero Trust)."
    },
    {
        "id": 130,
        "pergunta": "Para exibir todas as categorias de metadados de instância de uma instância em execução, qual URL você deve usar? Selecione a melhor resposta.",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "https://245.196.245.196/latest/meta-data/",
            "https://196.245.196.245/latest/meta-data/",
            "https://169.254.169.254/latest/meta-data/",
            "https://254.169.254.169/latest/meta-data/"
        ],
        "explicacao": "O endereço IP estático 169.254.169.254 é o endpoint de link-local padrão utilizado pelas instâncias do Amazon EC2 para aceder ao serviço de metadados da instância (IMDS)."
    },
    {
        "id": 131,
        "pergunta": "O que é definido como a capacidade de um sistema permanecer operacional, mesmo que alguns dos componentes desse sistema falhem? Selecione a melhor resposta.",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Failovers de DNS",
            "Alta disponibilidade",
            "Alta durabilidade",
            "Tolerância a falhas"
        ],
        "explicacao": "A tolerância a falhas (Fault Tolerance) é a capacidade de um sistema continuar a operar sem interrupções mesmo quando um ou mais dos seus componentes falham."
    },
    {
        "id": 132,
        "pergunta": "Qual melhor descreve um sistema que está sempre disponível, sem a necessidade de intervenção humana? Selecione a melhor resposta.",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Tolerante a falhas",
            "Elástico",
            "Dimensionável",
            "Alta disponibilidade"
        ],
        "explicacao": "Sistemas de alta disponibilidade (High Availability) são projetados para operar de forma contínua e acessível por longos períodos, mitigando interrupções sem necessitar de intervenção humana manual."
    },
    {
        "id": 133,
        "pergunta": "Quais das seguintes ferramentas da AWS ajudam seu aplicativo a aumentar ou reduzir a escala de acordo com a demanda? Selecione duas respostas.",
        "id_mult": true,
        "id_resposta": [
            0,
            1
        ],
        "alternativas": [
            "Scaling",
            "Elastic Load Balancing",
            "Zonas de Disponibilidade automáticas",
            "AWS CloudFormation",
            "Balanceamento de carga ágil"
        ],
        "explicacao": "O Amazon EC2 Auto Scaling (Scaling) adiciona ou remove instâncias automaticamente conforme a procura, enquanto o Elastic Load Balancing distribui o tráfego recebido por essa quantidade dinâmica de instâncias, trabalhando em conjunto para garantir a elasticidade do sistema."
    },
    {
        "id": 134,
        "pergunta": "Qual serviço você usaria para enviar alertas baseados em alarmes do Amazon CloudWatch? Selecione a melhor resposta.",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "AWS CloudTrail",
            "AWS Trusted Advisor",
            "Amazon Route 53",
            "Amazon Simple Notification Service (Amazon SNS)"
        ],
        "explicacao": "O Amazon SNS é o serviço de mensagens pub/sub da AWS. O CloudWatch utiliza nativamente o SNS para acionar notificações (como e-mails ou SMS) de forma automatizada quando um alarme muda de estado."
    },
    {
        "id": 135,
        "pergunta": "Qual das opções a seguir deve ser configurada em um balanceador de carga do Elastic Load Balancing para aceitar tráfego de entrada?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "Uma porta",
            "Um listener",
            "Uma Instância",
            "Uma interface de rede"
        ],
        "explicacao": "Um 'listener' (ouvinte) é um processo que verifica solicitações de conexão utilizando o protocolo e a porta que configurou, sendo essencial para que o balanceador de carga consiga aceitar e encaminhar o tráfego de entrada."
    },
    {
        "id": 136,
        "pergunta": "Ao definir um Amazon EC2 Launch Template para um Auto Scaling group, quais três elementos podem ser especificados no modelo? Selecione três respostas.",
        "id_mult": true,
        "id_resposta": [
            1,
            3,
            4
        ],
        "alternativas": [
            "Nome de domínio registrado no Route 53",
            "ID da AMI",
            "Política de retenção de objetos S3",
            "Tipo de instância EC2",
            "Par de chaves EC2 (key pair)"
        ],
        "explicacao": "O EC2 Launch Template pode conter a AMI, o tipo de instância e um par de chaves, além de outras configurações de lançamento. O key pair é opcional; a questão pergunta o que pode ser especificado, e não requisitos mínimos."
    },
    {
        "id": 137,
        "pergunta": "Por quanto tempo o Amazon CloudWatch mantém os dados de métrica? Selecione a melhor resposta.",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "12 meses",
            "15 meses",
            "1 mês",
            "2 semanas",
            "24 meses"
        ],
        "explicacao": "Por predefinição, o Amazon CloudWatch armazena e retém os dados de métricas (com diferentes resoluções que vão diminuindo ao longo do tempo) por um período máximo de 15 meses."
    },
    {
        "id": 138,
        "pergunta": "O Amazon CloudWatch oferece suporte a quais tipos de planos de monitoramento? Selecione duas respostas.",
        "id_mult": true,
        "id_resposta": [
            1,
            2
        ],
        "alternativas": [
            "Monitoramento ad hoc, que tem um custo adicional",
            "Monitoramento básico, que é gratuito",
            "Monitoramento detalhado, que tem um custo adicional",
            "Monitoramento detalhado, que é gratuito",
            "Monitoramento básico, que tem um custo adicional"
        ],
        "explicacao": "Para instâncias do EC2, o CloudWatch oferece o 'Monitoramento básico' (métricas enviadas a cada 5 minutos), que está incluído gratuitamente, e o 'Monitoramento detalhado' (métricas a cada 1 minuto), que incorre em custos adicionais."
    },
    {
        "id": 139,
        "pergunta": "Quais três protocolos podem ser utilizados em verificações de integridade de target groups de um Network Load Balancer? Selecione três respostas.",
        "id_mult": true,
        "id_resposta": [
            1,
            3,
            4
        ],
        "alternativas": [
            "ICMP ping",
            "HTTP",
            "SSH",
            "HTTPS",
            "TCP"
        ],
        "explicacao": "O Network Load Balancer oferece verificações de integridade TCP, HTTP e HTTPS. ICMP ping e SSH não são protocolos configuráveis como health checks de target group do NLB."
    },
    {
        "id": 140,
        "pergunta": "Quais são os três tipos de balanceadores de carga oferecidos pelo Amazon Elastic Load Balancing?",
        "id_mult": true,
        "id_resposta": [
            1,
            2,
            4
        ],
        "alternativas": [
            "Scaling Load Balancer",
            "Application Load Balancer",
            "Network Load Balancer",
            "Internet Load Balancer",
            "Balanceador de carga clássica",
            "Compute Load Balancer"
        ],
        "explicacao": "O portefólio tradicional do Amazon Elastic Load Balancing inclui o Application Load Balancer (orientado à Camada 7), o Network Load Balancer (orientado à Camada 4) e o Classic Load Balancer (Balanceador de carga clássico - utilizado em gerações mais antigas)."
    },
    {
        "id": 141,
        "pergunta": "Uma empresa precisa baixar relatórios de segurança e certificações de conformidade da AWS (como ISO, PCI e SOC) para apresentar a seus auditores. Qual serviço fornece acesso a esses documentos?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "AWS Artifact",
            "AWS Trusted Advisor",
            "AWS Security Hub",
            "AWS Audit Manager"
        ],
        "explicacao": "O AWS Artifact é o portal central da AWS para acesso sob demanda a relatórios de conformidade e segurança da AWS, além de acordos online."
    },
    {
        "id": 142,
        "pergunta": "Qual serviço sem servidor da AWS permite que um analista de dados consulte dados diretamente armazenados no Amazon S3 usando SQL padrão sem precisar provisionar infraestrutura?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "Amazon RDS",
            "Amazon Athena",
            "Amazon Redshift",
            "Amazon DynamoDB"
        ],
        "explicacao": "O Amazon Athena é um serviço de consultas interativas sem servidor que facilita a análise de dados no Amazon S3 usando SQL padrão, pagando apenas pelas consultas executadas."
    },
    {
        "id": 143,
        "pergunta": "Um hospital precisa transferir 80 Terabytes de dados históricos de pacientes do seu data center local para a AWS. A conexão de internet do hospital é lenta e a transferência levaria meses. Qual serviço a AWS recomenda para essa migração inicial?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "AWS Direct Connect",
            "AWS Storage Gateway",
            "Família AWS Snow (Snowball Edge)",
            "AWS DataSync"
        ],
        "explicacao": "A família AWS Snow (como o AWS Snowball) é um serviço de transporte de dados em petabytes que usa dispositivos físicos seguros para mover grandes volumes de dados para dentro e para fora da AWS, resolvendo problemas de redes lentas."
    },
    {
        "id": 144,
        "pergunta": "Qual serviço da AWS fornece recursos gerenciados de autenticação, autorização e gerenciamento de usuários para aplicativos web e móveis, permitindo login via provedores sociais como Google e Facebook?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "AWS IAM",
            "AWS Single Sign-On (AWS IAM Identity Center)",
            "AWS Directory Service",
            "Amazon Cognito"
        ],
        "explicacao": "O Amazon Cognito simplifica a adição de controle de acesso e cadastro/login de usuários (identity management) em aplicativos voltados para o cliente (web e mobile), suportando provedores de identidade externos."
    },
    {
        "id": 145,
        "pergunta": "Um líder financeiro quer definir alertas personalizados que enviem um e-mail automaticamente se os custos mensais da AWS ultrapassarem US$ 1.000. Qual ferramenta atende a esse requisito?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Pricing Calculator",
            "Amazon CloudWatch Billing Alarms"
        ],
        "explicacao": "O AWS Budgets permite que você defina orçamentos personalizados e configure alertas automáticos quando os seus custos ou uso excedem (ou estão previstos para exceder) o limite que você definiu."
    },
    {
        "id": 146,
        "pergunta": "Qual serviço estende a infraestrutura, os serviços, as APIs e as ferramentas nativas da AWS de forma física para o data center local do cliente, criando uma verdadeira nuvem híbrida?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "AWS Outposts",
            "AWS Local Zones",
            "AWS Wavelength",
            "AWS VPN"
        ],
        "explicacao": "O AWS Outposts é um serviço totalmente gerenciado que leva racks físicos com infraestrutura da AWS para o data center on-premises do cliente, proporcionando uma experiência híbrida consistente."
    },
    {
        "id": 147,
        "pergunta": "Uma empresa está criando um aplicativo global e precisa melhorar a disponibilidade e o desempenho encaminhando o tráfego dos usuários para a região ideal da AWS através da infraestrutura de rede global da própria AWS. Qual serviço ajuda com isso?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Amazon CloudFront",
            "Amazon API Gateway",
            "AWS Global Accelerator",
            "AWS Transit Gateway"
        ],
        "explicacao": "O AWS Global Accelerator usa a rede global de alta disponibilidade da AWS para direcionar o tráfego de usuários ao endpoint ideal de forma inteligente, reduzindo a latência e aumentando a resiliência."
    },
    {
        "id": 148,
        "pergunta": "Qual serviço da AWS permite que desenvolvedores e cientistas de dados criem, treinem e implantem rapidamente modelos de machine learning em escala?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Amazon Lex",
            "Amazon Comprehend",
            "Amazon Rekognition",
            "Amazon SageMaker"
        ],
        "explicacao": "O Amazon SageMaker é a plataforma central de Machine Learning da AWS. Ele fornece um ambiente totalmente gerenciado para construir, treinar e fazer o deploy de modelos preditivos rapidamente."
    },
    {
        "id": 149,
        "pergunta": "Qual serviço de segurança da AWS fornece detecção inteligente de ameaças usando machine learning para monitorar continuamente atividades maliciosas ou comportamentos não autorizados nas suas contas da AWS?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "Amazon GuardDuty",
            "AWS WAF",
            "AWS Shield",
            "AWS KMS"
        ],
        "explicacao": "O Amazon GuardDuty é um serviço de detecção de ameaças (Threat Detection) contínuo que usa machine learning, detecção de anomalias e inteligência de ameaças para proteger suas contas da AWS."
    },
    {
        "id": 150,
        "pergunta": "Quais ferramentas ajudam os clientes a estimar os custos da AWS antes de provisionar recursos? (Selecione DUAS)",
        "id_mult": true,
        "id_resposta": [
            1,
            3
        ],
        "alternativas": [
            "AWS Cost Explorer",
            "AWS Pricing Calculator",
            "AWS Budgets",
            "Migration Evaluator",
            "AWS Cost and Usage Report"
        ],
        "explicacao": "Para prever custos antes do provisionamento, usa-se o AWS Pricing Calculator (para arquiteturas na AWS) e o Migration Evaluator (para comparar custos entre o ambiente local atual e a AWS)."
    },
    {
        "id": 151,
        "pergunta": "Qual pilar do AWS Well-Architected Framework se concentra em minimizar os impactos ambientais da execução de cargas de trabalho na nuvem?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "Sustentabilidade",
            "Otimização de Custos",
            "Excelência Operacional",
            "Confiabilidade"
        ],
        "explicacao": "O pilar de Sustentabilidade foca em minimizar o impacto ambiental, reduzindo o consumo de energia e aumentando a eficiência na utilização dos recursos computacionais na nuvem."
    },
    {
        "id": 152,
        "pergunta": "Qual serviço gerenciado da AWS é usado para criar e controlar as chaves de criptografia usadas para proteger seus dados?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Amazon Macie",
            "AWS Secrets Manager",
            "AWS Key Management Service (KMS)",
            "AWS Certificate Manager (ACM)"
        ],
        "explicacao": "O AWS KMS (Key Management Service) é o serviço centralizado usado para criar, gerenciar e controlar o uso de chaves de criptografia para proteger os dados armazenados nos serviços da AWS e nas suas aplicações."
    },
    {
        "id": 153,
        "pergunta": "Qual modelo de precificação da AWS oferece preços baixos em troca do compromisso de uso de uma quantidade consistente de poder computacional (medido em dólares por hora) por um período de 1 ou 3 anos?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Instâncias Spot",
            "Instâncias Dedicadas",
            "Instâncias Sob Demanda",
            "Savings Plans"
        ],
        "explicacao": "Os Savings Plans oferecem economia significativa (em comparação com Sob Demanda) em troca do compromisso com um gasto específico (ex: $10/hora) de computação contínua durante 1 ou 3 anos, oferecendo mais flexibilidade do que as Instâncias Reservadas."
    },
    {
        "id": 154,
        "pergunta": "A capacidade de um aplicativo de escalar recursos para cima e para baixo automaticamente com base na demanda flutuante é um exemplo de qual conceito de nuvem?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "Tolerância a falhas",
            "Elasticidade",
            "Alta disponibilidade",
            "Agilidade"
        ],
        "explicacao": "A Elasticidade é a capacidade de um sistema de aumentar (scale up/out) ou diminuir (scale down/in) automaticamente os recursos computacionais para corresponder exatamente à demanda atual, pagando apenas pelo que for usado."
    },
    {
        "id": 155,
        "pergunta": "Uma instância EC2 em uma sub-rede privada precisa baixar atualizações da internet, mas não deve aceitar conexões de entrada da internet. Qual componente da VPC permite isso?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "Internet Gateway",
            "NAT Gateway",
            "Egress-Only Internet Gateway",
            "VPC Peering"
        ],
        "explicacao": "O NAT Gateway (Network Address Translation) permite que instâncias em uma sub-rede privada iniciem tráfego de saída para a Internet (para baixar atualizações, por exemplo), mas impede que a Internet inicie conexões de entrada para essas instâncias."
    },
    {
        "id": 156,
        "pergunta": "Qual serviço de banco de dados da AWS é totalmente gerenciado, escalável, altamente disponível e construído especificamente para ser compatível com cargas de trabalho do MongoDB?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "Amazon Neptune",
            "Amazon DocumentDB",
            "Amazon Aurora",
            "Amazon DynamoDB"
        ],
        "explicacao": "O Amazon DocumentDB (com compatibilidade com MongoDB) é um serviço de banco de dados de documentos rápido, escalável e altamente disponível, que oferece suporte nativo às cargas de trabalho baseadas em documentos do MongoDB."
    },
    {
        "id": 157,
        "pergunta": "Qual serviço de segurança da AWS avalia automaticamente as aplicações em busca de vulnerabilidades de software e exposições não intencionais na rede?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "AWS WAF",
            "AWS Shield",
            "Amazon Inspector",
            "Amazon GuardDuty"
        ],
        "explicacao": "O Amazon Inspector é um serviço automatizado de avaliação de vulnerabilidades que testa continuamente a rede e os recursos computacionais (como EC2 e contêineres) em busca de exposições e vulnerabilidades de software conhecidas (CVEs)."
    },
    {
        "id": 158,
        "pergunta": "Qual serviço fornece um ambiente de shell baseado em navegador, pré-autenticado e pré-configurado com as principais ferramentas de linha de comando da AWS?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "AWS CloudShell",
            "AWS Cloud9",
            "AWS CodeBuild",
            "AWS Systems Manager"
        ],
        "explicacao": "O AWS CloudShell é um shell seguro pré-autenticado, acessível diretamente a partir do Console de Gerenciamento da AWS, que já vem com a AWS CLI e outras ferramentas pré-instaladas, dispensando a necessidade de configurar credenciais locais."
    },
    {
        "id": 159,
        "pergunta": "Uma empresa pretende monitorar o andamento da migração de aplicações e servidores para a AWS num painel central. Qual serviço fornece essa visão agregada?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "AWS Database Migration Service",
            "AWS Migration Hub",
            "AWS DataSync",
            "Amazon Inspector"
        ],
        "explicacao": "AWS Migration Hub fornece uma visão centralizada do progresso de migrações para a AWS. Não confundir monitoramento de progresso com descoberta de inventário local."
    },
    {
        "id": 160,
        "pergunta": "Qual plano de suporte da AWS inclui acesso a uma equipe de Suporte Concierge para fornecer assistência no faturamento e gerenciamento de contas?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Basic",
            "Developer",
            "Enterprise",
            "Business"
        ],
        "explicacao": "A equipe de Suporte Concierge da AWS (AWS Concierge Support) é um benefício exclusivo dos planos Enterprise e Enterprise On-Ramp, oferecendo especialistas dedicados a ajudar com faturamento e gestão complexa de contas."
    },
    {
        "id": 161,
        "pergunta": "Uma empresa tem centenas de nuvens privadas virtuais (VPCs) e redes on-premises. Qual serviço simplifica a conexão entre todas essas redes, atuando como um roteador de nuvem central?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "VPC Peering",
            "AWS Direct Connect",
            "AWS Transit Gateway",
            "Amazon API Gateway"
        ],
        "explicacao": "O AWS Transit Gateway simplifica a topologia de rede atuando como um hub de trânsito em nuvem que interliga de forma centralizada milhares de VPCs e redes locais (on-premises), eliminando a necessidade de conexões de peering ponto a ponto complexas."
    },
    {
        "id": 162,
        "pergunta": "Qual serviço fornece um sistema de arquivos elástico, sem servidor e do tipo 'configure e esqueça' que pode ser montado simultaneamente por várias instâncias EC2 baseadas em Linux?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Amazon EBS",
            "Amazon S3",
            "Amazon EFS",
            "Amazon FSx para Windows"
        ],
        "explicacao": "O Amazon EFS (Elastic File System) fornece armazenamento de arquivos compartilhado, elástico e totalmente gerenciado para ser usado com serviços de nuvem da AWS e recursos on-premises, construído para escalar sob demanda e compatível com Linux."
    },
    {
        "id": 163,
        "pergunta": "Uma empresa permite que usuários ao redor do mundo façam upload de arquivos grandes para um bucket central do S3. Qual recurso pode ser ativado para acelerar esses uploads em longas distâncias?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Amazon CloudFront",
            "AWS Global Accelerator",
            "Amazon S3 Transfer Acceleration",
            "AWS Direct Connect"
        ],
        "explicacao": "O Amazon S3 Transfer Acceleration utiliza os pontos de presença distribuídos globalmente do Amazon CloudFront para acelerar as transferências de ficheiros em longas distâncias entre os clientes e o bucket do S3."
    },
    {
        "id": 164,
        "pergunta": "Uma equipe de desenvolvimento precisa construir uma arquitetura orientada a eventos que conecte aplicativos da empresa a aplicativos SaaS de terceiros. Qual serviço atua como um barramento de eventos sem servidor?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Amazon SQS",
            "Amazon SNS",
            "AWS Step Functions",
            "Amazon EventBridge"
        ],
        "explicacao": "O Amazon EventBridge é um barramento de eventos sem servidor que facilita a criação de aplicações orientadas a eventos em escala, utilizando eventos gerados pelas suas aplicações, aplicações integradas de Software como Serviço (SaaS) e serviços da AWS."
    },
    {
        "id": 165,
        "pergunta": "Qual serviço da AWS foi criado especificamente para armazenar, gerenciar e, mais importante, rotacionar automaticamente senhas de bancos de dados e chaves de API?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "AWS KMS",
            "AWS Systems Manager Parameter Store",
            "AWS Secrets Manager",
            "AWS IAM"
        ],
        "explicacao": "O AWS Secrets Manager ajuda a proteger os segredos necessários para aceder a aplicações, serviços e recursos de TI, e possui a capacidade nativa de rotacionar automaticamente credenciais de bases de dados de forma segura sem interromper as aplicações."
    },
    {
        "id": 166,
        "pergunta": "Uma empresa precisa de uma conexão de rede dedicada, privada e de alta velocidade entre seu data center corporativo e a AWS, contornando completamente a internet pública. Qual serviço atende a essa necessidade?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "AWS VPN",
            "AWS Direct Connect",
            "AWS Transit Gateway",
            "AWS Outposts"
        ],
        "explicacao": "O AWS Direct Connect estabelece uma conexão de rede física dedicada do seu data center local para a AWS. Ao contrário de uma VPN, esta conexão é privada, oferece uma largura de banda mais consistente e não viaja através da Internet pública."
    },
    {
        "id": 167,
        "pergunta": "Qual serviço de Inteligência Artificial da AWS permite converter texto em falas com vozes humanas incrivelmente realistas em vários idiomas?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Amazon Transcribe",
            "Amazon Lex",
            "Amazon Comprehend",
            "Amazon Polly"
        ],
        "explicacao": "O Amazon Polly é um serviço que transforma texto em fala (Text-to-Speech) de forma realista, permitindo que crie aplicações que falam e construa categorias inteiramente novas de produtos baseados na fala."
    },
    {
        "id": 168,
        "pergunta": "Os desenvolvedores estão tentando rastrear e depurar gargalos de desempenho em um aplicativo de microsserviços distribuído. Qual serviço da AWS os ajuda a analisar essas solicitações?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "AWS CloudTrail",
            "Amazon CloudWatch",
            "AWS X-Ray",
            "AWS Trusted Advisor"
        ],
        "explicacao": "O AWS X-Ray ajuda os programadores a analisar e depurar aplicações distribuídas baseadas em microsserviços em produção, rastreando os pedidos de ponta a ponta à medida que viajam através da arquitetura subjacente."
    },
    {
        "id": 169,
        "pergunta": "Qual serviço leva os serviços de computação e armazenamento da AWS para a borda das redes de telecomunicações, fornecendo latência ultrabaixa para dispositivos móveis operando em redes 5G?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "AWS Local Zones",
            "AWS Wavelength",
            "AWS Outposts",
            "Amazon CloudFront"
        ],
        "explicacao": "O AWS Wavelength incorpora serviços de computação e armazenamento da AWS nos data centers dos provedores de telecomunicações no limite (edge) das redes 5G, minimizando a latência para utilizadores de dispositivos móveis."
    },
    {
        "id": 170,
        "pergunta": "Em arquiteturas de nuvem, qual conceito se refere a projetar componentes de forma independente para que, se um falhar, os outros continuem a funcionar perfeitamente?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "Desacoplamento (Decoupling)",
            "Elasticidade",
            "Escalonamento vertical",
            "Monolítico"
        ],
        "explicacao": "O Desacoplamento (Decoupling) é um princípio fundamental onde os componentes de um sistema (como microsserviços) operam de forma independente. Serviços como o Amazon SQS são frequentemente usados para desacoplar as aplicações, impedindo que a falha de um serviço afete os demais."
    },
    {
        "id": 171,
        "pergunta": "Qual ferramenta a AWS fornece para ajudar a rever a arquitetura de uma aplicação e compará-la com as melhores práticas recomendadas da AWS?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "AWS Trusted Advisor",
            "AWS Well-Architected Tool",
            "AWS Config",
            "Amazon Inspector"
        ],
        "explicacao": "A AWS Well-Architected Tool ajuda a rever o estado das suas cargas de trabalho e compara-as com as mais recentes práticas de arquitetura da AWS, gerando um plano de ação estruturado para melhorias."
    },
    {
        "id": 172,
        "pergunta": "Uma organização precisa de uma conexão de rede privada dedicada, com largura de banda consistente, para transferir grandes volumes de dados dos seus data centers para a AWS. Qual serviço deve considerar?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Amazon CloudFront",
            "AWS DataSync",
            "AWS Outposts",
            "AWS Direct Connect"
        ],
        "explicacao": "AWS Direct Connect estabelece conectividade dedicada de rede com a AWS e pode sustentar grandes transferências online. A capacidade e o prazo de transferência dependem da largura de banda e do volume de dados."
    },
    {
        "id": 173,
        "pergunta": "Ao migrar para a Nuvem AWS, as empresas deixam de pagar antecipadamente por infraestrutura física e passam a pagar apenas pelos recursos consumidos. Como se descreve a troca destes modelos de custos?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "Substituir despesas de capital (CapEx) por despesas operacionais variáveis (OpEx).",
            "Substituir despesas operacionais variáveis (OpEx) por despesas de capital (CapEx).",
            "Beneficiar das economias de escala.",
            "Eliminar a necessidade de planeamento de capacidade."
        ],
        "explicacao": "A computação em nuvem permite substituir despesas de capital (CapEx - investimentos fixos em datacenters e servidores físicos) por despesas operacionais ou variáveis (OpEx - pagar apenas pela computação efetivamente consumida)."
    },
    {
        "id": 174,
        "pergunta": "Qual serviço utiliza machine learning para monitorizar continuamente os custos e o uso da sua conta da AWS, de modo a detetar gastos incomuns e evitar surpresas na fatura?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "AWS Budgets",
            "AWS Cost Explorer",
            "AWS Cost Anomaly Detection",
            "AWS Pricing Calculator"
        ],
        "explicacao": "O AWS Cost Anomaly Detection (Deteção de Anomalias de Custo) utiliza modelos de machine learning avançado para identificar gastos anómalos de forma precoce e emitir alertas, reduzindo o risco de surpresas no faturamento."
    },
    {
        "id": 175,
        "pergunta": "Um administrador precisa aplicar a mesma política de permissões a dezenas de novos utilizadores. Qual é a forma mais eficiente e recomendada de gerir estas permissões no AWS IAM?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "Anexar a mesma política diretamente e de forma individual a cada um dos utilizadores.",
            "Adicionar os utilizadores a um Grupo do IAM e anexar a política a esse grupo.",
            "Criar uma Função (Role) do IAM e pedir aos utilizadores que a assumam sempre que fizerem login.",
            "Utilizar as Políticas Gerenciadas pela AWS para ignorar as permissões de utilizador."
        ],
        "explicacao": "Em vez de anexar políticas individualmente a cada utilizador, a prática recomendada do IAM é colocar os utilizadores em Grupos do IAM com base nas suas funções de trabalho e atribuir as permissões diretamente a esses grupos."
    },
    {
        "id": 176,
        "pergunta": "Qual serviço em nuvem é uma plataforma de cluster gerida que simplifica a execução de frameworks de big data, como o Apache Hadoop e o Apache Spark, para processar grandes quantidades de dados?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "Amazon EMR",
            "Amazon Athena",
            "AWS Glue",
            "Amazon Redshift"
        ],
        "explicacao": "O Amazon EMR (Elastic MapReduce) é uma solução líder para o processamento de big data em nuvem que facilita a configuração e a execução rápida e económica de frameworks como Apache Spark, Hadoop e Presto à escala."
    },
    {
        "id": 177,
        "pergunta": "Uma empresa exige que as suas chaves de encriptação sejam geradas e geridas em módulos de segurança de hardware (HSMs) dedicados e de inquilino único (single-tenant) para cumprir rigorosas normas regulamentares. Qual serviço deve ser utilizado?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "AWS KMS",
            "AWS Secrets Manager",
            "AWS Certificate Manager",
            "AWS CloudHSM"
        ],
        "explicacao": "Ao contrário do AWS KMS (que é um serviço partilhado/multi-tenant), o AWS CloudHSM fornece instâncias de módulos de segurança de hardware dedicados, baseados em nuvem e de controlo exclusivo do cliente, garantindo total conformidade com normas regulamentares estritas."
    },
    {
        "id": 178,
        "pergunta": "Qual política de roteamento do Amazon Route 53 permite encaminhar o tráfego de utilizadores com base na sua localização física (como país, continente ou estado) para fornecer conteúdo regionalizado?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "Roteamento de latência",
            "Roteamento de geolocalização",
            "Roteamento ponderado",
            "Roteamento de failover"
        ],
        "explicacao": "A política de roteamento de geolocalização (Geolocation routing) do Route 53 permite encaminhar o tráfego com base na localização geográfica real dos utilizadores finais, sendo ideal para regionalizar conteúdo e cumprir requisitos locais de distribuição."
    },
    {
        "id": 179,
        "pergunta": "Um programador quer orquestrar e coordenar de forma visual múltiplos serviços da AWS num fluxo de trabalho sem servidor (serverless). Qual serviço é ideal para esta tarefa?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "AWS Lambda",
            "Amazon EventBridge",
            "AWS Step Functions",
            "Amazon SQS"
        ],
        "explicacao": "O AWS Step Functions fornece fluxos de trabalho visuais baseados no estado (State Machines) para orquestrar e coordenar diferentes serviços da AWS e microserviços de forma fiável, suportando processos de longa duração."
    },
    {
        "id": 180,
        "pergunta": "Qual mecanismo de segurança atua no nível da instância como um firewall virtual para controlar estritamente o tráfego de entrada e saída associado diretamente a uma ou mais instâncias do EC2?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "ACL de rede (Network ACL)",
            "AWS WAF",
            "Grupo de segurança (Security Group)",
            "AWS Shield"
        ],
        "explicacao": "Os Grupos de Segurança (Security Groups) atuam diretamente ao nível da instância (e não ao nível da sub-rede como as ACLs de rede) como firewalls virtuais com estado (stateful), avaliando as regras e filtrando todo o tráfego que entra ou sai do EC2."
    },
    {
        "id": 181,
        "pergunta": "Qual recurso do AWS Organizations permite que os administradores restrinjam o máximo de permissões disponíveis para todas as contas membros de uma organização?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "Políticas do IAM (IAM Policies)",
            "Políticas de Controlo de Serviço (SCPs)",
            "Listas de Controlo de Acesso (ACLs)",
            "Grupos de Segurança"
        ],
        "explicacao": "As Políticas de Controlo de Serviço (SCPs) oferecem controlo centralizado sobre as permissões máximas disponíveis para todas as contas na sua organização, garantindo que as contas cumprem estritamente as diretrizes corporativas de controlo de acesso."
    },
    {
        "id": 182,
        "pergunta": "Qual classe de armazenamento do Amazon S3 é a mais adequada para dados de arquivo de longo prazo que raramente são acedidos e requerem opções de recuperação que variam de minutos a horas?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "S3 Standard",
            "S3 Intelligent-Tiering",
            "S3 Glacier Flexible Retrieval",
            "S3 One Zone-IA"
        ],
        "explicacao": "O S3 Glacier Flexible Retrieval é otimizado para o arquivamento de dados de longo prazo (long-term archive) e fornece flexibilidade com tempos de recuperação variando entre alguns minutos e horas, a um custo muito reduzido."
    },
    {
        "id": 183,
        "pergunta": "Um utilizador com pouca experiência em nuvem precisa iniciar um servidor virtual simples para hospedar um blog em WordPress com um preço mensal fixo e previsível. Qual serviço da AWS é o mais indicado?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "Amazon EC2",
            "Amazon Lightsail",
            "AWS Elastic Beanstalk",
            "AWS Fargate"
        ],
        "explicacao": "O Amazon Lightsail fornece instâncias de servidores virtuais (VPS), armazenamento, bases de dados e redes fáceis de usar, com um preço mensal fixo, previsível e baixo, sendo ideal para projetos simples e utilizadores sem experiência avançada em nuvem."
    },
    {
        "id": 184,
        "pergunta": "Qual painel da AWS fornece alertas e orientações personalizadas quando a AWS passa por eventos que podem afetar o ambiente específico de um cliente (como a manutenção de hardware subjacente de uma instância EC2)?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "AWS Service Health Dashboard",
            "AWS Health Dashboard",
            "AWS Billing Dashboard",
            "AWS CloudWatch Dashboard"
        ],
        "explicacao": "O AWS Health Dashboard fornece alertas personalizados e proativos sobre eventos da AWS que podem impactar diretamente os recursos e o ambiente da sua conta, ao contrário do Service Health Dashboard, que mostra o estado geral global de todos os serviços da AWS."
    },
    {
        "id": 185,
        "pergunta": "De acordo com a filosofia de preços da AWS, como os clientes podem reduzir os custos unitários dos serviços de armazenamento e transferência de dados à medida que o seu uso cresce?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "Através de descontos por volume, pagando menos por unidade à medida que a utilização aumenta.",
            "Através da compra exclusiva de instâncias Spot.",
            "Exigindo a assinatura de um contrato imutável de 5 anos.",
            "Substituindo despesas variáveis por despesas de capital no faturamento."
        ],
        "explicacao": "A AWS segue o princípio de precificação por níveis (tiered pricing). À medida que o seu uso aumenta (por exemplo, mais Terabytes armazenados no S3 ou maior transferência de dados), o preço unitário diminui (economias de escala repassadas ao cliente)."
    },
    {
        "id": 186,
        "pergunta": "A sua empresa utiliza atualmente a orquestração de contentores open-source para gerir microsserviços on-premises e quer migrar para a AWS sem alterar as ferramentas de orquestração. Qual serviço devem escolher?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Amazon Elastic Container Service (Amazon ECS)",
            "AWS Elastic Beanstalk",
            "Amazon Elastic Kubernetes Service (Amazon EKS)",
            "AWS Batch"
        ],
        "explicacao": "O Amazon EKS é um serviço Kubernetes totalmente gerido pela AWS. É a escolha ideal para clientes que já utilizam o ecossistema Kubernetes on-premises e querem migrar para a nuvem mantendo a compatibilidade com a mesma ferramenta de orquestração open-source."
    },
    {
        "id": 187,
        "pergunta": "Na arquitetura do Amazon VPC, o que determina tecnicamente se uma sub-rede (subnet) é considerada \"Pública\"?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "A sub-rede está associada a um NAT Gateway.",
            "A sub-rede possui uma rota na sua tabela de rotas que aponta para um Internet Gateway.",
            "A sub-rede possui um endereço IPv6 atribuído manualmente.",
            "A sub-rede não possui regras de Grupo de Segurança ativas."
        ],
        "explicacao": "Uma sub-rede é definida como \"Pública\" estritamente se a tabela de rotas (route table) associada a ela tiver uma rota direta para um Gateway da Internet (Internet Gateway), permitindo que os recursos nela alojados comuniquem com a Internet pública."
    },
    {
        "id": 188,
        "pergunta": "Além do Technical Account Manager (TAM), qual outro programa ou equipa o plano AWS Enterprise Support fornece para oferecer suporte focado no planeamento e execução de lançamentos críticos e migrações?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "AWS Partner Network (APN)",
            "AWS Professional Services",
            "AWS Infrastructure Event Management (IEM)",
            "AWS Marketplace"
        ],
        "explicacao": "AWS Infrastructure Event Management (IEM) auxilia no planeamento e na execução de eventos de infraestrutura, incluindo lançamentos e migrações. A elegibilidade e o custo dependem dos termos vigentes do plano AWS Support e da contratação."
    },
    {
        "id": 189,
        "pergunta": "Ao analisar a migração para a AWS, que conceito financeiro os clientes utilizam para comparar os custos de executar toda a infraestrutura on-premises versus os custos de executar essa mesma infraestrutura na nuvem AWS?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "Retorno sobre o Investimento (ROI)",
            "Custo Total de Propriedade (TCO)",
            "Margem de Lucro Bruto",
            "Custo de Aquisição de Clientes (CAC)"
        ],
        "explicacao": "O Custo Total de Propriedade (TCO - Total Cost of Ownership) é a métrica padrão utilizada para avaliar e comparar todos os custos diretos e indiretos associados à manutenção de datacenters locais em contraste com a adoção do modelo de nuvem da AWS."
    },
    {
        "id": 190,
        "pergunta": "Se a sua equipa interna não possuir os conhecimentos necessários para conceber e implementar uma migração complexa para a nuvem, a quem a sua empresa pode recorrer para obter serviços de consultoria e implementação aprovados pela AWS?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "AWS Support Basic",
            "Parceiros de Consultoria da AWS Partner Network (APN)",
            "AWS Cost Explorer",
            "Equipa de Faturação da AWS"
        ],
        "explicacao": "A AWS Partner Network (APN) inclui parceiros de consultoria e de tecnologia (Consulting Partners). São empresas especializadas, certificadas pela AWS, que ajudam os clientes a conceber, arquitetar, construir, migrar e gerir as suas cargas de trabalho e aplicações na AWS."
    },
    {
        "id": 191,
        "pergunta": "Qual serviço utiliza machine learning para analisar padrões de utilização históricos e recomendar a configuração de computação ideal (como o tipo e tamanho de instância EC2) para reduzir custos e melhorar o desempenho?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "AWS Compute Optimizer",
            "AWS Trusted Advisor",
            "AWS Auto Scaling",
            "AWS Cost Explorer"
        ],
        "explicacao": "O AWS Compute Optimizer utiliza inteligência artificial e machine learning para analisar dados de utilização histórica e fornecer recomendações de dimensionamento ideal (right-sizing) para instâncias EC2, volumes EBS e funções Lambda."
    },
    {
        "id": 192,
        "pergunta": "Uma empresa deseja criar painéis interativos (dashboards) e relatórios de Business Intelligence (BI) para que os seus executivos visualizem os dados corporativos. Qual serviço da AWS devem usar?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "Amazon QuickSight",
            "Amazon Redshift",
            "Amazon Athena",
            "AWS Glue"
        ],
        "explicacao": "O Amazon QuickSight é um serviço de Business Intelligence (BI) rápido, alimentado pela nuvem, que facilita a construção de visualizações, a criação de painéis interativos e a extração de insights a partir de dados da empresa."
    },
    {
        "id": 193,
        "pergunta": "Um administrador precisa fornecer aos funcionários da sua empresa acesso de logon único (SSO) para gerir centralmente o acesso a múltiplas contas da AWS e aplicações empresariais. Qual serviço atende a esta necessidade?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "AWS IAM Identity Center",
            "AWS Directory Service",
            "Amazon Cognito",
            "AWS Organizations"
        ],
        "explicacao": "O AWS IAM Identity Center (sucessor do AWS Single Sign-On - SSO) é o local recomendado para gerir de forma centralizada o acesso (logon único) de utilizadores tanto a múltiplas contas da AWS como a aplicações na nuvem de terceiros."
    },
    {
        "id": 194,
        "pergunta": "Se a equipa de segurança de uma empresa detetar que recursos externos alojados na AWS estão a realizar ataques (como port scanning ou DDoS) contra os seus servidores locais, a quem devem reportar este incidente?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "Equipa de Abuse da AWS (Trust & Safety)",
            "Suporte Técnico da AWS",
            "AWS Concierge",
            "Rede de Parceiros da AWS (APN)"
        ],
        "explicacao": "A equipa de Trust & Safety (Equipa de Abuse da AWS) é responsável por investigar casos em que recursos da AWS estão a ser utilizados para comportamentos abusivos, ilegais ou maliciosos (como spam, ataques DDoS ou port scanning)."
    },
    {
        "id": 195,
        "pergunta": "Qual é a ferramenta da AWS que fornece o conjunto mais abrangente e granular de dados de faturação, detalhando o uso da nuvem a nível de recursos e tags numa base horária ou diária?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "AWS Cost and Usage Report (CUR)",
            "AWS Budgets",
            "AWS Cost Explorer",
            "AWS Pricing Calculator"
        ],
        "explicacao": "O AWS Cost and Usage Report (CUR) contém os dados mais detalhados e granulares sobre os custos e o uso da AWS disponíveis, sendo frequentemente exportado para o Amazon S3 e analisado por ferramentas como o Athena."
    },
    {
        "id": 196,
        "pergunta": "Uma equipa de engenharia precisa capturar fluxos contínuos de dados (streaming) e carregá-los automaticamente e de forma fiável para data lakes e armazéns de dados como o Amazon S3 e o Amazon Redshift. Qual serviço é o mais adequado?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "Amazon Data Firehose",
            "Amazon SQS",
            "Amazon MQ",
            "AWS Snowball"
        ],
        "explicacao": "O Amazon Data Firehose é o serviço focado em carregar streams de dados (como logs ou métricas) de forma fiável, transformando-os e entregando-os em destinos de armazenamento como o Amazon S3, Redshift ou OpenSearch."
    },
    {
        "id": 197,
        "pergunta": "Qual serviço fornece uma visão abrangente e centralizada do estado de segurança e da conformidade em todas as suas contas da AWS, agregando alertas de vários outros serviços (como GuardDuty e Inspector)?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "AWS Security Hub",
            "AWS Shield",
            "AWS WAF",
            "AWS Firewall Manager"
        ],
        "explicacao": "O AWS Security Hub atua como um centro de segurança unificado, agregando, organizando e priorizando alertas de segurança e descobertas (findings) provenientes de vários serviços da AWS e soluções de terceiros suportadas."
    },
    {
        "id": 198,
        "pergunta": "No Modelo de Responsabilidade Partilhada da AWS, qual das seguintes tarefas é da exclusiva responsabilidade do cliente quando utiliza instâncias Amazon EC2?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "Aplicação de patches e atualizações no sistema operativo convidado (Guest OS).",
            "Manutenção e substituição de discos rígidos com falhas.",
            "Proteção da infraestrutura física do data center.",
            "Atualização do firmware do hipervisor."
        ],
        "explicacao": "Em serviços de infraestrutura (IaaS) como o EC2, o cliente tem controlo total sobre a instância e é o único responsável pela segurança 'na' nuvem, o que inclui gerir, configurar e aplicar patches de segurança no sistema operativo (Guest OS) que instalar."
    },
    {
        "id": 199,
        "pergunta": "Uma equipa de desenvolvimento quer automatizar as fases de construção, teste e implementação do seu código sempre que houver uma alteração, implementando a integração e entrega contínuas (CI/CD). Qual serviço orquestra este fluxo de trabalho?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "AWS CodePipeline",
            "AWS CodeCommit",
            "AWS CodeBuild",
            "AWS CloudFormation"
        ],
        "explicacao": "O AWS CodePipeline é um serviço de integração contínua e entrega contínua (CI/CD) totalmente gerido que ajuda a orquestrar e automatizar os seus pipelines de lançamento para atualizações rápidas e fiáveis de aplicações."
    },
    {
        "id": 200,
        "pergunta": "Para cumprir regulamentações do setor financeiro, um banco precisa armazenar dados de auditoria no Amazon S3 de forma estritamente imutável, garantindo que não possam ser eliminados ou alterados por ninguém durante 5 anos. Qual funcionalidade resolve este requisito?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "S3 Object Lock (Bloqueio de Objetos)",
            "S3 Versioning (Versionamento)",
            "S3 Intelligent-Tiering",
            "S3 Server-Side Encryption"
        ],
        "explicacao": "O Amazon S3 Object Lock fornece a capacidade de armazenar objetos através de um modelo WORM (Write Once, Read Many), impedindo que sejam alterados ou eliminados durante um período de retenção predefinido, cumprindo assim exigências regulamentares rígidas."
    },
    {
        "id": 201,
        "pergunta": "Qual serviço de segurança permite gerir centralmente regras de firewall (como políticas do AWS WAF e grupos de segurança) em várias contas da AWS dentro de uma organização?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "AWS Firewall Manager",
            "AWS Shield",
            "Amazon GuardDuty",
            "AWS WAF"
        ],
        "explicacao": "O AWS Firewall Manager simplifica as suas tarefas de administração e manutenção ao permitir gerir de forma centralizada as regras do WAF, do AWS Shield Advanced e dos Grupos de Segurança em várias contas através do AWS Organizations."
    },
    {
        "id": 202,
        "pergunta": "Uma empresa quer transferir arquivos de um servidor NFS local para um bucket Amazon S3 pela rede, com agendamento e verificações de integridade. Qual serviço gerenciado é mais adequado?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "Amazon Route 53",
            "Amazon CloudFront",
            "AWS Outposts",
            "AWS DataSync"
        ],
        "explicacao": "O AWS DataSync automatiza transferências entre armazenamento local NFS e o Amazon S3, com agendamento, otimizações de transferência e verificações de integridade."
    },
    {
        "id": 203,
        "pergunta": "Qual serviço da AWS fornece uma solução de contact center na nuvem omnicanal (cloud contact center) que permite às empresas oferecer um atendimento ao cliente de alta qualidade a um custo reduzido?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "Amazon EventBridge",
            "Amazon Connect",
            "Amazon Chime",
            "Amazon SES"
        ],
        "explicacao": "O Amazon Connect é um contact center na nuvem fácil de utilizar, totalmente gerido e que permite configurar um centro de atendimento ao cliente (com suporte para voz e chat) em poucos minutos, pagando apenas pelo que for utilizado."
    },
    {
        "id": 204,
        "pergunta": "Qual ferramenta da AWS permite aos programadores modelar e aprovisionar recursos de infraestrutura de nuvem utilizando linguagens de programação conhecidas (como Python, Java ou C#) em vez de escrever ficheiros JSON ou YAML?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "AWS CodeBuild",
            "AWS CloudFormation",
            "AWS Cloud Development Kit (CDK)",
            "AWS Elastic Beanstalk"
        ],
        "explicacao": "O AWS Cloud Development Kit (AWS CDK) é uma estrutura de desenvolvimento de software open-source que permite definir a infraestrutura de nuvem em código (usando linguagens de programação familiares) e provisioná-la através do AWS CloudFormation."
    },
    {
        "id": 205,
        "pergunta": "Qual funcionalidade do Amazon Aurora permite escalar a leitura de bases de dados a nível global, replicando os dados para múltiplas Regiões da AWS com latência de menos de um segundo?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "Aurora Global Database",
            "Aurora Multi-Master",
            "Aurora Serverless",
            "RDS Multi-AZ"
        ],
        "explicacao": "O Amazon Aurora Global Database foi concebido para aplicações distribuídas globalmente, permitindo que uma única base de dados do Aurora abranja várias Regiões da AWS com replicação super rápida (tipicamente inferior a 1 segundo) para oferecer leituras locais rápidas e recuperação de desastres."
    },
    {
        "id": 206,
        "pergunta": "Uma empresa necessita de executar comandos administrativos num grande grupo de instâncias EC2 simultaneamente, sem necessidade de abrir portas SSH ou gerir chaves. Qual serviço e funcionalidade da AWS deve utilizar?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "AWS CloudFormation StackSets",
            "AWS Systems Manager Run Command",
            "AWS CodeDeploy",
            "Amazon Inspector"
        ],
        "explicacao": "O AWS Systems Manager Run Command permite automatizar a configuração e a execução de comandos administrativos em várias instâncias EC2 em escala, de forma segura e auditável, sem necessidade de acesso remoto (SSH ou RDP) direto."
    },
    {
        "id": 207,
        "pergunta": "Qual serviço da AWS permite aos clientes controlar satélites, processar os dados recebidos e escalar as suas operações sem a necessidade de construir ou gerir as suas próprias estações terrestres?",
        "id_mult": false,
        "id_resposta": 3,
        "alternativas": [
            "AWS Outposts",
            "AWS IoT Core",
            "AWS Wavelength",
            "AWS Ground Station"
        ],
        "explicacao": "O AWS Ground Station é um serviço totalmente gerido que permite às empresas controlar as comunicações de satélite (Space-to-Earth), processar dados espaciais e escalar as suas operações sem os elevados custos de construção de uma rede de antenas físicas."
    },
    {
        "id": 208,
        "pergunta": "Qual é a principal diferença entre as responsabilidades do AWS CloudTrail e do Amazon CloudWatch?",
        "id_mult": false,
        "id_resposta": 1,
        "alternativas": [
            "O CloudWatch regista chamadas de API; o CloudTrail monitoriza o desempenho de instâncias.",
            "O CloudTrail monitoriza chamadas de API e atividades do utilizador; o CloudWatch monitoriza métricas de desempenho e logs do sistema.",
            "Não há diferença, ambos são serviços de segurança sobrepostos.",
            "O CloudTrail é usado estritamente para faturamento e o CloudWatch é usado para segurança de rede."
        ],
        "explicacao": "No ecossistema da AWS, o CloudTrail responde à pergunta 'Quem fez o quê e quando?' (auditoria de API e ações do utilizador), enquanto o CloudWatch responde à pergunta 'Como está a saúde e a performance do meu sistema?' (métricas operacionais, alarmes e logs de sistema)."
    },
    {
        "id": 209,
        "pergunta": "Qual serviço da AWS utiliza o Processamento de Linguagem Natural (NLP) baseado em machine learning para extrair insights, sentimentos e relações a partir de texto não estruturado?",
        "id_mult": false,
        "id_resposta": 2,
        "alternativas": [
            "Amazon Polly",
            "Amazon Transcribe",
            "Amazon Comprehend",
            "Amazon Textract"
        ],
        "explicacao": "O Amazon Comprehend utiliza machine learning para encontrar insights e relações valiosas em textos (análise de sentimentos, extração de entidades, linguagem, etc.), eliminando a necessidade de os programadores terem experiência prévia com IA."
    },
    {
        "id": 210,
        "pergunta": "Uma empresa quer enviar notificações através de mensagens de texto (SMS) e emails para os seus clientes de forma escalável. Qual serviço da AWS é projetado exatamente para a publicação e subscrição (pub/sub) destas mensagens?",
        "id_mult": false,
        "id_resposta": 0,
        "alternativas": [
            "Amazon Simple Notification Service (Amazon SNS)",
            "Amazon Simple Queue Service (Amazon SQS)",
            "Amazon EventBridge",
            "AWS Step Functions"
        ],
        "explicacao": "O Amazon SNS é um serviço de mensagens de publicação/subscrição (pub/sub) rápido, flexível e totalmente gerido. Permite o envio de mensagens ou alertas a um grande número de subscritores através de SMS, email ou endpoints HTTP/S."
    }
];
