using System;
using System.Collections.Generic;
class Labirinto
{
    private const int limit = 10;

    static void mostrarLabirinto(char[,] array)
    {
        for (int i = 0; i < limit; i++)
        {
            Console.WriteLine();
            for (int j = 0; j < limit; j++)
            {
                Console.Write($" {array[i, j]} ");
            }
        }
        Console.WriteLine();
    }

    static void criarLabirinto(char[,] meuLab)
    {
        Random random = new Random();
        for (int i = 0; i < limit; i++)
        {
            for (int j = 0; j < limit; j++)
            {
                meuLab[i, j] = random.Next(4) == 1 ? '|' : '.';
            }
        }

        for (int i = 0; i < limit; i++)
        {
            meuLab[0, i] = '*';
            meuLab[limit - 1, i] = '*';
            meuLab[i, 0] = '*';
            meuLab[i, limit - 1] = '*';
        }

        int x = random.Next(limit);
        int y = random.Next(limit);
        meuLab[x, y] = 'Q'; 
    }

    static void percorrerLabirinto(char[,] labirinto, int i, int j)
    {
        Stack<int> pilhaI = new Stack<int>();
        Stack<int> pilhaJ = new Stack<int>();

        bool achou = false;

        while(true){
            if (labirinto[i, j] == 'Q')
                {
                    achou = true;
                    break;
                }

            labirinto [i,j] = 'v';

            bool moveu = false;

            //direita
            if(labirinto[i,j+1]=='.'|| labirinto[i,j+1]=='Q')
            {
                pilhaI.Push(i);
                pilhaJ.Push(j);
                j++;
                moveu = true;
            }
            // baixo
            else if (labirinto[i + 1, j] == '.' || labirinto[i + 1, j] == 'Q')
            {
                pilhaI.Push(i);
                pilhaJ.Push(j);
                i++; 
                moveu = true;
            }
            //esquerda
            else if (labirinto[i, j - 1] == '.' || labirinto[i, j - 1] == 'Q')
            {
                pilhaI.Push(i);
                pilhaJ.Push(j);
                j--;
                moveu = true;
            }
            // cima
            else if (labirinto[i - 1, j] == '.' || labirinto[i - 1, j] == 'Q')
            {
                pilhaI.Push(i);
                pilhaJ.Push(j);
                i--;
                moveu = true;
            }


            if (!moveu)
            {
                labirinto[i, j] = 'x';
                if (pilhaI.Count == 0)
            {
                break;
            }

            i = pilhaI.Pop();
            j = pilhaJ.Pop();
        }
            

            Thread.Sleep(300);
            Console.Clear();
            mostrarLabirinto(labirinto);

    }
    Console.Clear();
    mostrarLabirinto(labirinto);
    if (achou)
    {
        Console.WriteLine($"\n** Queijo encontrado na posicao {i},{j}! :) **");
    }
    else
        {
             Console.WriteLine("Impossivel encontrar o queijo!");
        }

    }

    static void Main(string[] args)
    {
        char[,] meuLabirinto = new char[limit, limit];
        int posX, posY;
        criarLabirinto(meuLabirinto);
        mostrarLabirinto(meuLabirinto);
        Console.WriteLine("\nPosições iniciais (linha e coluna):");
        posX = Convert.ToInt32( Console.ReadLine());
        posY = Convert.ToInt32(Console.ReadLine());
        percorrerLabirinto(meuLabirinto, posX, posY);
        Console.ReadKey();
    }
}