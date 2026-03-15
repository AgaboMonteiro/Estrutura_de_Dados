public class Pilha <T>{//pode criar uma pilha de qualquer tipo de dado, basta passar o tipo na hora de criar a pilha por isso o <T>
    private int topo;
    private T[] elementos;

    public Pilha (int capacidade){
        this.topo = -1;
        this.elementos = (T[]) new Object[capacidade];
        
    }

    public boolean isFull(){
        return this.elementos.length-1==this.topo;
    }

    public boolean push(T elemento){
        if(!this.isFull()){
            this.topo++;
            this.elementos[topo] = elemento;
            return true;
        }
        return false;
    }

     public boolean isEmpty(){
        return this.topo==-1;
    }

    public T pop() { //retorna um T (qualquer tipo de dado) ou null se a pilha estiver vazia
    if (!this.isEmpty()) {//verifica se a pilha não está vazia antes de tentar remover um elemento, o this serve para acessar os atributos da classe, nesse caso o topo e os elementos
        T removido = this.elementos[topo];//topo é o índice do último elemento adicionado, então removido recebe o valor do elemento que está no topo da pilha
        this.topo--;
        return removido;
        }
        return null; // retorna null se a pilha estiver vazia, indicando que não há elementos para remover
        }
    
    public T peek() {
        if(!isEmpty())
            return this.elementos[this.topo];
        else
            return null;
    }

    public int size() {
        return this.topo + 1;
    }

    private void resize() {

        T[] novo = (T[]) new Object[elementos.length * 2];

        for (int i = 0; i < elementos.length; i++) {
            novo[i] = elementos[i];
        }

        elementos = novo;
    }

    @Override
    public String toString(){
        StringBuilder pilha = new StringBuilder("Topo\n");
        for (int i = this.topo; i>=0; i--)
            pilha.append(this.elementos[i]+ "\n");
        
        pilha.append("____________\n");
        return pilha.toString();
    }

}
