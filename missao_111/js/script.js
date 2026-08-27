const botaoGravador = document.getElementById("btn-gravador");
const statusGravacao = document.getElementById("status-gravacao");

botaoGravador.addEventListener("mousedown", function() {
    botaoGravador.style.backgroundColor = "red";
    botaoGravador.textContent = "🔴 Gravando...";
    statusGravacao.textContent = "Status: Gravando áudio...";
});

botaoGravador.addEventListener("mouseup", function() {
    botaoGravador.style.backgroundColor = "";
    botaoGravador.textContent = "🎤 Clique e Segure para Gravar";
    statusGravacao.textContent = "Status: Gravação concluída e enviada!";
});