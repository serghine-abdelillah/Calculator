#include <stdio.h>
#include <stdbool.h>

int main()
{

    double num1, num2, result;
    char choice;
    printf(" Calculator : --- MENU ---\n");
    printf(" Enter an operator + - * /  : \n QUIT : tap q|Q : \n");
    while (true)
    {

        printf(" You choice :  ");
        scanf(" %c", &choice);
        if (choice == 'Q' || choice == 'q')
        {
            break;
        }

        printf("Enter The first Number : ");
        scanf("%lf", &num1);
        printf("Enter The Second Number : ");
        scanf("%lf", &num2);
        switch (choice)
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

        default:
            break;
        }
    }

    return 0;
}
