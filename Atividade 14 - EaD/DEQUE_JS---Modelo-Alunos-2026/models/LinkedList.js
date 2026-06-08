// models/LinkedList.js
class LinkedList{
    #head;
    #tail;
    #qtd;


    constructor(){
        this.#head = null;
        this.#tail = null;
        this.#qtd = 0;
    }

    isEmpty(){
        return this.#head == null;
    }

    addFirst(novoDado){
        const novoNo = new No(novoDado);

        if(this.isEmpty()){
            this.#head = novoNo;
            this.#tail = novoNo;
            
        }
        else{
            novoNo.proximo = this.#head;
            this.#head.anterior = novoNo;
            this.#head = novoNo;
        }
        this.#qtd++;

        console.log("Inserido no início:");
        console.log(this.toString());

        return true
    }

    addLast(novoDado){
        const novoNo = new No(novoDado);
        if(this.isEmpty())
            this.#head = novoNo;
        else{
            novoNo.anterior = this.#tail;
            this.#tail.proximo = novoNo;
        }
        this.#tail = novoNo;
        this.#qtd++;

        console.log("Inserido no final:");
        console.log(this.toString());

        return true;
    }

    addAtIndex(novoDado, posicao){
        if (this.isEmpty()|| posicao<=0)
            return this.addFirst(novoDado);
        if(posicao >= this.#qtd)
            return this.addLast(novoDado);

        const novoNo = new No(novoDado);
        let aux = this.#head; // aux sai do inicio
        let posAtual = 0;
        while (posAtual < posicao-1){
            aux = aux.proximo;
            posAtual ++;
        }
        novoNo.proximo = aux.proximo;
        novoNo.anterior = aux;

        aux.proximo.anterior = novoNo;
        aux.proximo = novoNo;
        this.#qtd ++;
        console.log("Inserido na posição:");
        console.log(this.toString());
        return true;
    }


    removeFirst(){
        if(this.isEmpty())
            return null;

        const dadoRemovido = this.#head.dado;
        this.#head = this.#head.proximo;
        if (this.#head===null)
            this.#tail = null;
        else
            this.#head.anterior = null;

        this.#qtd--;

        console.log("Removido do início:");
        console.log(dadoRemovido.toString());

        console.log("Lista atual:");
        console.log(this.toString());

        return dadoRemovido;
    }

    removeLast(){
        if(this.isEmpty())
            return null;

        const dadoRemovido = this.#tail.dado;

        if(this.#head === this.#tail){
            this.#head = null;
            this.#tail = null;
        }
        else{
            this.#tail = this.#tail.anterior;
            this.#tail.proximo = null;
        }

        this.#qtd--;

        console.log("Removido do final:");
        console.log(dadoRemovido.toString());

        console.log("Lista atual:");
        console.log(this.toString());

        return dadoRemovido;
    }

    get length(){
        return this.#qtd;
    }


    toString(){

    let resultado = "";

    let atual = this.#head;

    while(atual !== null){

        resultado += atual.dado.toString() + "\n";

        atual = atual.proximo;
    }

    return resultado;
    }

    [Symbol.iterator]() {

    let noAtual = this.#head;

    return {

        next: function() {

            if(noAtual !== null){

                let valor = noAtual.dado;

                noAtual = noAtual.proximo;

                return {
                    value: valor,
                    done: false
                };
            }
            else{
                return {
                    done: true
                };
            }
        }
    };
}

 getLast(){
    if (!this.isEmpty())
        return this.#tail.dado;
    else
        return null;
}

      getFirst(){
      if (!this.isEmpty())
        return this.#head.dado;
      else
        return null;
  }
}