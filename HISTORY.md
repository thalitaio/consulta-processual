1. Iniciei fazendo a API com node. Para isso, usei como guia esse artigo do Medium para fazer uso do json server: [https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d](https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d)
2. Iniciei a parte do front. 
3. Após criar o projeto, já instalei a biblioteca tachyons. Já tinha visto a biblioteca mas nunca conseguia usar nos projetos, por acabar sempre usando bootstrap pela popularidade. Uma vez que estava tendo a oportunidade de criar com mais liberdade nas escolhes, quis experimenta-la por parecer mais "compacta”. [https://tachyons.io/#style](https://tachyons.io/#style)
4. Para implementa-la mais facilmente e conseguir ter mais clareza no pensamento do código, decidi usar um json com alguns dados.
5. Pensei nos componentes que eu precisaria: Card.js - Componente do card para exibir detalhes; SearchList.js - Componente para listar os card com os processos localizados; Scroll.js - Componente para tornar a lista rolável; Search.js // componente de pesquisa.
6. Comecei pelo Card, para retornar o número do processo e tribunal.
7. Depois, fui pra SearchList.js e usei Card dentro de função map.
8. Agora, se o componente SearchList fosse usado como tal, ele estaria ocupando espaço em toda a tela à medida que os dados aumentam, para contrariar isso, foi criado um componente Scroll.
9. Para lidar com a busca de uma string implementei o componente Search. Em primeiro lugar, importei useState de react . Em seguida, importei os componentes Scroll e SearchList. Em seguida, na função Search, usei o useState para inicializar o valor do estado searchField com useState("") (uma string vazia). Depois disso, usei a função de filtro na lista de detalhes recebida do pai.
10. Depois de implementada a busca, eu queria que os cards só aparecessem depois de iniciada a busca no input. Encontrei uma solução para isso, fazendo a alteração no SearchList. Criei um novo estado searchShow com useState e passei false como o valor inicial. Em seguida, verifiquei se a entrada da barra de pesquisa estava vazia com a ajuda de e.target.value, se sim esse estado searchShow é false, caso contrário, como true com a ajuda do setSearchShow dentro da função handleChange.
11. Depois disso, adicionei um if à função searchList que verifica se searchShow é true e, se true, renderiza os componentes SearchList e Scroll, caso contrário, não. Aí funcionou.
12. O que eu queria era que, ao clicar no botão, fosse aberto um modal com mais informações. Achei que seria uma solução eficaz, bonita e simples. Estava errada quanto à simplicidade, pois a maior parte do tempo eu usei nessa implementação. Estava criando um componente Modal e não sendo bem sucedida. Depois de muitas tentativas, encontrei esse artigo aqui fazendo uso do react-modal e que salvou. [https://medium.com/reactbrasil/modal-funcional-com-react-hooks-ddaf6224efa1](https://medium.com/reactbrasil/modal-funcional-com-react-hooks-ddaf6224efa1)
13. Arrumei algumas questões de estilo, quase tudo com o Tachyons. 
14. Fiz o commit pro repositório do github. 
15. Adicionei algumas infos no read me, usei o readme generator para ajudar. [https://readme.so/pt](https://readme.so/pt)
16. Estou decidindo se  vou implementar a comunicação do front com API ou se já parto para os testes amanhã. Também quero remover os Lorem Ipsum, que usei para facilitar mas me arrependi. Também preciso configurar o arquivo de Histórico.
17. Optei por seguir com os testes e fazer uso do json na aplicação mesmo. Fiz isso pois no README do desafio dizia que seriam considerados os testes e, como é algo que não tenho prática, já sabia que levaria um tempo. Lendo muito documentações como  [https://testing-library.com/](https://testing-library.com/) | [https://pt-br.reactjs.org/docs/testing.html](https://pt-br.reactjs.org/docs/testing.html)
18. A princípio, pensei que faziam sentido os seguintes testes: Se ele inicia com o valor vazio | se o imput existe | disparar evento no input | testar se ele busca algo não localizado
19. Passei algumas horas do dia tentando implementar os testes. Todos os erros recebidos eram relacionados ao modal. Fiquei preocupada com a possibilidade de ter algum conflito com a biblioteca que escolhi, mas não acredito que seja o caso. O erro era algo semelhante à isso https://stackoverflow.com/questions/48269381/warning-react-modal-app-element-is-not-defined-please-use-modal-setappeleme. Das possíveis soluções encontradas, nenhuma surtiu efeito.
20. Olhei por muito tempo a documentação https://testing-library.com/docs/example-react-modal/, mas não consigo absorver o conteúdo. Não quis seguir e implementar algo sem entender o que está acontecendo. Acredito que pela falta de prática com os testes, acabei não conseguindo evoluir sozinha nesse momento. Deixei uma parte da tentativa, onde é possível visualizar que o teste falha (o que não era o resultado esperado).
21. Usei a biblioteca Imask para criar uma máscara no input de search https://www.npmjs.com/package/react-imask. Quando pesquisei tbm encontrei outra muito semelhante https://www.npmjs.com/package/react-input-mask. Ia optar pelo uso da segunda, por ter mais downloads, mas ao ler a documentação vi que eu teria que exemplificar usando 9, pois os demais são limitantes. Por esse único motivo, usei a Imask.
21. Diz o deploy no netlify, que estou habituada https://consulta-processual-jusbrasil.netlify.app/.

--------------------------

### O que eu faria com mais tempo

1. Sem dúvidas, os testes. Ao encontrar essa dificuldade já estou me organizando para aprende-los.
2. Teria feito a integração com a API.
3. Adaptar o projeto para seguir padrões de acessibilidade.

---------------------------

### Até a próxima

Gratidão pela oportunidade e tempo. Foi um excelente projeto e fiquei muito feliz em realiza-lo. 
