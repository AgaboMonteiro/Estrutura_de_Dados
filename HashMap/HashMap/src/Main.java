//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
void main() {
    //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
    // to see how IntelliJ IDEA suggests fixing it.
    HashMap <Integer,String> pessoaHash = new HashMap<>();
        int qtdElementos=100000;
        long tempoInicial = System.currentTimeMillis();
            for(int i=0;i<qtdElementos;i++)
                pessoaHash.put(i, "Pessoa "+i);
            for(int i=0;i<qtdElementos;i++)
                pessoaHash.containsKey(i);
        long tempoFinal = System.currentTimeMillis();
        double tempoTotalSeg = (tempoFinal-tempoInicial)/1000.00;
        System.out.printf("Hash Time (s): %.3f\n", tempoTotalSeg);


// Mesmo para Array List
    ArrayList <Integer> pessoaArray = new ArrayList<>();
    tempoInicial = System.currentTimeMillis();
        for(int i=0;i<qtdElementos;i++)
            pessoaArray.add(i);
        for(int i=0;i<qtdElementos;i++)
            pessoaArray.contains(i);
    tempoFinal = System.currentTimeMillis();
    tempoTotalSeg = (tempoFinal-tempoInicial)/1000.00;
    System.out.printf("Array Time (s): %.3f\n", tempoTotalSeg);


// Mesmo para Linked List
    LinkedList <Integer> pessoaLinked = new LinkedList<>();
    tempoInicial = System.currentTimeMillis();
        for(int i=0;i<qtdElementos;i++)
            pessoaLinked.add(i);
        for(int i=0;i<qtdElementos;i++)
            pessoaLinked.contains(i);
    tempoFinal = System.currentTimeMillis();
    tempoTotalSeg = (tempoFinal-tempoInicial)/1000.00;
    System.out.printf("LinkedList Time (s): %.3f\n", tempoTotalSeg);
}

