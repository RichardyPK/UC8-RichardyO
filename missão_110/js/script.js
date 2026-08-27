   // Função para registrar logs no painel
   const painelLog =document.getElementById('log-painel');

    function registrarLog(mensagem) {

    const novaLinha = document.createElement('div');
    novaLinha.textContent = `[${new Date().toLocaleTimeString()}] ${mensagem}`;

    painelLog.appendChild(novaLinha);
}

  // Eventos de Mouse: clique
  const btnClique = document.getElementById('btn-clique');
  const areaMouse = document.getElementById('area-mouse');

  btnClique.addEventListener('click', function() {
    registrarLog("Evento de mouse: Evento 'click' disparado!");
  });

  // Eventos de Mouse: mouseover 
  areaMouse.addEventListener('mouseenter', function() {
    areaMouse.textContent = "Mouse entrou na área!";
    areaMouse.style.backgroundColor = "#2ecc71"; 
    registrarLog("Evento de mouse: Evento 'mouseenter' disparado!");
});

 // Eventos de Mouse: mouseleave
  areaMouse.addEventListener('mouseleave', function() {
    areaMouse.textContent = "Mouse saiu da área!";
    areaMouse.style.backgroundColor = "#ff0000"; 
    registrarLog("Evento de mouse: Evento 'mouseleave' disparado!");
});

 // Eventos de Teclado: keydown
 const campoTeclado = document.getElementById('campo-teclado');
 campoTeclado.addEventListener('keydown', function(event) {
    registrarLog("Teclado: Evento 'Keydown' disparado!");
 });    

  // Eventos de Teclado: keyup 
    campoTeclado.addEventListener('keyup', function(event) {
    registrarLog("[TECLA LIBERADA]Teclado: Evento 'Keyup' disparado!");
  });

  //Evento de Formulário: senvio
  const meuFormulario = document.getElementById('meu-formulario');
  const campoInput = document.getElementById('campo-input');

  campoInput.addEventListener('input', function() {
    registrarLog(`[INPUT]Formulário: Evento 'input' disparado! -> Valor atual: "${campoInput.value}"`);
  });

 // Evento de Formulário: submit
 // meuFormulario.addEventListener('submit', function(event) {
 //  event.preventDefault(); // Evita o envio do formulário
 //   registrarLog("[SUBMITE]Formulário: Evento 'submit'  disparado!");
//  });

 //Isso vai "funcionar", mas vai capturar apenas o clique no botão de envio, não o envio do formulario em si. Para capturar o envio do formulário, é melhor usar o evento 'submit' no próprio formulário.
 const campoEnvio  = document.getElementById('campo-envio');
 meuFormulario.addEventListener('click', function(evento) {
    evento.preventDefault(); // Evita o envio do formulário
    registrarLog("[SUBMIT]Formulário: Evento 'submit' disparado!");
  });