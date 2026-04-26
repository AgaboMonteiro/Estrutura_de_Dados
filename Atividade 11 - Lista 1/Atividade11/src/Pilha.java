import java.util.Stack;

public class Pilha {
    No topo;

    public Pilha(){
        topo = null;
    }
    
    //push
    public void push(int valor){
        No novo = new No(valor);
        novo.proximo = topo;
        topo = novo;
    }

    //pop
    public int pop(){
        if (topo == null){
            throw new RuntimeException("Pilha vazia");
        }
        int valor = topo.dado;
        topo = topo.proximo;
        return valor;
    }

    //21
    public int topo(){
        if (topo == null){
            throw new RuntimeException("Pilha vazia");
        }
        return topo. dado;
    }

    //19
    public static void converter (int numero, int base){
        Stack<Integer> pilha = new Stack<>();

        while (numero > 0){ // enquanto num masior q zero
            pilha.push (numero % base); // calcula o resto da divisão por "base" e empilha (armazenando o dígito da conversão)
            numero /= base; // divide o número pela base para continuar o processo com o quociente
        }
        while (!pilha.isEmpty()){
            System.out.println(pilha.pop());
        }
    }

}
