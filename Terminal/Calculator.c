#include <stdio.h>

int main() {
    float num1 , num2, result;
    char opr;
    printf("Enter The first Number : ");
    scanf("%.2f", &num1);

    printf("Enter The Second Number : ");
    scanf("%.2f",&num2);

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
