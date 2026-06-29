//Crie uma função recursiva para converter um valor decimal para binário utilizando recursividade.

public class SomaRecursiva {

    public static int soma(int vetor[], int n) {

        if (n == 0)//caso base,
            return 0;

        return vetor[n - 1] + soma(vetor, n - 1);// soma o ultimo elemento com o resultado da função soma
    }

    public static void main(String[] args) {

        int vetor[] = {1, 2, 3, 4, 5};

        System.out.println("Soma = " + soma(vetor, vetor.length));

    }

}