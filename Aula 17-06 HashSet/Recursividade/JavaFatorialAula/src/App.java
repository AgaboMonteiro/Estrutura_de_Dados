import java.util.Scanner;

public class App {
    static int potenciaComentada(int base, int exp) {
    System.out.println("pot(" + base + "," + exp + ")");

    if (exp == 0) {
        System.out.println("Caso base\n1");
        return 1;
    }

    int retorno = base * potenciaComentada(base, exp - 1);
    System.out.println("Instancia pot(" + base + "," + exp + ") = " + retorno);

    return retorno;
}

    static int fatorialComentado (int n){
        System.out.println("fat("+n+")");
        if (n==0){
            System.out.println("Caso base\n1");
             return 1;
    }    
        int retorno = n* fatorialComentado(n-1);
        System.out.println("Instancia fat ("+n+") = " +retorno);
        return retorno;
    }

    public static void main(String[] args) throws Exception {
        /*Scanner leia = new Scanner(System.in);
        System.out.println("Entre com um valor");
        int num = leia.nextInt();
        System.out.println("Fatorial:" + fatorialComentado(num));*/

        Scanner leia = new Scanner(System.in);
        System.out.println("Entre com um valor para base");
        int base = leia.nextInt();

        System.out.println("Entre com um valor para exp");
        int exp = leia.nextInt();

        System.out.println("Potencia:" + potenciaComentada(base, exp));
    }
}
