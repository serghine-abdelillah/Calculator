#include <stdio.h>

int main() {
    double num1 , num2, result;
    char opr;
    printf("Enter The first Number : ");
    scanf("%lf", &num1);

    printf("Enter The Second Number : ");
    scanf("%lf",&num2);

    printf("Enter One Of The Operators : + | / | * | - : ");
    scanf(" %c",&opr);
    if (opr == '+'){
        
        printf("Result = %.2lf\n", result);
    }
    else if (opr == '-'){
        result = num1 - num2 ;
        printf("Result = %.2lf\n", result);
    }
    if (opr == '*'){
        result = num1 * num2;
        printf("Result : %.2lf\n", result);
    }
    if (opr == '/'){
        result = num1 / num2;
        printf("Result : %.2lf\n", result);
    }
    
    switch (opr)
    {
    case '+':
        result = num1 + num2;
        break;
    case '+':
        result = num1 + num2;
        break;
    
    default:
        break;
    }
    

    return 0;
}
