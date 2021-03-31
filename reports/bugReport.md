# 1. Tentar cadastrar usuário sem preencher algum campo não apresenta mensagem de erro
**Descrição:** quando o usuário pressiona o botão “Sign Up” sem preencher todos os campos, a aplicação não informa o usuário com a mensagem de erro e o redireciona para o endereço http://a.testaddressbook.com/users. 

**Pré Condição:** não preencher algum campo do formulário.

|   | Passos | Resultado esperado | Resultado obtido |
| ------ | ------ | ------ | ------ |
| 1 | Acessar página de cadastro | | |
| 2 | Preencher apenas um dos inputs e deixar o outro vazio | | |
| 3 | Pressionar o botão “Sign Up” | A aplicação deve apresentar para o usuário a mensagem de erro na mesma página | A aplicação não apresenta a mensagem de erro esperada e redireciona o usuário para outra página |

**Observação:** o mesmo acontece caso tente cadastrar um usuário já cadastrado.


# 2. Tentar fazer login sem preencher algum campo não apresenta mensagem de erro
**Descrição:** quando o usuário pressiona o botão “Sign In” sem preencher todos os campos, a aplicação informa o usuário com a mensagem de erro mas o redireciona para o endereço http://a.testaddressbook.com/sessions. 

**Pré Condição:** não preencher algum campo do formulário.

|   | Passos | Resultado esperado | Resultado obtido |
| ------ | ------ | ------ | ------ |
| 1 | Acessar página de login | | |
| 2 | Preencher apenas um dos inputs e deixar o outro vazio | | |
| 3 | Pressionar o botão “Sign In” | A aplicação deve apresentar para o usuário a mensagem de erro na mesma página | A aplicação apresenta a mensagem de erro esperada mas redireciona o usuário para outra página |

**Observação:** o mesmo acontece caso tente realizar login com todos os campos preenchidos, mas credenciais não cadastradas.
