#include <stdio.h>
#include <stdbool.h>

int main()
{

    double num1, num2, result;
    char opr, choice;
    bool x = true;

    while (x == true)
    {

        printf("Calculator : --- MENU ---\n");
        printf("Addition  : A/a ");
        printf("Soustraction  : S/s ");
        printf("Multiply  : M/m ");
        printf("Division  : D/d ");
        printf("QUIT : tap q|Q :");
        scanf(" %c", &choice);
        if (choice == "A" || choice == "a")
        {
            /* code */
        }
        else if (/* condition */)
        {
            /* code */
        }
        else if (/* condition */
        {
            /* code */
        }
        else if (/* condition */)
        {
            /* code */
        }
        else
        {
            /* code */
        }
        
        printf("Enter One Of The Operators : + | / | * | - : ");
        scanf(" %c", &opr);

        printf("Enter The first Number : ");
        scanf("%lf", &num1);
        printf("Enter The Second Number : ");
        scanf("%lf", &num2);
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
