public class App {
    public static void main(String[] args) {

        // Teste fila circular
        FilaCircular fc = new FilaCircular(5);
        System.out.println(fc.existe(5));

        // Teste fila dinâmica
        FilaDinamica fd = new FilaDinamica();
        fd.enqueue(1);
        fd.enqueue(3);
        fd.enqueue(5);

        System.out.println(fd.posicao(3));
        System.out.println(fd.ultimo());
        System.out.println(fd.tamanho());
        System.out.println(fd.crescente());

        // Teste pilha
        Pilha p = new Pilha();
        p.push(10);
        p.push(20);

        System.out.println(p.topo());

        // Conversão
        Pilha.converter(10000, 2);
    }
}
