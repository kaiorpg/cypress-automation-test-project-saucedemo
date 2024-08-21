<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>Cypress Automation Test Project</h1>
  <p>Este repositório contém um conjunto de testes automatizados para o site <a href="https://www.saucedemo.com/v1/">Sauce Demo</a> utilizando o framework Cypress. O projeto utiliza o conceito de Page Objects para organizar e estruturar os testes de forma eficiente.</p>

  <h2>Estrutura do Projeto</h2>
  <ul>
    <li><strong>cypress</strong>
      <ul>
        <li><strong>e2e</strong>: Contém os arquivos de teste.</li>
        <li><strong>fixtures</strong>: Arquivos de dados de teste (exemplo: example.json).</li>
        <li><strong>pages</strong>: Contém os Page Objects usados nos testes.</li>
        <li><strong>support</strong>: Arquivos de suporte, como comandos personalizados.</li>
        <li><strong>node_modules</strong>: Dependências do projeto.</li>
      </ul>
    </li>
    <li><strong>cypress.config.js</strong>: Configurações do Cypress.</li>
    <li><strong>package.json</strong>: Informações e dependências do projeto.</li>
  </ul>

  <h2>Pré-requisitos</h2>
  <ul>
    <li><a href="https://nodejs.org/">Node.js</a> (versão 14 ou superior)</li>
    <li><a href="https://www.npmjs.com/">npm</a> (normalmente vem junto com o Node.js)</li>
    <li><a href="https://www.cypress.io/">Cypress</a></li>
  </ul>

  <h2>Instalação</h2>
  <ol>
    <li>Clone o repositório para o seu ambiente local:
      <pre><code>git clone https://github.com/kaiorpg/cypress-automation-test-project-saucedemo.git</code></pre>
    </li>
    <li>Navegue até o diretório do projeto:
      <pre><code>cd cypress-automation-test-project-saucedemo</code></pre>
    </li>
    <li>Instale as dependências do projeto:
      <pre><code>npm install</code></pre>
      <pre><code>npm install cypress</code></pre>
    </li>
  </ol>

  <h2>Executando os Testes</h2>
  <h3>Abrindo o Cypress</h3>
  <p>Para abrir a interface gráfica do Cypress e ver os testes disponíveis, execute:</p>
  <pre><code>npx cypress open</code></pre>

  <h3>Executando os Testes em Linha de Comando</h3>
  <p>Para executar os testes diretamente no terminal, utilize:</p>
  <pre><code>npx cypress run</code></pre>

  <h2>Allure Reports</h2>
  <p>Este projeto utiliza o <strong>Allure Reports</strong> para gerar relatórios detalhados dos testes executados. Para gerar e visualizar o relatório, utilize o seguinte comando:</p>
  <pre><code>npm run test:allure</code></pre>
  <p>Este comando executa os testes e em seguida gera o relatório Allure, que será aberto automaticamente no navegador.</p>

  <h2>Estrutura dos Testes</h2>
  <p>O projeto está organizado utilizando o conceito de Page Objects, o que facilita a manutenção e a escalabilidade dos testes. Cada página da aplicação tem uma classe correspondente em <code>cypress/pages</code> que encapsula a interação com a UI.</p>

  <h3>Exemplos de Testes</h3>
  <ul>
    <li><strong>Login Test:</strong> Verifica o processo de login com diferentes tipos de usuários.</li>
    <li><strong>Checkout Test:</strong> Valida o checkout da compra dos produtos.</li>
  </ul>

  <h2>Contribuição</h2>
  <p>Contribuições são bem-vindas! Se você encontrar algum problema ou tiver alguma sugestão, sinta-se à vontade para abrir uma issue ou enviar um pull request.</p>

  <h2>Contato</h2>
  <p>Para qualquer dúvida ou sugestão, entre em contato:</p>
  <ul>
    <li><strong>Kaio Rafael Perdigão de Castro</strong> - <a href="mailto:kaiorpg@gmail.com">kaiorpg@gmail.com</a></li>
    <li><strong>GitHub:</strong> <a href="https://github.com/kaiorpg">Kaio Perdigão</a></li>
    <li><strong>Rede Social:</strong> <a href="https://www.linkedin.com/in/kaio-perdigao/">LinkedIn</a></li>
  </ul>
</body>
</html>
