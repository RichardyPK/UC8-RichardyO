const API = "https://api.disneyapi.dev/character";

let paginaAtual = 1;
let totalPersonagens = 0;

const container = document.getElementById("personagens");
const contador = document.getElementById("contador");
const pagina = document.getElementById("pagina");
const botao = document.getElementById("btnCarregar");

async function carregarPersonagens() {

    try {

        console.log("Buscando página:", paginaAtual);

        const resposta = await fetch(
            `${API}?page=${paginaAtual}&pageSize=50`
        );

        if (!resposta.ok) {
            throw new Error("Erro na requisição: " + resposta.status);
        }

        const dados = await resposta.json();

        // Mostra o JSON no console
        console.log("Dados recebidos:", dados);

        // Verifica se existem personagens
        if (!dados.data || dados.data.length === 0) {
            console.log("Nenhum personagem encontrado.");
            return;
        }

        // Percorre os personagens
        dados.data.forEach(function(personagem) {

            const card = document.createElement("div");
            card.classList.add("card");

            const imagem = document.createElement("img");
            imagem.src = personagem.imageUrl;
            imagem.alt = personagem.name;

            const nome = document.createElement("h2");
            nome.textContent = personagem.name;

            card.appendChild(imagem);
            card.appendChild(nome);

            container.appendChild(card);
        });

        // Soma a quantidade carregada
        totalPersonagens += dados.data.length;

        contador.textContent =
            `${totalPersonagens} personagens carregados`;

        pagina.textContent =
            `Página ${paginaAtual}`;

        // Próxima página
        paginaAtual++;

        // Verifica se existe próxima página
        if (!dados.info.nextPage) {

            botao.disabled = true;
            botao.textContent = "TODOS OS PERSONAGENS FORAM CARREGADOS";

        }

    } catch (erro) {

        console.error("Erro ao carregar personagens:", erro);

        contador.textContent =
            "Erro ao carregar os personagens.";
    }
}

// Primeira página
carregarPersonagens();

// Botão carregar mais
botao.addEventListener("click", carregarPersonagens);