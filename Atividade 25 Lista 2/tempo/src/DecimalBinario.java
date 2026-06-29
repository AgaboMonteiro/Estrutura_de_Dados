import java.util.Scanner;
//Criar uma função recursiva que retorne a soma dos elementos de um vetor de n elementos.
public class DecimalBinario {

    public static void binario(int n) {

        if (n == 0)
            return;

        System.out.println(n + " / 2 = " + (n / 2) + "   resto = " + (n % 2));

        binario(n / 2);

        System.out.print(n % 2);

    }

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite um número decimal:");
        int numero = scanner.nextInt();

        if (numero == 0) {
            System.out.println("Binário: 0");
        } else {
            System.out.print("Binário: ");
            binario(numero);
        }

    }

}