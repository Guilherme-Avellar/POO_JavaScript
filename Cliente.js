
// Para exporta essa classe para outra precisa do export
export class Cliente {

    // atributos privados ('#' no inicio do nome do atributo)
    #nome;
    #cpf;
    #aniversarioData;
    #dataAtual; // teria que se usar um API para pegar a data atual

    constructor (nome, cpf, aniversarioData) {
        this.#nome = nome;
        this.#cpf = cpf;
        this.#aniversarioData = aniversarioData
    }

    // getters e setters são separados, diferentemente de java, que se escreve junto

    // exemplo de set
    set nome(novoNome) {
        this.#nome = novoNome;
    }

    // exemplo de getters
    get nome () {
        return this.#nome;
    }

    /* OBS: 
    para usar esses métodos não precisa se por o get ou set, basta por o nome
    que vem depois mesmo, exemplo: cliente001.nome
    ou para o set: cliente001.nome("nome qualquer")
    */

    get CPF () {
        return this.#cpf;
    }

    // exemplo de método privado
    #calcularIdade () {
        return this.#dataAtual - this.#aniversarioData;
    }

    get Idade () {
        return this.#calcularIdade();
    }

}