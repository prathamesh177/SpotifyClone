#include<stdio.h>
int main(){
    float hrl,rr,lrl,x;
    printf("hrl:");
    scanf ("%f",&hrl);
     printf("lrl:");
    scanf ("%f",&lrl);
     printf("rr:");
    scanf ("%f",&rr);
    x=((rr-lrl)/(hrl-lrl))*2;
    printf("%f",x);
}