       // Mapeando rotas e páginas

       const routes = {
        "/": "./pages/home.html",
        "/becabelin": "./pages/becabelin.html",
        "/criando-seu-case": "./pages/case.html",
        "/estudos": "./pages/estudos.html",
        "/cursos": "./pages/cursos.html",
        "/bootcamps": "./pages/bootcamps.html",
        "/sobre": "./pages/sobre.html",
        "/contato": "./pages/contato.html",
        "/aulas/aula-1": "./pages/aulas/aula1.html",
        "/aulas/aula-2": "./pages/aulas/aula2.html",
        "/aulas/aula-3": "./pages/aulas/aula3.html",
        "/aulas/aula-4": "./pages/aulas/aula4.html",
        "/aulas/aula-5": "./pages/aulas/aula5.html",
        "/aulas/aula-6": "./pages/aulas/aula6.html",
        "/aulas/aula-7": "./pages/aulas/aula7.html",
        404: "./pages/404.html"
    }

    // Prevenindo o recarregamento da página

    function route(event) {
        event = event || window.event;
        event.preventDefault();

        window.history.pushState({}, "", event.target.href);

        handle()

    }

    function handle() {
        const { pathname } = window.location
        const route = routes[pathname] || routes[404]
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }

    handle()

    window.onpopstate = () => handle()
    window.route = () => route()