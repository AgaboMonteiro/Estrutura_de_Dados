public class FilaDinamica {
    No inicio;
    No fim;
    int qtd;

    public FilaDinamica(){
        inicio = null;
        fim = null;
        qtd = 0;
    }

    public void enqueue(int valor){
        No novo = new No(valor);
        if (fim == null){
            inicio = novo;
            fim = novo;
        } else {
            fim.proximo = novo;
            fim = novo;
        }
        qtd++;
    }

    //16
    public int posicao (int valor){
        No atual = inicio;
        int pos = 0;

        while (atual !=null){
            if (atual.dado == valor){
                return pos;
            }
            atual = atual.proximo;
            pos++;
        }
        return -1;
    }

    //17
    public int ultimo(){
        if (fim == null){
            throw new RuntimeException("Fila vazia");
        }
        return fim.dado;
    }

    //18
    public int tamanho(){
        return qtd;
    }

    //20
    public boolean crescente(){
        No atual = inicio;

        while(atual != null && atual.proximo != null) {
            if (atual.dado > atual.proximo.dado){
                return false;
            }
            atual = atual.proximo;
        }
        return true;
    }

}
