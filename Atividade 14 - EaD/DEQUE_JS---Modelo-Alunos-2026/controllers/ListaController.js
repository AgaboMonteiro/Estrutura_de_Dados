const minhaLista = new LinkedList();
//---------------------------------------------------------------------------------------------
function limpaInputs() {
    document.getElementById("txtnovaTarefa").value = "";
    document.getElementById("txtnovaPrioridade").value = "";
    document.getElementById("txtIndice").value = "";
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
//--------------------------------------------------------------------------------------------
 function adicionarElementoInicio() {
  const novaTarefa = leiaDadosTarefa();
    if(novaTarefa !== null){
        minhaLista.addFirst(novaTarefa);
        alert("Inserido no início!");
        atualizarLista();
        limpaInputs();
    }

    //TODO
 }

 function adicionarElementoPorPrioridade(){
  const novaTarefa = leiaDadosTarefa();

  if (novaTarefa.prioridade > minhaLista.getLast.prioridade)
    minhaLista.addLast(novaTarefa);
  //percorrer
  let posi = 0;
  for (const tarefa of minhaLista)
    //prioridade da nova => prioridade atual
  // pos ++
  // sa for
  // inserir addAtIndex (novoDado,pos);



 }
 //------------------------------------------------------------------------------------------------------
  function adicionarElementoFinal() {
    const novaTarefa = leiaDadosTarefa();  
    minhaLista.addLast(novaTarefa);
    alert("Inserido!");
    atualizarLista();
    limpaInputs();
  }
  //--------------------------------------------------------------------------------------------
  function adicionarIndice() {
    const novaTarefa = leiaDadosTarefa();
    const indice = document.getElementById("txtIndice").value.trim();

    minhaLista.addAtIndex(novaTarefa,indice);
    atualizarLista();
    limpaInputs();
  }
//--------------------------------------------------------------------------------------------
 // Função para remover o primeiro elemento da lista
 function removerElementoInicio() {
    if(!minhaLista.isEmpty()){
      const tarefaRealizada = minhaLista.removeFirst();
      mostrarMensagemRemocao(tarefaRealizada);
      atualizarLista();
    }
    else{
      alert("Lista de Tarefas Vazia");
    }
   
 }
 //--------------------------------------------------------------------------------------------
 // Função para remover o ultimo elemento da lista
 function removerElementoFinal() {
  if(!minhaLista.isEmpty()){
        const tarefaRealizada = minhaLista.removeLast();
        mostrarMensagemRemocao(tarefaRealizada);
        atualizarLista();
    }
    else{
        alert("Lista de Tarefas Vazia");
    }
   // implemente
}

//--------------------------------------------------------------------------------------------
function mostrarMensagemRemocao(tarefaRealizada) {
    const mensagem = document.getElementById("mensagem-remocao");
    mensagem.innerHTML ="Tarefa realizada: "+ tarefaRealizada.descricao;
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
   if(!minhaLista.isEmpty()){
      lblTarefas.innerHTML = "Lista de Tarefas";
      for(const tarefa of minhaLista){
          const novaLinha = document.createElement("li");
          novaLinha.innerHTML = tarefa.toString();
          listaTarefas.appendChild(novaLinha);
      }
   }
   else{
        lblTarefas.innerHTML = "Lista de Tarefas Vazia";
      }
 }

