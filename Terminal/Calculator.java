/* develop calculator */

import java.util.Scanner;

public class Calculator {
    public float  add (float a, float b) {
        return a + b;
    }
    public float  soustraction (float a, float b) {
        return a - b;
    }
    public float  multiply (float a, float b) {
        return a * b;
    }
    public float  divide (float a, float b) {
        return a / b;
    }

    public static void main(String[] args) {

        /* add menu */
        while (true) {
            System.out.println("MENU");
            System.out.println("1. Addition");
            System.out.println("2. Subtraction");
            System.out.println("3. Multiplication");
            System.out.println("4. Division");
            System.out.println("5. Exit");
            System.out.println("Enter your choice: ");
            Scanner sc = new Scanner(System.in);
            int choice = sc.nextInt();
            if (choice == 5) {
                break;
            }
            System.out.println("Enter two numbers: ");
            float a = sc.nextFloat();
            float b = sc.nextFloat();
            Calculator cal = new Calculator();
            switch (choice) {
                case 1:
                    System.out.println("Addition: " + cal.add(a, b));
                    break;
                case 2:
                    System.out.println("Subtraction: " + cal.soustraction(a, b));
                    break;
                case 3:
                    System.out.println("Multiplication: " + cal.multiply(a, b));
                    break;
                case 4:
                    System.out.println("Division: " + cal.divide(a, b));
                    break;
                default:
                    System.out.println("Invalid choice");
            }
            
        }
       }
}