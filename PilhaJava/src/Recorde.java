import java.time.LocalDate; //LocalDate data: Representa a data do recorde (usar java.time.LocalDate);

public class Recorde {

    private LocalDate data;
    private double tempo; //double tempo: Representa o tempo registrado no recorde;
    private String nome; //String nome: Nome do atleta que alcançou o recorde.

    public Recorde(LocalDate data, double tempo, String nome) { //Construtor para inicializar os atributos;
        this.data = data;
        this.tempo = tempo;
        this.nome = nome;
    }
    
    //Getters para os atributos;
    public LocalDate getData() {
        return data;
    }

    public double getTempo() {
        return tempo;
    }

    public String getNome() {
        return nome;
    }

    //Método toString() para exibir as informações do recorde.
     @Override  
    public String toString() {
        return "Recorde - " +
                "data=" + data +
                ", tempo=" + tempo +
                ", nome='" + nome + '\'';
    }

}
