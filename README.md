# Orderify
Sistema de ordens de serviço.

## Como rodar o frontend

Este guia fornecerá instruções passo a passo sobre como configurar e executar a aplicação Angular Orderify.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes pré-requisitos instalados em seu sistema:

- [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/)
- [Angular CLI](https://angular.io/cli) (Angular Command Line Interface)

## Passos para Executar a Aplicação

1. **Clone o Repositório**

   Abra o terminal (ou prompt de comando) e navegue até o diretório onde você deseja clonar o repositório. Em seguida, execute o seguinte comando:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. **Instale as Dependências**

   Abra o terminal (ou prompt de comando) e navegue até o diretório onde você deseja clonar o repositório. Em seguida, execute o seguinte comando:

   ```bash
   cd nome-do-repositorio
   
3. **Em seguida, instale as dependências do projeto usando o npm:** 
    ```bash
   npm install
    
## Como rodar o backend

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes pré-requisitos instalados em seu sistema:

- [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/)
- [Angular CLI](https://angular.io/cli) (Angular Command Line Interface)

## Passos para Executar a Aplicação

1. **Clone o Repositório**

   Abra o terminal (ou prompt de comando) e navegue até o diretório onde você deseja clonar o repositório. Em seguida, execute o seguinte comando:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git

  Navegue até o diretório da aplicação usando o terminal: 
  cd nome_do_projeto

 Instale as dependências usando o Composer:
 ```bash
  composer install
  ```
2. ***Configurar o Arquivo de Ambiente**
```bash
  DB_CONNECTION=mysql
  DB_HOST=127.0.0.1
  DB_PORT=3306
  DB_DATABASE=nome_do_banco
  DB_USERNAME=seu_usuario
  DB_PASSWORD=sua_senha
```
4. ***Gerar a Chave de Aplicativo***
  Abra um terminal e execute o seguinte comando para gerar uma chave de aplicativo:
  ```bash
    php artisan key:generate
  ```
5. ***Executar as Migrações e Seeders***
   Para criar as tabelas do banco de dados e popular com dados de exemplo, execute:
   ```bash
    php artisan migrate --seed
   ```

6. **Iniciar o Servidor**

Inicie o servidor embutido do Laravel usando o seguinte comando:
  ```bash 
  php artisan serve
```


