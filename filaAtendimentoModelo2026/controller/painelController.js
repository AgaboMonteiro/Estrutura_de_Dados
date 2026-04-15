function atualizarUltimoAtendimento(){ //Criar uma função chamada atualizarAtendimento contendo:
    const ultimo = localStorage.getItem('ultimoAtendido'); 
    
        document.getElementById('ultimoAtendimento').textContent = ultimo; //Pega um elemento do HTML com esse ID

}

// Chamar no corpo do script 
atualizarUltimoAtendimento(); //Atualiza o texto exibido na tela com o valor do localStorage

// A função deve ser chamada no corpo do painelController.js e definido o refresh da página a cada 1000ms
setInterval(atualizarUltimoAtendimento,1000);

