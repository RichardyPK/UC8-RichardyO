// Pegando os elementos do HTML
const input = document.getElementById("input-busca");
const botao = document.getElementById("btn-busca");
const resultado = document.getElementById("container-resultado");

// Função para buscar o Digimon
async function buscarDigimon() {

    // Pega o nome digitado
    const nome = input.value.trim();

    // Verifica se o usuário digitou alguma coisa
    if (nome === "") {
        resultado.innerHTML = "<p>Digite o nome de um Digimon.</p>";
        return;
    }

    try {

        // Procura o Digimon pelo nome
        const resposta = await fetch(
            "https://digi-api.com/api/v1/digimon?name=" + encodeURIComponent(nome)
        );

        // Verifica se a API deu algum erro
        if (!resposta.ok) {
            throw new Error("Erro na API");
        }

        // Transforma a resposta em JSON
        const dados = await resposta.json();

        // Verifica se encontrou algum Digimon
        if (!dados.content || dados.content.length === 0) {

            // Mostra uma mensagem se não encontrou
            resultado.innerHTML =
                "<p>Este Digimon não foi encontrado.</p>";

            return;
        }

        // Pega o primeiro resultado
        const digimon = dados.content[0];

        // Busca os dados completos usando o ID
        const respostaCompleta = await fetch(
            "https://digi-api.com/api/v1/digimon/" + digimon.id
        );

        // Verifica se deu erro
        if (!respostaCompleta.ok) {
            throw new Error("Erro ao buscar os dados");
        }

        // Pega os dados completos
        const dadosCompletos = await respostaCompleta.json();

        // Pega o nome
        const nomeDigimon = dadosCompletos.name;

        // Pega a imagem
        const imagem = dadosCompletos.images[0].href;

        // Pega o nível
        const nivel = dadosCompletos.levels[0].level;

        // Mostra o card na tela
        resultado.innerHTML = `
            <div class="card-digimon">

                <img src="${imagem}" alt="${nomeDigimon}">

                <h2>${nomeDigimon}</h2>

                <p>Nível: ${nivel}</p>

            </div>
        `;

        // Pega o card que acabou de ser criado
        const card = document.querySelector(".card-digimon");


        // Muda a cor da borda de acordo com o nível
        if (nivel === "In Training") {
            card.classList.add("level-in-training");
        }

        if (nivel === "Rookie") {
            card.classList.add("level-rookie");
        }

        if (nivel === "Champion") {
            card.classList.add("level-champion");
        }

        if (nivel === "Ultimate") {
            card.classList.add("level-ultimate");
        }

        if (nivel === "Mega") {
            card.classList.add("level-mega");
        }

    } catch (erro) {

        /*
        O catch captura algum erro que aconteceu
        durante a busca na API.
        */
        resultado.innerHTML =
            "<p>Não foi possível realizar a busca.</p>";
    }
}

// Quando clicar no botão, chama a função
botao.addEventListener("click", buscarDigimon);

// Permite pesquisar apertando Enter
input.addEventListener("keyup", function(event) {

    if (event.key === "Enter") {
        buscarDigimon();
    }

});