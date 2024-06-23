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
        printf("Addition + : A/a ");
        printf("Soustraction - : S/s ");
        printf("Multiply * : M/m ");
        printf("Division / : D/d ");
        printf("QUIT : tap q|Q :");
        scanf(" %c", &choice);
        while (choice != "Q" || choice !="q"){
        printf("Enter The first Number : ");
        scanf("%lf", &num1);
        printf("Enter The Second Number : ");
        scanf("%lf", &num2);
        if (choice == "A" || choice == "a")
        {
            result = num1 + num2;
            printf("Result = %.2lf\n", result);
            break;
        }
        else if (choice == "S" || choice == "s")
        {
            /* code */
        }
        else if (choice == "C" || choice == "c")
        {
            /* code */
        }
        else if (choice == "D" || choice == "d")
        {
            /* code */
        }
        else if (choice == "Q" || choice == "q")
        {
            x = false;
        }
        else
        {
            printf("Invalid Choice\n");
        }
        }
        
        switch (opr)
        {
        case '+':
            
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
