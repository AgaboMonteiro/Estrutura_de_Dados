const minhaLista = new LinkedList();
//---------------------------------------------------------------------------------------------
function limpaInputs() {
  document.getElementById("txtnovaTarefa").value = "";
  document.getElementById("txtnovaPrioridade").value = "";
  document.getElementById("txtnovaTarefa").focus();
}
//--------------------------------------------------------------------------------------------
function leiaDadosTarefa() {
  const descricao = document.getElementById("txtnovaTarefa").value.trim();
  const prioridade = document.getElementById("txtnovaPrioridade").value.trim();
  if (descricao === "" || prioridade === "") {
    alert("Preencha os campos de descrição e prioridade!");
    return null;
  }
  return new Tarefa(descricao, prioridade, obterDataAtual(), obterHoraAtual());
}
/*--------------------------------------------------------------------------------------------
function adicionarElementoInicio() {
  const novaTarefa = leiaDadosTarefa()
  minhaLista.addFirst(novaTarefa);
  atualizarLista();
  alert("Inserido com sucesso !");
  limpaInputs();
}
------------------------------------------------------------------------------------------------------
function adicionarElementoFinal() {
  const novaTarefa = leiaDadosTarefa();
  minhaLista.addLast(novaTarefa);
  atualizarLista();
  alert("Inserido com sucesso !");
  limpaInputs();
}
//--------------------------------------------------------------------------------------------
function adicionarIndice() {
  const novaTarefa = leiaDadosTarefa();
  const indice = document.getElementById("txtIndice")
  minhaLista.addAtIndex(novaTarefa,  indice.value);
  atualizarLista();
  limpaInputs();
}
//--------------------------------------------------------------------------------------------*/

function tarefaMaisAntiga() {
    if(minhaLista.isEmpty()){
      return alert("Lista de Tarefas Vazia");
    }
    let tarefaAntiga = minhaLista.getFirst();
    for (const tarefa of minhaLista) {
      if (isMenor(tarefa.data, tarefa.hora,tarefaAntiga.data,tarefaAntiga.hora))
        tarefaAntiga = tarefa;
       // comprar a tarefaAntiga com cada tarefa usando a funcao acima
    }      
    alert("Tarefa mais antiga: " + tarefaAntiga.toString());

}
//--------------------------------------------------------------------------------------------

/*Também foi necessário converter as prioridades para número usando parseInt(), 
porque os valores vindos do input HTML são textos (string). 
Sem essa conversão, o JavaScript poderia comparar valores de forma incorreta.*/
function adicionarPorPrioridade() {
  const novaTarefa = leiaDadosTarefa();

  if (novaTarefa === null) return;

  const novaPrioridade = parseInt(novaTarefa.prioridade);

  if (minhaLista.isEmpty()) {
    minhaLista.addFirst(novaTarefa);
    atualizarLista();
    limpaInputs();
    return;
  }

  if (novaPrioridade >= parseInt(minhaLista.getLast().prioridade)) { //faltava parenteses
    minhaLista.addLast(novaTarefa);
    atualizarLista();
    limpaInputs();
    return;
  }

  if (novaPrioridade < parseInt(minhaLista.getFirst().prioridade)) {
    minhaLista.addFirst(novaTarefa);
    atualizarLista();
    limpaInputs();
    return;
  }

  // Procura posição 
  let pos = 0;

  for (const tarefa of minhaLista) {

    if (novaPrioridade < parseInt(tarefa.prioridade)) {
      minhaLista.addAtIndex(novaTarefa, pos);

      atualizarLista();
      limpaInputs();
      return;
    }

    pos++;
  }

  minhaLista.addLast(novaTarefa); //estava no for

  atualizarLista(); //atualizar a interface após inserir uma tarefa.
  limpaInputs();
}
//--------------------------------------------------------------------------------------------

// Função para remover o primeiro elemento da lista
function removerElementoInicio() {
  if (!minhaLista.isEmpty()) {
    const tarefaRealizada = minhaLista.removeFirst();
    mostrarMensagemRemocao(tarefaRealizada);
    atualizarLista();
    alert("Removido com sucesso !");
  }
  else {
    alert("Lista de Tarefas Vazia");
  }

}
//--------------------------------------------------------------------------------------------
// Função para remover o ultimo elemento da lista
function removerElementoFinal() {
  if (!minhaLista.isEmpty()) {
    const tarefaRealizada = minhaLista.removeLast();
    mostrarMensagemRemocao(tarefaRealizada);
    atualizarLista();
    alert("Removido com sucesso !");
  }
  else {
    alert("Lista de Tarefas Vazia");
  }
}

//--------------------------------------------------------------------------------------------
function mostrarMensagemRemocao(tarefaRealizada) {
  const mensagem = document.getElementById("mensagem-remocao");
  mensagem.innerHTML = "Tarefa realizada: " + tarefaRealizada.descricao;
  mensagem.style.display = "block";
}
//-------------------------------------------------------------------------------------------- 
// Função para atualizar a exibição da fila
function atualizarLista() {
  const listaTarefas =
    document.getElementById("list_listadeTarefas");
  const lblTarefas =
    document.getElementById("lblmostraTarefas");
  listaTarefas.innerHTML = "";    // limpar antes de mostrar
  if (!minhaLista.isEmpty()) {
    lblTarefas.innerHTML = "Lista de Tarefas";
    for (const tarefa of minhaLista) {
      const novaLinha = document.createElement("li");
      novaLinha.innerHTML = tarefa;
      listaTarefas.appendChild(novaLinha);
    }
  }
  else {
    lblTarefas.innerHTML = "Lista de Tarefas Vazia";
  }

}
