import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

public class App {

    private static ArrayList<String> gerarEmailsCampanhaA() {
        ArrayList<String> emails = new ArrayList<>();
        for (int i = 1; i <= 100; i++) {
            emails.add("cliente_" + i + "@email.com");
        }
        return emails;
    }

    private static ArrayList<String> gerarEmailsCampanhaB() {
        ArrayList<String> emails = new ArrayList<>();
        for (int i = 70; i < 160; i++) {
            emails.add("cliente_" + i + "@email.com");
        }
        return emails;
    }

    public static void main(String[] args) {

        ArrayList<String> listaCampanhaA = gerarEmailsCampanhaA();
        List<String> listaCampanhaB = gerarEmailsCampanhaB();

        System.out.println("=== SISTEMA DE SEGMENTAÇÃO DE CAMPANHAS ===");
        System.out.println("Total de e-mails na Campanha A: " + listaCampanhaA.size());
        System.out.println("Total de e-mails na Campanha B: " + listaCampanhaB.size());
        System.out.println("--------------------------------------------------\n");

        for (String email : listaCampanhaA) {
            System.out.println("Campanha A: " + email);
        }

        System.out.println("--------------------------------------------------\n");

        for (String email : listaCampanhaB) {
            System.out.println("Campanha B: " + email);
        }

        HashSet<String> hashSetCampanhaA = new HashSet<>(listaCampanhaA);
        HashSet<String> hashSetCampanhaB = new HashSet<>(listaCampanhaB);


        //Removendo clientes da campanha B que estão na campanha A /
        HashSet<String> clientesUnicosCampanhaA = new HashSet<>(hashSetCampanhaA);
        clientesUnicosCampanhaA.removeAll(hashSetCampanhaB);


        // Removendo clientes da campanha A que estão na campanha B
        HashSet<String> clientesUnicosCampanhaB = new HashSet<>(hashSetCampanhaB);
        clientesUnicosCampanhaB.removeAll(hashSetCampanhaA);


      System.out.println("\n=== CLIENTES ÚNICOS DE CADA CAMPANHA ===");
        System.out.println("Clientes únicos da Campanha A: " + clientesUnicosCampanhaA.size());
        for(String email: clientesUnicosCampanhaA)
            System.out.println("Clientes únicos da Campanha A: " + email);
        System.out.println("Clientes únicos da Campanha B: " + clientesUnicosCampanhaB.size());
        for(String email: clientesUnicosCampanhaB)
            System.out.println("Clientes únicos da Campanha B: " + email);

        HashSet<String> duplicados = new HashSet<>(listaCampanhaA);
        duplicados.retainAll(hashSetCampanhaB);

        System.out.println("\n=== CLIENTES DUPLICADOS ===");
        System.out.println("Clientes duplicados: " + duplicados.size());

        HashSet<String> unicos = new HashSet<>(listaCampanhaA);
        unicos.addAll(hashSetCampanhaB);

        System.out.println("\n=== CLIENTES UNICOS ===");
        System.out.println("Clientes unicos: " + unicos.size());
        

    }

    

}