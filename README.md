# AuthExpress

Este é um projeto de autenticação de login utilizando **Node.js** para back-end e **React.js** no front-end. O objetivo deste repositório é praticar a implentação de autenticação de formulário com **Express.js** no back-end e fazer a integração entre cliente e servidor utilizando a bilbioteca **Axios** para fazer as requisições à API.

## Tecnologias Utilizadas

- **Back-end**
  - Node.js
  - Express.js
  - Express Router
  - Axios

- **Front-end**
  - React

## Funcionalidades

- **Tela de login** com campos de **email** e **senha**.
- Verificação das credenciais utilizando um array de objetos (`users`), onde se o usuário estiver presente, o acesso é permitido.
- Caso as credenciais não correspondam a nenhum usuário, uma mensagem de erro **"Credenciais Inválidas"** é exibida.
- O projeto usa o **Express Router** para gerenciar as rotas do back-end.
- **Axios** é utilizado para realizar as requisições do front-end para o back-end.

## Como Executar o Projeto

### 1. Back-end (Node.js + Express)

1. Clone o repositório:
   ```bash
   git clone https://github.com/NaderFares16/AuthExpress.git
   cd AuthExpress

2. Acesse o diretório do back-end e instale as dependências:
   ```bash
   cd back-end
   npm install

3. Mantenha o servidor do back-end ativo:
   ```bash
   npm run dev

### 2. Front-end (React.js)

1. Acesse o diretório do front-end e instale as dependências:
   ```bash
   cd front-end
   npm install

2. Inicie o servidor front-end:
   ```bash
   npm start

- O servidor front-end estará rodando em (`http://localhost:3001`)


## Melhorias Futuras

- **Banco de Dados**: Atualmente, os dados dos usuários estão armazenados em um array de objetos no back-end. Para um projeto mais robusto, podemos integrar um banco de dados, como MongoDB ou MySQL, para armazenar usuários e suas credenciais de forma mais eficiente e segura.

- **Páginas adicionais**: Podemos adicionar mais páginas e rotas para o front-end após o login, como uma página de perfil ou painel de usuário, utilizando o roteamento do Express e do React.