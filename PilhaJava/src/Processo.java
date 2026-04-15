public class Processo {
    private String descricao;
    private double tempo;

    public Processo(String descricao, double tempo){
        this.descricao = descricao;
        this.tempo = tempo;
    }

    public String getDescricao(){
        return this.descricao;
    }

    public double getTempo(){
        return this.tempo;
    }

    @Override
    public String toString(){
        return this.descricao+ " | " + this.tempo;
    }
}
