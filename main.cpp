#include <stdio.h>

int main(){
	int *vet,i,n;
	printf("Qtde de elementos para o vetor:");
	scanf("%d",&n);
	vet=malloc(n*sizeof(int));
	srand(time(NULL)); 
	for(i=0;i<n;i++)
		vet[i]= rand()%100; 
		
	for(i=0;i<n;i++)
		printf("%d |",vet[i]);
		
    return 0;
	
}
