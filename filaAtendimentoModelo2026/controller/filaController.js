//arquivo de sript começa com letra minuscula

const minhaFila = new FilaEncadeada();
const filaPrioritaria = new FilaEncadeada();
const filaNormal = new FilaEncadeada();
let contadorPrioritaria = 0;

function adicionarElemento() {//interação direta com o html, por isso tem o function, na classe não tem pois não existe essa interação
  const nome = document.getElementById("txtnovoNome");//colocando o nome no novoElemento
  const cpf = document.getElementById("txtnovoCpf");//ADD CPF
  const dataNasc = document.getElementById("txtnovaData");
  const data = obterDataAtual();
  const hora = obterHoraAtual();

  const idade = calcularIdade(dataNasc.value); // calcula a idade

  const novoAtendimento = new Atendimento(nome.value, cpf.value, dataNasc.value, data, hora); //A inserção na fila deve ser de objetos do tipo atendimento

  if (idade >= 60) {
        filaPrioritaria.enqueue(novoAtendimento); // fila prioritária
  } else {
        filaNormal.enqueue(novoAtendimento);      // fila normal
  }
  
    mostrarFila();
    nome.value = ""; cpf.value = ""; dataNasc.value = "";
    nome.focus();
}



  function mostrarFila() {
    // Exibe fila prioritária
    const listaPrio = document.getElementById("listFilaPrioritaria");
    listaPrio.innerHTML = "";
    for (let item of filaPrioritaria) {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = item.toString();
        listaPrio.appendChild(li);
    }

    // Exibe fila normal
    const listaNorm = document.getElementById("listFilaNormal");
    listaNorm.innerHTML = "";
    for (let item of filaNormal) {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = item.toString();
        listaNorm.appendChild(li);
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
    let removido = null;

    // Regra: a cada 3 atendimentos prioritários, atende 1 normal
    if (!filaPrioritaria.isEmpty() && contadorPrioritaria < 3) {
        removido = filaPrioritaria.dequeue();
        contadorPrioritaria++;
    } else if (!filaNormal.isEmpty()) {
        removido = filaNormal.dequeue();
        contadorPrioritaria = 0; // reseta o contador
    } else if (!filaPrioritaria.isEmpty()) {
        // fila normal vazia, continua atendendo prioritária
        removido = filaPrioritaria.dequeue();
        contadorPrioritaria++;
    }

    if (removido !== null) {
        const mensagemRemocao = document.getElementById("mensagem-remocao");
        const horaSaida = obterHoraAtual();
        const tempoEspera = calcularDiferencaHoras(removido.hora, horaSaida);

        mensagemRemocao.textContent = `Atendido: ${removido.nome}, Chegou às ${removido.hora}, atendido às ${horaSaida}. Espera: ${tempoEspera}`;
        localStorage.setItem('ultimoAtendido', `Atendido: ${removido.nome}`);
        mostrarFila();
    } else {
        alert("As duas filas estão vazias!");
    }
}

  function buscarElemento(){
    //pegar valor input
    const buscarElemento = document.getElementById("txtnovoCpf"); //Buscar por CPF
    let encontrado = false;
    let cont = 0;

    for(let item of filaPrioritaria){
      cont ++;
      if(buscarElemento.value === item.cpf){
          alert(`Encontrado na Fila Prioritária, posição ${cont}`);
          encontrado = true;
        }
    }
    cont = 0;
    for (let item of filaNormal) {
        cont++;
        if (buscarElemento === item.cpf) {
            alert(`Encontrado na Fila Normal, posição ${cont}`);
            encontrado = true;
        }
    }

    if (!encontrado) alert("Não encontrado em nenhuma fila");
}
  

