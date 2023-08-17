* Projeto Router Simples

Este é um projeto de exemplo de um roteador JavaScript simples que permite a navegação entre páginas usando manipulação do histórico do navegador e carregamento assíncrono de conteúdo.

* Funcionalidades
1. Adicionar rotas e suas correspondentes páginas.
2. Navegação entre páginas usando eventos de clique em links.
3. Manipulação do histórico do navegador para alterações de URL.
4. Carregamento assíncrono do conteúdo da página.

* Uso
1. Importe a classe Router para o seu projeto.
2. Crie uma instância do Router.
3. Adicione rotas usando o método add.
4. Configure os eventos de clique nos links para chamar o método route.
5. No método route, atualize o histórico do navegador e chame o método handle do roteador.
6. O método handle carregará o conteúdo da página correspondente de forma assíncrona e o exibirá na área designada (por exemplo, <div id="app"></div>).
