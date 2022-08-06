#### Decisões

1. Priorizar o frontend, fazer o máximo e melhor possível, de acordo com a caracteristica da vaga.

2. Utilização do material-ui para facilitar o desenvolvimento da parte do design.

3. Inserção de ReCaptcha do google para validação de usuário humano.

4. Buscar os dados a respeito do paredão vigente logo no início, para ter a opção de tratar o resultado o quanto antes, caso necessário.

5. Escolha de uso do redux sagas ao invés de Context e hooks personalizados para chamadas de API, devido a maior e melhor escalabilidade.

====================

#### Implementações abandonadas por baixa prioridade e falta de tempo

**Frontend**

1. Fazer um componente de loading caso o usuário chegasse na próxima tela antes da resposta da API que foi chamada.

2. Fazer uma página de erro, redirecionada caso chamada de API não tivesse sucesso.

3. Adaptar tela para o modelo responsivo usando Grid do material UI.

4. Aumentar o fluxo de votação: Validação de usuário humano > seleção de participante > voto concluído => opção para votar novamente retornando para etapa do ReCaptcha

**Escolha de implementação do backend que seria feita se tivesse tempo**

1. Uso de node.js e express.js

2. endpoints:

a) /dados-paredao-vigente -> retorna as informações sobre os participantes necessárias para seleção (nome, sexo e foto).
b) /realizar-voto -> acumula um voto no participante escolhido, e retorna a apuração da votação até o momento (porcentagem de votos para o participante 1, dia de encerramento da votação).
c) /dados-paredao -> recebe o nome de dois participantes e retorna as informações a respeito do resultado do paredão entre eles.

====================

#### Instalação do projeto

**Tenha instalado Node JS a partir da versão 16**

1. Clonar o repositório:

    git clone https://github.com/filipeleoncio/SelecaoGloboPayTV.git

2. Ir para a pasta do projeto:

    cd SelecaoGloboPayTV

3. Instalar as dependências

    npm install
    ou
    yarn install

4. Executar o projeto:

    npm start

====================

#### Instruções de execução

No arquivo **src/services/paredao.js** existe 2 mocks para as chamadas de api de obter dados do paredão vigente, e de realizar o voto.

Código se comporta de forma dinâmica com essas alterações, basta salvar e atualizar a página.

1. mockResParedaoVigenteInfo: conta com imagem, nome e sexo do participante("m" ou "f").

2. mockResPostVoto:

a) porcentagemVotosParticipante1: porcentagem de votos que o participante 1 tem, usado para exibir o componente de apuração dos votos.
b) diaHoraInicio: data no formato "DD/MM/AAAA-HH:MM:SS" correspondente a data em que a votação foi iniciada.
c) diaHoraFim: data no formato "DD/MM/AAAA-HH:MM:SS" correspondente a data em que a votação será encerrada. Usado para calcular e exibir o tempo restante para o termino da votação.
