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
    printf("Result = %d\n", result);

    result = num1 - num2 ;
    printf("Result = %d\n", result);

    result = num1 * num2;
    printf("Result : %d", result);
    
    result = num1 / num2;
    printf("Result : %d", result);

    
    
    return 0;
}
