import java.time.LocalDate;
import java.util.Scanner;

public class App {

     static Scanner leia = new Scanner(System.in);

    private static int menu() {
        System.out.println("\n--- Menu Recorde ---");
        System.out.println("1. Inserir recorde - Push");
        System.out.println("2. Remover recorde - Pop");
        System.out.println("3. Mostrar recorde - Peek");
        System.out.println("4. Mostrar recordes - ToString");
        System.out.println("0. Sair");
        System.out.printf("Digite a opção desejada:" );
    	return leia.nextInt();
	}

    public static void main(String[] args) {
        System.out.println("Digite o tamanho da pilha"); //Pergunte ao usuário o tamanho da pilha;
        int tamanho = leia.nextInt();

        Pilha<Recorde> minhaPilha = new Pilha<>(tamanho);

        int opcao = 0;

        do {

            opcao = menu();
            
            switch (opcao) {
                
                case 1:

                    leia.nextLine();

                    System.out.println("Nome do atleta:");
                    String nome = leia.nextLine();

                    System.out.println("Tempo:");
                    double tempo = leia.nextDouble();

                    System.out.println("Ano:");
                    int ano = leia.nextInt();

                    System.out.println("Mês:");
                    int mes = leia.nextInt();

                    System.out.println("Dia:");
                    int dia = leia.nextInt();

                    LocalDate data = LocalDate.of(ano, mes, dia);

                    Recorde novo = new Recorde(data, tempo, nome);

                    Recorde atual = minhaPilha.peek();

                    if (atual == null || novo.getTempo() < atual.getTempo()) {

                        minhaPilha.push(novo);
                        System.out.println("Novo recorde inserido!");

                    } else {

                        System.out.println("Tempo não supera o recorde atual!");

                    }

                break;

                case 2: 
                    Recorde removido = minhaPilha.pop();

                    if (removido != null) {
                        System.out.println("Recorde removido: " + removido);
                    } else {
                        System.out.println("Pilha vazia!");
                    }

                break;

                case 3:
                        Recorde topo = minhaPilha.peek();

                    if (topo != null) {
                        System.out.println("Recorde atual:");
                        System.out.println(topo);
                    } else {
                        System.out.println("Nenhum recorde na pilha.");
                    }

                break;

                case 4: 
                    System.out.println(minhaPilha.toString());
                    System.out.println("Quantidade de elementos na pilha: " + minhaPilha.size());
                break;

                case 0:
                    System.out.println("Saindo...");
                break;

            }// fim do switch


        }while (opcao !=0);
    }
}
