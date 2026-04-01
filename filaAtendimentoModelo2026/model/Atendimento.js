class Atendimento {
    #nome;
    #cpf;
    #data;
    #hora;

    constructor(nome, cpf) {
        this.#nome = nome;
        this.#cpf = cpf;

        this.#data = obterDataAtual();
        this.#hora = obterHoraAtual();
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

    toString() {
        return `${this.#nome} | CPF: ${this.#cpf} | Data: ${this.#data} | Hora: ${this.#hora}`;
    }
}