#include <stdio.h>
#include <stdbool.h>

int main()
{

    double num1, num2, result;
    char opr;
    bool x = true;

    while (x == true)
    {

        printf("Enter The first Number : ");
        printf("Enter The first Number : ");
        scanf("%lf", &num1);
        printf("Enter The Second Number : ");
        scanf("%lf", &num2);
        printf("Enter One Of The Operators : + | / | * | - : ");
        scanf(" %c", &opr);
        printf("QUIT : tap q|Q :");
        scanf(" %c", &opr);
        switch (opr)
        {
        case '+':
            result = num1 + num2;
            printf("Result = %.2lf\n", result);
            break;
        case '-':
            result = num1 - num2;
            printf("Result = %.2lf\n", result);
            break;
        case '*':
            result = num1 * num2;
            printf("Result : %.2lf\n", result);
            break;
        case '/':
            result = num1 / num2;
            printf("Result : %.2lf\n", result);
            break;
        case 'q' || 'Q':
            break;
        default:
            break;
        }
    }
    return 0;
}
