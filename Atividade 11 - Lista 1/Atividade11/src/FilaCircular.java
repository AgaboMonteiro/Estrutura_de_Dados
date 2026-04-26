public class FilaCircular {
    int[] fila;
    int inicio;
    int fim;
    int qtd;
    int tamanho;

    public FilaCircular(int tamanho){
        this.tamanho = tamanho;
        fila = new int [tamanho];
        inicio = 0;
        fim = 0;
        qtd = 0;
    }

    //15
    public boolean existe(int valor){
        for (int i = 0; i < qtd; i++){
            int indice = (inicio + 1) % tamanho;
            if (fila[indice] == valor){
                return true;
            }
        }
        return false;
    }
}
