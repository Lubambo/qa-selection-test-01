# Propostas de melhoria para a Aplicação UI

### 1. Remover _Sign Out_ do menu de navegação
**Problema:** Por se tratar de um menu de navegação, o usuário tem acesso constante àquela área, isso aumenta o risco de o usuário clicar acidentalmente no botão _Sign Out_

|   | Melhoria | Descrição |
| ------ | ------ | ------ |
| 1 | Pop-up de confirmação | Inserir um pop-up de confirmação de _Sign Out_ para garantir a intenção do usuário |
| 2 | Menu dropdown de perfil logado | No local onde fica o e-mail logado, inserir um menu dropdown com a opção de _sign out_ |

### 2. Manter sessão do usuário logado
**Problema:** Ao fechar o navegador, a sessão do usuário encerra. Isso obriga o usuário a ter o trabalho repetitivo de _login_. 

|   | Melhoria | Descrição |
| ------ | ------ | ------ |
| 1 | Confirmação para manter sessão aberta | Na página de login, inserir um checkbox (não obrigatório) solicitando ao usuário uma confirmação de intenção de manter-se logado. A não ser que seja uma regra de negócio, o ideal é manter o usuário logado enquanto não for solicitado o fim da sessão. |

### 3. Remover vários _Address_ de uma vez
**Problema:** Para evitar que o usuário tem que realizar uma confirmação a cada remoção de um _address_, caso ele deseje remover mais de um item da lista.

|   | Melhoria | Descrição |
| ------ | ------ | ------ |
| 1 | Seleção de item na lista | Inserir um checkbox na lateral de cada item para que seja possível selecionar o(s) desejado(s) e excluí-los utilizando um botão de _delete_, localizado fora da lista |

### 4. Inserir barra de paginação
**Problema:** Ao passo que se insere mais _address_ a lista fica muito extensa. Por não ter uma barra de navegação, o usuário é tem muita informação na tela, o que pode fazê-lo se perder em algum momento.

|   | Melhoria | Descrição |
| ------ | ------ | ------ |
| 1 | Inserir barra de paginação | Ao fazer isso, é possível garantir um número máximo de itens na tela, fazendo com que a aplicação apresente uma quantidade razoável de informação em tela, independente do número de _address__ |
