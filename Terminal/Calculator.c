#include <stdio.h>
#include <stdbool.h>

int main()
{

    double num1, num2, result;
    char opr, choice;
    bool x = true;

        while (true)
        {
        printf("Calculator : --- MENU ---\n");
        printf("Enter an operator + - * /  : \n");
        printf("QUIT : tap q|Q :\n");
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
                break;
            case '-':
                result = num1 - num2;
                printf("Result = %.2lf\n", result);
                break;
                break;
            case '*':
                /* code */
                break;
            case '/':
                /* code */
                break;
            
            default:
                break;
            }
            
            
            
            if (choice == "A" || choice == "a")
            {
                
            }
            else if (choice == "S" || choice == "s")
            {
                
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
