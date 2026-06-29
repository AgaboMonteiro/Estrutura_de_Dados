import java.util.Scanner;

public class Main {
    public static void main (String[] args) throws Exception{
        Scanner leia = new Scanner(System.in);
        Fibonacci fibo = new Fibonacci();
        System.out.println("Entre com o termo: ");
        int termo = leia.nextInt();
        int resultado = fibo.calcular(termo);

        System.out.printf("Termo %d = %d", termo, resultado);

    }
}