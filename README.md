## O Desafio

Você deve implementar duas páginas principais:

- Uma página de consulta processual (busca); e
- uma página de processos (exibição) 

Seu sistema deve rodar na Web utilizando **ReactJs** no front-end + backend usando a linguagem de programação e ferramentas open source da sua preferência.

### Persistência

O armazenamento dos dados fica à seu critério, você pode usar um banco de dados opensource à sua escolha e fornecer uma forma de popular o banco ou até mesmo fazer com que sua API entregue os dados de um arquivo JSON já populado na pasta do projeto. 

Se optar por usar um banco de dados você precisa me fornecer um meio automatizado de popular ele para testar seu projeto sem que eu precise cadastrar os processos um a um.

### O processo

Nesse desafio os processos podem ser cadastrados com dados fake e devem possuir os seguintes dados:

- Número CNJ no formato `NNNNNNN-NN.NNNN.N.NN.NNNN` Ex.: 5001682-88.2020.8.13.0672;
- Nome das partes (Autor x Réu);
- Tribunal de origem (Ex.: TJSP);
- Data de início;
- Movimentações;
  - Data;
  - Descrição;

### Busca

A página de busca consiste em pelo menos um campo para o usuário preencher o número do processo.

<img src="https://i.postimg.cc/Wq3Pg0mm/Screen-Shot-2022-10-09-at-21-50-48.png"/>

### Exibição

Nesse modal devem ser exibidos todos os dados do processo

<img src="https://i.postimg.cc/XX7WR0MZ/Screen-Shot-2022-10-09-at-21-51-20.png"/>

# Para rodar o projeto:

- Clone o repositório para o seu ambiente local. 

- Digite no terminal, na pasta do projeto:

    ```jsx
    npm start
    ```
- Abrirá no navegador em localhost.

- Você também pode usar a aplicação hospedada em https://consulta-processual-jusbrasil.netlify.app/
