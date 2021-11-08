# Teste de Seleção para QA

## Descrição
Projeto contendo as implementações solicitadas no teste para a seleção de Analista de Qualidade.

## Relatórios
Os relatórios foram divididos na pasta [reports](./reports) da seguinte forma:

### Aplicação UI - Pasta [ui_app](./reports/ui_app)
|  Relatório | Arquivo |
| ------ | ------ |
| Relatório de bugs | [Bug_Report](./reports/ui_app/Bug_Report.md) |
| Relatório de melhorias | [Proposals](./reports/ui_app/Proposals.md) |

### Aplicação Rest API - Pasta [rest_app](./reports/rest_app)
|  Relatório | Arquivo |
| ------ | ------ |
| Relatório de bugs | [Bug_Report](./reports/rest_app/Bug_Report.md) |

## Observação
Caso os testes de _Sign Up_ da **Aplicação UI** precisem ser rodados mais de uma vez, é necessários ajustar os e-mails dos usuários (exceto o _mainUser_) para não entrar em conflito com o [bug **1** reportado no relatório](./reports/ui_app/Bug_Report.md#1-tentar-cadastrar-usu%C3%A1rio-sem-preencher-algum-campo-n%C3%A3o-apresenta-mensagem-de-erro)

---

# Desafio Técnico 
## Features 
- Linguagem de programação Java;
- Linguagem de programação JavaScript;

## Escopo mínimo esperado
- Levantar cenários e especificar os casos de testes;
- Automatização dos casos de testes;
- Descrever possíveis bugs, realizando o detalhamento dos passos a serem reproduzidos;

## Aplicação UI
- Implementar testes automatizados - login;
- Implementar testes automatizados - cadastrar endereço;
- Implementar testes automatizados - listar endereço;
- Implementar testes automatizados - excluir endereço;

## Aplicação API-REST
- Implementar testes automatizados usando GET;
- Implementar testes automatizados usando POST;
- Implementar testes automatizados usando PUT;
- Implementar testes automatizados usando PATCH;
- Implementar testes automatizados usando DELETE;

---

### O que será diferencial
- Elaborar relatório (Status reports do seu trabalho).
- Melhorias e sugestão de usabilidade da aplicação front-end;

### O que vamos avaliar
- Seu código;
- Organização;
- Casos de testes;
- Boas práticas;

---

# Descrição do desafio
A aplicação para testes de UI consiste em um sistema de login, com cadastro/listagem de endereços.
> Link para os Testes de UI: http://a.testaddressbook.com/sign_in
> Ferramenta sugerida: [Protractor](https://www.protractortest.org/#/)

## Fluxo de atividade
### Autenticação
- Cadastrar Usuário
- Autenticação com o Usuário cadastrado
### Endereços
- Cadastrar Endereço
- Visualizar Endereço Cadastrado
- Editar Endereço Cadastrado
- Excluir Endereço Cadastrado 

## Regras de Negócio
- A autenticação do sistema deve ser realizada a partir de um novo cadastro;
- Caso os campos obrigatórios não tenham sido preenchidos, estes devem ser informados em mensagem de erro;
- Os dados utilizados no teste devem ser lidos a partir de arquivo fonte do tipo JSON.

A aplicação para testes de API é uma aplicação tutorial, com dicas na própria homepage.
> Link para os Testes de API: https://reqres.in/
> Ferramenta sugerida: Rest-assured

## Fluxo de Atividade
- Requisições do tipo GET
- Requisições do tipo POST
- Requisições do tipo PUT
- Requisições do tipo PATCH
- Requisições do tipo DELETE

## Regras de Negócio
- Content type sempre como JSON.
- Sempre verificar o statusCode, mas não limitar-se somente a ele, a partir de sua interpretação validar o que realmente é importante em cada teste que você escolher fazer.

---
# Instruções
- Crie um repositório público no gitlab para o projeto.
- Teste a aplicação e Desenvolva automação dos testes, junto com todos os artefatos já citados e envie até a data prevista.
- Após concluir seu trabalho faça um push;
- Responda este e-mail notificando a finalização do desafio para validação.
