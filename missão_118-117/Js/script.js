function cadastrar() {

    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

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


function login() {

    let senhaDigitada = document.getElementById("loginSenha").value;
    let senhaSalva = localStorage.getItem("senha");

    if (senhaDigitada === senhaSalva) {

        alert("Login realizado!");
        window.location.href = "gruposs.html";

    } else { 

        alert("Senha incorreta");
    }
}


function entrarGrupo(nomeGrupo){
    alert("Você entrou em: " + nomeGrupo);
}