#include <stdio.h>

int main() {
    int num1 , num2, result;
    char opr;
    printf("Enter The first Number : ");
    scanf("%d", &num1);

    printf("Enter The Second Number : ");
    scanf("%d",&num2);

    // printf("Enter One Of The Operators : + | / | * | - : ");
    // scanf("%s",&opr);

    result = num1 + num2;
    printf("Result = %.2f\n", result);

    result = num1 - num2 ;
    printf("Result = %.2f\n", result);

    result = num1 * num2;
    printf("Result : %.2f", result);
    
    result = num1 / num2;
    printf("Result : %.2f", result);

    
    
    return 0;
}
