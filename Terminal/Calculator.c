#include <stdio.h>

int main() {
    int num1 , num2, result;
    char opr;
    printf("Enter The first Number : ");
    scanf("%.2lf", &num1);

    printf("Enter The Second Number : ");
    scanf("%.2lf",&num2);

    printf("Enter One Of The Operators : + | / | * | - : ");
    scanf(" %c",&opr);

    result = num1 + num2;
    printf("Result = %.2lf\n", result);

    result = num1 - num2 ;
    printf("Result = %.2lf\n", result);

    result = num1 * num2;
    printf("Result : %.2lf\n", result);
    
    result = num1 / num2;
    printf("Result : %.2lf", result);

    
    
    return 0;
}
