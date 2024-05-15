# Desafio: Progresso do Formulário
Neste desafio, foi proposto criar um formulário com 4 campos e uma barra de progresso que se altera conforme o usuário preenche os campos. Cada campo tem suas próprias validações, e o botão de envio deve ser desabilitado até que todos os campos estejam preenchidos e válidos. Além disso, ao enviar o formulário com sucesso, um alerta deve ser exibido, e os campos devem ser limpos, reiniciando a barra de progresso.

Passos para Execução:
Instalação:
Certifique-se de ter todas as dependências necessárias para executar o código. No caso deste desafio, é utilizado React, portanto, certifique-se de ter o ambiente de desenvolvimento React configurado.

# Clonagem do Repositório:
Clone o repositório onde o código está hospedado. Use o comando:

git clone <URL_do_repositório>

# Instalação de Dependências:
Instale todas as dependências necessárias. No caso do React, utilize o comando:
npm install
# Execução do Aplicativo:
Execute o aplicativo React. No caso do React, utilize o comando:

npm run dev;
# Teste do Aplicativo:
Abra o navegador e acesse o endereço onde o aplicativo está sendo executado (normalmente http://localhost:3000/). Isso abrirá o aplicativo no navegador e permitirá que você interaja com o formulário.

# Estrutura do Código:
O código consiste em um componente React chamado App, que é responsável por renderizar o formulário e gerenciar o estado dos campos e da barra de progresso. Aqui está uma visão geral da estrutura do código:

## Estado:

O estado é gerenciado utilizando React Hooks (useState), onde são mantidos os valores dos campos do formulário e o progresso da barra.
Validações:

A validação do e-mail é realizada utilizando expressões regulares (RegEx).
Outras validações são feitas diretamente no código, como garantir que o nome completo tenha pelo menos dois nomes.
Atualização do Progresso:

A barra de progresso é atualizada dinamicamente conforme os campos são preenchidos.
Envio do Formulário:

Quando todos os campos são preenchidos e válidos, o botão de envio é habilitado. Ao clicar no botão, um alerta de sucesso é exibido, os campos são limpos e a barra de progresso é reiniciada.
## Melhorias Possíveis:
Melhorar a Experiência do Usuário: Adicionar feedback visual para indicar quando um campo está inválido (por exemplo, destacando o campo em vermelho).

Refatoração do Código: O código pode ser refatorado para ser mais modular e reutilizável, especialmente se houver planos de expansão do formulário no futuro.

Testes: Adicionar testes automatizados para garantir o comportamento esperado do formulário em diferentes cenários.

## Conclusão:
Este desafio proporcionou uma oportunidade de praticar habilidades em React, validação de formulários e manipulação de estados. A implementação bem-sucedida do desafio demonstra competência em desenvolvimento front-end e capacidade de resolver problemas de forma eficaz.
