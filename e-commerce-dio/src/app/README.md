1 Criando um e-commerce com angular

2 No terminal 
3 Deletar as informações no arquivo app.component.html
4 Criar uma pasta para novos componentes no terminal com o comando: ng g c components/shared/header, 
5 ng g c components/shared/footer, ng g c components/shared/nav, ng g c components/bookstore-app, 
6 ng g c components/bookstore-app/filters, ng g c components/bookstore-app/product-list.
7 Chamar esses componentes criados no arquivo app.component.html e compilar pra ver se deu certo 
<app-nav></app-nav> <app-header></app-header>  <app-footer></app-footer>
8 Próximo passo instalar o bootstrap no terminal com o comando npm i bootstrap
9 No arquivo angular.json inserir o caminho onde o bootstrap está instalado no  "styles": [     
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
            ]
10 Na pasta shared/nav abrir o arquivo nav.component.html e copiar o codigo no site do bootstrap na aba exemple com o direito do mouse clique em cima da pagina e selecione codigo fonte.
Copiar o codigo do <header>  
11 No arquivo app.component.html contém informações Insere os itens  da pagina inicial, template da tela
12 No arquivo header.component.html contém informações do título
13 No arquivo footer.component.html contém informações do rada pé da página
14 No arquivo bookstore-app.component.html contém informações referente ao tamanho do container filter
15 no arquivo nav.component.html contém informaçoes da aba de navegação superior a direita
16 No arquivo filter.component.html  contém informações referente ao container filtro
17 No arquivo product-list.component.html  chama o componente criado product-item.component.html,
 *ngFor percorre o mesmo item varias vezes
18 Criar mais um compontente(pasta):ng g c components/bookstore-app/product-list/product-item, será um componente de um produto só podendo ser aplicado varias vezes na tela sem ter que criar varias html, cria uma que pode ser chamada varias vezes.
Criar também uma pasta MODEL dentro desta pasta criar um arquivo book.ts onde irá definir o objeto criado na api, criar dentro dele a informações.
19 Criar um arquivo dentro da pasta product-list, product-list.component.service.ts para tratar a camada de serviços, fazer os imports, instalar http: npm i @angular/http@latest( se der erro use o comando npm config set legacy-peer-deps true)
21 No arquivo product-list.component.service.ts contém dados referentes a api(book.ts)
22 No arquivo product-list.component.ts contém informações referentes ao arquivo service.ts
24 No arquivo app.modules.ts contém importação dos componentes
25 No arquivo product-item.component.ts 
26  No arquivo product-item.component.html contem os dados da api caso queira acrescentar mais informações
27 No arquivo product-list.component.html chama o componente criado product-item.component.html,
 *ngFor percorre o mesmo item varias vezes
28 No arquivo filter.component.html, foi utilizado o comando style="background-color:#bde0fe" para mudar a cor de fundo do container filtro
