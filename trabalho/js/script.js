// Pegando os elementos do HTML
const input = document.getElementById("input-busca");
const botao = document.getElementById("btn-busca");
const resultado = document.getElementById("container-resultado");

// Função que faz a busca do Digimon
async function buscarDigimon() {

    // Pega o nome que foi digitado
    const nome = input.value.trim();

    // Verifica se o campo está vazio
    if (nome === "") {
        resultado.innerHTML = "<p>Digite o nome de um Digimon.</p>";
        return;
    }

    try {

        // Faz a busca na API
        const resposta = await fetch(
            "https://digimon-api.com/api/v1/digimon/" + nome
        );

        // Verifica se a API encontrou o Digimon
        if (resposta.status === 404) {

            // Se for 404, significa que o Digimon não existe
            resultado.innerHTML =
                "<p>Este Digimon não foi encontrado.</p>";

            return;
        }

        // Se acontecer outro erro
        if (!resposta.ok) {
            resultado.innerHTML =
                "<p>Ocorreu um erro na busca.</p>";

            return;
        }

        // Transforma a resposta em JSON
        const dados = await resposta.json();

        // Pega o nome do Digimon
        const nomeDigimon = dados.name;

        // Pega o nível do Digimon
        const nivel = dados.level;

        // Pega a imagem do Digimon
        const imagem = dados.images[0].href;

        // Cria o card do Digimon
        resultado.innerHTML = `
            <div class="card-digimon">
                
                <img src="${imagem}" alt="${nomeDigimon}">

                <h2>${nomeDigimon}</h2>

                <p>Nível: ${nivel}</p>

            </div>
        `;

        // Verifica o nível para mudar a borda do card
        const card = document.querySelector(".card-digimon");

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
        O catch serve para capturar erros.

        Por exemplo, se a internet estiver com problema
        ou a API não responder, essa mensagem será mostrada.
        */

        resultado.innerHTML =
            "<p>Não foi possível realizar a busca.</p>";
    }
}

// Quando clicar no botão, faz a busca
botao.addEventListener("click", buscarDigimon);

// Também permite pesquisar apertando Enter
input.addEventListener("keyup", function(event) {

    if (event.key === "Enter") {
        buscarDigimon();
    }

});