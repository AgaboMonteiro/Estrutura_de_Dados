public class Fibonacci {

    public int calcular(int n){
        //cassos base
        System.out.printf("fibo(%d)\n",n);
        if (n == 0){
            return 0;
        }
        if (n == 1){
            return 1;
        }

        //passo recursiva
        return calcular(n - 1) + calcular(n-2);
    }
}
