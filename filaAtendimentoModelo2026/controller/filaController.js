//arquivo de sript começa com letra minuscula

const minhaFila = new Fila(5);

function adicionarElemento() {//interação direta com o html, por isso tem o function, na classe não tem pois não existe essa interação
  const nome = document.getElementById("txtnovoNome");//colocando o nome no novoElemento
  const cpf = document.getElementById("txtnovoCpf");//ADD CPF

  const novoAtendimento = new Atendimento(nome.value,cpf.value); //A inserção na fila deve ser de objetos do tipo atendimento

  const = data = obterDataAtual()



  if (minhaFila.enqueue(novoAtendimento)) {//se deu certo de inserir
    mostrarFila(); //mostrar fila
    nome.value = ""; 
    nome.focus(); //clar imput
    cpf.value = "";
  } else {
    alert("Fila cheia!");
  }
}


  function mostrarFila(){
    const filaElemento = document.getElementById("listFila");
    //filaElemento.textContent = minhaFila.toString();
    filaElemento.innerHTML="";
    for (let item of minhaFila) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    // AGORA MOSTRA OBJETO COMPLETO
    li.textContent = item.toString();

    filaElemento.appendChild(li);
  }
}


    /*for(let item of minhaFila){
      const listItem = document.createElement("li"); // para cada elemento da minha fila crio um li
      listItem.textContent = item; // coloca o elementp da fila
      filaElemento.appendChild(listItem); // e pega o lista item e faz parte do ul
    }
  }
    “ssa função implementa o atendimento de uma fila FIFO. 
    Ela remove o primeiro elemento usando dequeue, valida se a fila não está vazia, 
    calcula o tempo de espera com base no horário de chegada, 
    atualiza a interface com os dados do atendimento e persiste o último atendido no localStorage. 
    Caso a fila esteja vazia, há tratamento com alerta ao usuário.*/

    //Atender pessoa, mostrar hora de entrada, saída e tempo de fila

  function removerElemento(){ //funcao remove elemento
    let removido = minhaFila.dequeue(); //chama método dequeue, remove primeiro elemento
    if(removido!==null){ //se a fila for diferente de nulo

      const mensagemRemocao = document.getElementById("mensagem-remocao");//busca o elemento html para mostrar a msg
      const horaSaida = obterHoraAtual(); //obtem a hora atual do momento do atendimento
      const tempoEspera = calcularDiferencaHoras(removido.hora, horaSaida); ////chama a funcao diferença de horas para calcular o tempo de espera
      
      const mensagem = `Atendido: ${removido.nome}`;//mensagem exibida no painel e salva localStorage
      mostrarFila(); // Atualiza o label na tela; Apresentar pessoas na fila (Mostra o nome de todos da fila)

      //Insere uma mensagem dinâmica no HTML
      mensagemRemocao.textContent = (`Atendido: ${removido.nome}, Chegou ás ${removido.hora} está sendo atendido(a) às ${horaSaida}. Tempo de espera: ${tempoEspera}`)
      
      // Armazenar no localStorage para o painel. Chave: ultimoAtendimento, mensagem: mensagem
      localStorage.setItem('ultimoAtendido', mensagem); //Ao remover uma pessoa da fila (no processo de atendimento, realizado no filaController.js), deve-se armazenar os dados do último atendido no localStorage.

    }
    else {
      alert("A fila já está vazia!");
    }
  }

  function buscarElemento(){
    //pegar valor input
    const buscarElemento = document.getElementById("txtnovoCpf"); //Buscar por CPF
    let encontrado = false;
    let cont = 0;
    for(let item of minhaFila){
      cont ++;
      if(buscarElemento.value === item.cpf){
          alert("Encontrado na fila na posição"+ cont);
          encontrado = true;
        }
      
    }
    if(!encontrado)
      alert ("Não encontrado na fila");

  }// fim busca

  //nome
  //cpf
  //data e hora
  

