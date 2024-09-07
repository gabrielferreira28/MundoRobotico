// Função de pesquisa
function pesquisar() {
    const section = document.querySelector('.resultados-pesquisa');
    if (!section) {
        console.error('A seção .resultados-pesquisa não foi encontrada.');
        return;
    }

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar algo para pesquisar.</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";

    // Função para destacar o texto pesquisado
    function destacarTexto(texto) {
        const regex = new RegExp(`(${campoPesquisa})`, 'gi');
        return texto.replace(regex, '<span class="destaque">$1</span>');
    }

    for (let artigo of artigos) {
        const titulo = artigo.titulo.toLowerCase();
        const descricao = artigo.descricao.toLowerCase();
        const tags = artigo.tags ? artigo.tags.toLowerCase() : "";

        const tituloDestacado = destacarTexto(artigo.titulo);
        const descricaoDestacada = destacarTexto(artigo.descricao);
        const tagsDestacadas = destacarTexto(artigo.tags || "");

        if (tituloDestacado.toLowerCase().includes(campoPesquisa) || 
            descricaoDestacada.toLowerCase().includes(campoPesquisa) || 
            tagsDestacadas.toLowerCase().includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2><a href="${artigo.link}" target="_blank">${tituloDestacado}</a></h2>
                    <p class="descricao-meta">${descricaoDestacada}</p>
                    <a href="${artigo.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    if (!resultados.trim()) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    section.innerHTML = resultados;
}

// Função para criar e adicionar cartões de robôs
function adicionarCardsRobos() {
    const container = document.querySelector('.tipos-robos .container');

    robos.forEach(robo => {
        container.innerHTML += `
            <div class="card">
                <img src="${robo.imagem}" alt="${robo.nome}">
                <h3>${robo.nome}</h3>
                <p>${robo.descricao}</p>
            </div>
        `;
    });
}

// Função para criar e adicionar artigos
function adicionarArtigos() {
    const containerArtigos = document.querySelector('.artigos');

    function criarArtigo({ titulo, imagem, descricao, link }) {
        const article = document.createElement('article');
        article.classList.add('artigo');

        const titleElement = document.createElement('h3');
        titleElement.textContent = titulo;

        const imgElement = document.createElement('img');
        imgElement.src = imagem;
        imgElement.alt = titulo;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = descricao;

        const linkElement = document.createElement('a');
        linkElement.href = link;
        linkElement.textContent = 'Leia Mais';
        linkElement.classList.add('btn-leia-mais');
        linkElement.target = '_blank';

        article.appendChild(titleElement);
        article.appendChild(imgElement);
        article.appendChild(descriptionElement);
        article.appendChild(linkElement);

        return article;
    }

    artigos.forEach((artigo) => {
        const articleElement = criarArtigo(artigo);
        containerArtigos.appendChild(articleElement);
    });
}

// Função para criar e adicionar tendências
function adicionarTendencias() {
    const containerTendencias = document.querySelector('#inovacoes-tendencias');

    tendencias.forEach(tendencia => {
        const divTendencia = document.createElement('div');
        divTendencia.classList.add('tendencia');

        const h3Element = document.createElement('h3');
        h3Element.textContent = tendencia.titulo;

        const pElement = document.createElement('p');
        pElement.textContent = tendencia.descricao;

        const aElement = document.createElement('a');
        aElement.href = tendencia.link;
        aElement.textContent = 'Leia Mais';
        aElement.target = '_blank';
        aElement.classList.add('btn-leia-mais');

        divTendencia.appendChild(h3Element);
        divTendencia.appendChild(pElement);
        divTendencia.appendChild(aElement);

        containerTendencias.appendChild(divTendencia);
    });
}

// Função para criar e adicionar eventos
function adicionarEventos() {
    const containerEventos = document.querySelector('#eventos-webinars .eventos-container');

    eventos.forEach(evento => {
        const divEvento = document.createElement('div');
        divEvento.classList.add('evento');

        const h3Element = document.createElement('h3');
        h3Element.textContent = evento.titulo;

        const pElementDescricao = document.createElement('p');
        pElementDescricao.textContent = evento.descricao;

        const pElementData = document.createElement('p');
        pElementData.textContent = evento.data;

        const aElement = document.createElement('a');
        aElement.href = evento.link;
        aElement.textContent = 'Saiba Mais';
        aElement.target = '_blank';

        divEvento.appendChild(h3Element);
        divEvento.appendChild(pElementDescricao);
        divEvento.appendChild(pElementData);
        divEvento.appendChild(aElement);

        containerEventos.appendChild(divEvento);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    adicionarCardsRobos();
    adicionarArtigos();
    adicionarTendencias();
    adicionarEventos();
});
