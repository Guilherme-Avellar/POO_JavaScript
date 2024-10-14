import { Cliente } from "./Cliente.js";


export class ContaCorrente extends Cliente{

    // atributos, exemplo de como se declara:
    // agencia111;
    // saldo111 = 111;

    // atributos privados (seria 'private' em JAVA), exemplo de declaração:
    #agencia;
    #saldo;

    // exemplo de variavel de classe, muito parecido com JAVA
    static numeroDeContas;

    constructor(agencia, saldo, nome, cpf, aniversarioData) {
        super(nome, cpf, aniversarioData);
        this.#agencia = agencia;
        this.#saldo = saldo;

        // conta o número total de objetos criados, nesse caso o número de contas correntes
        ContaCorrente.numeroDeContas++;
    }

    getAgencia() {
        return this.#agencia;
    }

    getSaldo() {
        return this.#saldo;
    }

    // outro método, exemplo de estrutura
    sacar(valor) {

        // exemplo de EARLY RETURN:
        if (valor <= 0) return;
        // Quando o código do if ocupa apenas uma linha não precisa de chaves.
        // Nesse exemplo, não retornaria nada caso a condição fosse verdadeira e finalizaria o método, não
        // executaria nada depois dele

        // o saldo precisa ser maior ou igaul ao valor, e o valor precisa ser maior que zero
        if( (this.#saldo >= valor) && (valor > 0) ) {
            this.#saldo = this.#saldo - valor;
        }
    }

    depositar(valor) {
        if(valor > 0) {
            this.#saldo = this.#saldo + valor;
        }
    }
    
    // Quem chama essa função quer tirar dinheiro da sua conta e colocar em outra
    transferir(valor, conta) {
        this.ContaCorrente.sacar(valor);
        conta.depositar(valor);
    }
    /*  OBS:
        Quando se passa um objeto por parâmetro (como o caso acima), há de se tomar
        cuidado, porque se está passando uma referência. Em JS a alocação de memória
        é implícita, não é como o C, por exemplo, que há a necessidade de deixar explícito
        o que é referência ou não.
    */ 

}


// exemplo de uso de atributos privados
// const teste = new ContaCorrente();
// console.log(teste.#saldo); // => erro, porque não é possivel acessar um atributo privado diretamente
// console.log(teste.getNome); // => emprime o valor do atributo, este não esta privado
