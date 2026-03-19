class Fila {
  #inicio;
  #fim;
  #qtd;
  #elementos;

  constructor(tamanho = 10) {
    this.#inicio = 0;
    this.#fim = -1;
    this.#qtd = 0;
    this.#elementos = new Array(tamanho);
  }

  isFull() {
    //por padrão o método vai ser público
    return this.#fim === this.#elementos.length - 1; //se o fim estiver na ultima posição retorna verdadeiro, está cheio
  }

  isEmpty() {
    return this.#qtd === 0; // verdadeiro se quantidade for igual a zero
  }

  enqueue(elemento) {
    //recebe o dado que a gente vai passar
    if (!this.isFull()) {
      //se for diferente de cheio
      this.#fim++;
      this.#elementos[this.#fim] = elemento; //meu vetor na posição do fim recebe elemento
      this.#qtd++; //incrementa a quantidade
      console.log(
        `enqueue: início=${this.#inicio}, fim=${this.#fim}, qtd=${this.#qtd}`, //interpolação do javascript
      );
      return true;
    }
    return false;
  }

  dequeue() {
    if (this.isEmpty())
      //se estiver vazio
      return null; //retorna nulo

    this.#qtd--; //decrementa a quantidade
    return this.#elementos[this.#inicio++]; //retornando o elemento na posição inicio (++ se estiver na frente da variavel executa a linha inteira para depois fazer o incremento)
  }

  first() {
    if (!this.isEmpty()) return this.#elementos[this.#inicio];
    else return null;
  }

  last() {
    if (!this.isEmpty()) return this.#elementos[this.#fim];
    else return null;
  }

  toString() {
    let resultado = "";
    for (let i = this.#inicio; i <= this.#fim; i++) { //do inicio até menor ou igual o fim
      resultado += `${this.#elementos[i]} | `;//interpolação de string por |
    }
    return resultado;
  }

}
