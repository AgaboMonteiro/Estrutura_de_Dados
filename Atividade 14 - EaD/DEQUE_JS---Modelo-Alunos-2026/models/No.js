// model/No.js

class No{
    #dado;
    #anterior;
    #proximo;

    constructor (novoDado){
        this.#dado = novoDado;
        this.#proximo = null; 
        this.#anterior = null;       
    }

    get dado (){
        return this.#dado;
    }
    set dado (novoDado){
        this.#dado = novoDado;
    }

    get anterior(){
        return this.#anterior
    }
    set anterior (novoAnterior){
        this.#anterior = novoAnterior;
    }

    get proximo(){
        return this.#proximo
    }
    set proximo (novoProximo){
        this.#proximo = novoProximo;
    }

    toString(){
        return this.#dado.toString();
    }

}