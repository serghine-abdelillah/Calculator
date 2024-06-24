#include <stdio.h>
#include <stdbool.h>

int main()
{

    double num1, num2, result;
    char choice;
    bool x = true;

    
        printf("Calculator : --- MENU ---\n");
        printf("Addition + : A/a \n");
        printf("Soustraction - : S/s \n");
        printf("Multiply * : M/m \n");
        printf("Division / : D/d \n");
        printf("QUIT : tap q|Q :\n");
        scanf(" %c", &choice);
        while (x){
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
                result = num1 - num2;
                printf("Result = %.2lf\n", result);
                break;
            }
            else if (choice == "M" || choice == "d")
            {
                result = num1 * num2;
                printf("Result : %.2lf\n", result);
                break;
            }
            else if (choice == "D" || choice == "d")
            {
                result = num1 / num2;
                printf("Result : %.2lf\n", result);
                break;
            }
            else if (choice == "Q" || choice == "q")
            {
                x = false;
            }
        }
    
    return 0;
}
