//arquivo de sript começa com letra minuscula

const minhaFila = new Fila(5);

function adicionarElemento() {//interação direta com o html, por isso tem o function, na classe não tem pois não existe essa interação
  const novoElemento = document.getElementById("txtnovoNome");//colocando o nome no novoElemento

  if (minhaFila.enqueue(novoElemento.value)) { //se deu certo de inserir
    mostrarFila();
    novoElemento.value="";
    novoElemento.focus();
  } else {
    alert("Fila cheia!");
  }


  function mostrarFila(){
    const filaElemento = document.getElementById("lblPessoasFila");
    filaElemento.textContent = minhaFila.toString();
  }

  function removerElemento(){
    

  }

}
