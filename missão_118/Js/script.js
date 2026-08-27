// =========================
// CADASTRO DO USUÁRIO
// =========================
function cadastrar() {
    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    // Validação simples para impedir o envio de campos vazios.
    if (nome === "" || sobrenome === "" || email === "" || senha === "") {
        alert("Preencha todos os campos");
        return;
    }

    localStorage.setItem("nome", nome);
    localStorage.setItem("sobrenome", sobrenome);
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);

    alert("Cadastro realizado!");
    window.location.href = "login.html";
}

// =========================
// LOGIN DO USUÁRIO
// =========================
function login() {
    const emailDigitado = document.getElementById("loginEmail").value.trim();
    const senhaDigitada = document.getElementById("loginSenha").value;
    const emailSalvo = localStorage.getItem("email");
    const senhaSalva = localStorage.getItem("senha");

    if (emailDigitado === "" || senhaDigitada === "") {
        alert("Preencha o e-mail e a senha");
        return;
    }

    if (emailDigitado === emailSalvo && senhaDigitada === senhaSalva) {
        alert("Login realizado!");
        window.location.href = "gruposs.html";
    } else {
        alert("E-mail ou senha incorretos");
    }
}

function entrarGrupo(nomeGrupo) {
    alert("Você entrou em: " + nomeGrupo);
}

// =========================
// INTERAÇÕES RESPONSIVAS
// =========================
document.addEventListener("DOMContentLoaded", function () {
    const botaoMenu = document.getElementById("menuToggle");
    const menu = document.getElementById("menuPrincipal");

    // Abre e fecha o menu hambúrguer em telas menores.
    if (botaoMenu && menu) {
        botaoMenu.addEventListener("click", function () {
            const menuEstaAberto = menu.classList.toggle("aberto");

            botaoMenu.setAttribute("aria-expanded", menuEstaAberto);
            botaoMenu.textContent = menuEstaAberto ? "✕ Fechar" : "☰ Menu";
        });

        // Fecha o menu depois que o usuário escolhe uma opção no celular.
        const linksMenu = menu.querySelectorAll("a");
        linksMenu.forEach(function (link) {
            link.addEventListener("click", function () {
                if (window.innerWidth <= 700) {
                    menu.classList.remove("aberto");
                    botaoMenu.setAttribute("aria-expanded", "false");
                    botaoMenu.textContent = "☰ Menu";
                }
            });
        });
    }

    // Os cards recebem interação tanto com mouse quanto com toque.
    const cardsInterativos = document.querySelectorAll(".touch-card");

    cardsInterativos.forEach(function (card) {
        // Evento tradicional de mouse.
        card.addEventListener("mouseenter", function () {
            card.classList.add("mouse-ativo");
        });

        card.addEventListener("mouseleave", function () {
            card.classList.remove("mouse-ativo");
        });

        // EVENTO DE TOQUE 1: acontece quando o dedo encosta no card.
        card.addEventListener("touchstart", function () {
            card.classList.add("toque-ativo");
        }, { passive: true });

        // EVENTO DE TOQUE 2: acontece quando o dedo sai do card.
        card.addEventListener("touchend", function () {
            card.classList.remove("toque-ativo");
        }, { passive: true });

        // Evita que o efeito fique preso caso o toque seja interrompido.
        card.addEventListener("touchcancel", function () {
            card.classList.remove("toque-ativo");
        }, { passive: true });
    });
});
