# 1. Método POST para criação de usuário aceita requisição com parâmetros vazios 
**Descrição:** a requisição para criação de usuário retorna **Status Code 201** quando enviado usuário com parâmetros vazios.

|   | Passos | Resultado esperado | Resultado obtido |
| ------ | ------ | ------ | ------ |
| 1 | Requisitar criação de usuário com parâmetro de valor igual a *{}* | Status Code **400** | Status Code **201** |

# 2. Atualização de usuário inexistente nos Método PUT e PATCH retornam verdadeiras
**Descrição:** quando solicitada a atualização de um **usuário inexistente** utilizando PUT ou PATCH, a aplicação retorna **Status Code 200**

|   | Passos | Resultado esperado | Resultado obtido |
| ------ | ------ | ------ | ------ |
| 1 | Requisitar atualização de usuário inexistente | Status Code **404** | Status Code **200** |

# 3. Remoção de usuário inexistente
**Descrição:** quando solicitada a remoção de um **usuário inexistente** utilizando DELETE, a aplicação retorna **Status Code 204**

|   | Passos | Resultado esperado | Resultado obtido |
| ------ | ------ | ------ | ------ |
| 1 | Requisitar remoção de usuário inexistente | Status Code **404** | Status Code **204** |