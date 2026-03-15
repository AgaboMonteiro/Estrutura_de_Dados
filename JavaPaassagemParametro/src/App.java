public class App {
    public static void acelara(int velAtual){
        velAtual+=5;
        System.out.println("Velocidade:"+velAtual);
    }

    public static void acelaraCarro(Carro carro){
        carro.setVelocidade(carro.getVelocidade()+5);
        System.out.println("Velocidade:"+carro.getVelocidade());
    }

    public static void main(String[] args) {
      Carro novoCarro = new Carro();
      novoCarro.setVelocidade(10);
      acelara(novoCarro.getVelocidade());
      System.out.println("Velocidade do carro:"+ 
                 novoCarro.getVelocidade());
     acelaraCarro(novoCarro);
    System.out.println("Velocidade do carro apos acelara carro:"+ 
                 novoCarro.getVelocidade());

    }
}
