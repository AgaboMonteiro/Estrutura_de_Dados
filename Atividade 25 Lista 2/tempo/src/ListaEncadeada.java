public class ListaEncadeada {

    // Classe do nó
    static class No {
        int dado;
        No prox; //ponteiro

        No(int dado) { //construtor
            this.dado = dado;
            this.prox = null;
        }
    }

    No inicio; //ponteiro para o 1 elemento da lista

    // Inserir no final da lista
    public void inserir(int valor) {

        No novo = new No(valor); //cria um novo nó

        if (inicio == null) { //se a lista estiver vazia o novo nó sera o primeiro
            inicio = novo;
            return;
        }

        No atual = inicio; //começa a percorrer a lista pelo 1 nó

        while (atual.prox != null) {//enquanto o proximo não for vazio, avança
            atual = atual.prox;
        }

        atual.prox = novo;// liga o último nó ao novo nó
    }

    // Mostrar lista com todos elementos
    public void mostrar() {

        No atual = inicio; //começa pelo primeiro

        while (atual != null) {//enuanto for diferente de vazio mostra o dado e passa para o proximo
            System.out.print(atual.dado + " ");
            atual = atual.prox;
        }

        System.out.println();
    }

    // Considerando uma lista encadeada, implemente a função: pesquisa() retornando 1 se o dado foi
    //encontrada e 0, caso contrário.
    // ===============================
    public int pesquisa(int valor) {

        No atual = inicio;// começa pelo primeiro nó

        while (atual != null) { //enquanto for diferente de vazio percorre

            if (atual.dado == valor) {//compara o valor se for igual dá 1
                return 1;
            }

            atual = atual.prox;//vai para o prox nó
        }

        return 0;//percorreu tudo e não acha retorna 0
    }

    // Escreva uma função que verifique se uma lista encadeada que contém números inteiros está em
    //ordem crescente (Menores no início, maiores ao fim).
    public void crescente() {

        if (inicio == null){//se estiver vazio retorna como ordem crescente
            System.out.println("Não há elementos na lista");
        return;}

        No atual = inicio;

        while (atual.prox != null) {

            if (atual.dado > atual.prox.dado) {
                System.out.println("Lista nãp está em ordem crescente ");
                return;
            }
            atual = atual.prox;
        }

        System.out.println("Lista está em ordem crescente");
    }


    // Escreva uma função que remova todos os elementos com valores pares de uma lista encadeada.
    public void removerPares() {

        while (inicio != null && inicio.dado % 2 == 0) {//se for par ele muda o inicio se não vai para o proximo while, assim elimina os pares no começo
            inicio = inicio.prox;
        }

        No atual = inicio;//variavel para percorre lista

        while (atual != null && atual.prox != null) {

            if (atual.prox.dado % 2 == 0) {//se o proximo for par ele aponta para o prox, pulando o par
                atual.prox = atual.prox.prox;
            } else {
                atual = atual.prox;//se n for par ele aponta para o prox
            }

        }
    }

    // Programa principal
    public static void main(String[] args) {

        ListaEncadeada lista = new ListaEncadeada();

        lista.inserir(2);
        lista.inserir(5);
        lista.inserir(8);
        lista.inserir(9);
        lista.inserir(10);

        System.out.print("Lista: ");
        lista.mostrar();

        System.out.println("Pesquisa 8: " + lista.pesquisa(8));
        System.out.println("Pesquisa 20: " + lista.pesquisa(20));

        lista.crescente();

        lista.removerPares();

        System.out.print("Após remover pares: ");
        lista.mostrar();
    }
}