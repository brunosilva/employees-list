# Listagem de Funcionários

### Projeto

Para criar o projeto, usei o , JSON Server para simular as chamadas API.

*   Next.Js
*   JSON Server para simular as chamadas API.
*   SASS

Para iniciar, execute no terminal `npm install`, logo após finalizad, abra mais uma aba do terminal e execute os seguintes comandos:

## Explicando a estrutura

Instalado o Axios e realizado as seguintes configurações:
*   Em `/services/api.ts` foi importado o *axios* e realizado a chamada base na api `http://localhost:3333` após rodar o server
*   No `package.json` em `scripts`, definido um script para rodar o server e assim, disponibilizar os dados simulando API.
*   E por último, o arquivo `server.json` local onde está todas as informações.

## Sidebar

Criei varios botões e que ao clicar define qual modo de pesquisa será realizado.


## content

É local onde renderiza as informações.


## Observações

Em `./src/pages/index.tsx` criei um *state* e atribui a uma const os dois parâmetros. Assim, consigo controlar entre os dois componentes (Seidebar e Content) o estado da opção atual clicada no **Sidebar**.
Nos dois componentes recebo como `props` e assim consigo setar qual modo desejo realizar a busca.

No componente **Content**, criei um campo (input) para realizar buscas. 

Para usar, Clique na opção desejada no sidebar e cole um valor referente existente na tabela neste campo, e clique em pesquisar.


## Para executar

* `npm run dev` para subir a aplicação em `http://localhost:3000/`
* `npm run server` para subir o server responsavel por fornecer os dados que serão chamados via api
