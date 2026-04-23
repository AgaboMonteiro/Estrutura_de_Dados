class FilaEncadeada {
  #inicio;
  #fim;
  #qtd;

  constructor() {
    this.#inicio = null;
    this.#fim = null;
    this.#qtd = 0;
  }

  isEmpty() {
    return this.#inicio === null; // verdadeiro se quantidade for igual a zero
  }

  //Fila circular é uma estrutura de dados onde os índices se comportam de forma cíclica, reutilizando posições liberadas através de aritmética modular.
  enqueue(novoElemento) {
    
      const novoNo = new No(novoElemento);
      if(this.isEmpty()) // se tiver vazio, o nincio aponta para o novo nó
        this.#inicio = novoNo;
      else
        this.#fim.proximo = novoNo;

      this.#fim = novoNo;
      this.#qtd++;
      return true;

  }

  dequeue() {
    if (!this.isEmpty()) {
      //se não estiver vazio
      let removido = this.#inicio.dado;
      //remover?
      this.#inicio = this.#inicio.proximo;

      this.#qtd--; //decrementa a quantidade

      console.log(`Removido: ${removido}`);
      console.log(`Quantidade: ${this.#qtd}`);
      return removido;
    }

    return null; //retorna nulo
    //return this.#elementos[this.#inicio++]; //retornando o elemento na posição inicio (++ se estiver na frente da variavel executa a linha inteira para depois fazer o incremento)
  }

  first() {
    if (!this.isEmpty()) 
      return this.#inicio.dado;
    else return null;
  }
//last
  last() {
    if (!this.isEmpty()) 
      return this.#fim.dado;
    else return null;
  }

  toString() {
    let resultado = "";
    let i = this.#inicio; //pega o inicio
    while(aux!=null){
      resultado+=aux.dado + " | ";
      aux = proximo; // andando na fila 
    }
    return resultado;
  }

  [Symbol.iterator]() {
    let aux = this.#inicio;

    return {
      next() {
        if(aux!=null){ //se aux é nulo done true
          const value = aux.dado;
          aux = aux.proximo;
        
          return { value, done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}//fim classe

