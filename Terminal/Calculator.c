#include <stdio.h>

int main() {
    int num1 , num2;
    char opr;
    printf("Enter The first Number : ");
    scanf("%d", &num1);

    printf("Enter The Second Number : ");
    scanf("%d",&num2);

    printf("Enter One Of The Operators : + | / | * | - : ");
    scanf("%s",&opr);

    if(opr = '+'){
        printf("Result = %d", num1 + num2);
    }
    
    
    return 0;
}
