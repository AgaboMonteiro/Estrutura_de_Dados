//Criar classe atendimento contendo (Nome, CPF, Data e Hora) dentro da pasta models.
//Data e hora devem não devem ser inputs no html e sim a partir de funções de utils.js.

class Atendimento {
    #nome;
    #cpf;
    #dataNascimento;
    #data;
    #hora;

    constructor(nome, cpf, dataNascimento, data, hora) {
        this.#nome = nome;
        this.#cpf = cpf;
        this.#dataNascimento = dataNascimento;
        this.#data = data;
        this.#hora = hora;
    }

    get nome() {
        return this.#nome;
    }

    get cpf() {
        return this.#cpf;
    }

    get data() {
        return this.#data;
    }

    get hora() {
        return this.#hora;
    }

     get dataNascimento() { 
        return this.#dataNascimento; 
    } 

    toString() {
        return `${this.#nome} | CPF: ${this.#cpf} | Nasc: ${this.#dataNascimento} | Data: ${this.#data} | Hora: ${this.#hora}`;
    }
}