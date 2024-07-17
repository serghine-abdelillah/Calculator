/* develop calculator */
public class Calculator {
    public int  add (int a, int b) {
        return a + b;
    }
    public int  soustraction (int a, int b) {
        return a - b;
    }

    public static void main(String[] args) {
        int a = 4;
        int b = 2;
        System.out.println("Addition: " + (a + b));
        System.out.println("Subtraction: " + (a - b));
        System.out.println("Multiplication: " + (a * b));
        System.out.println("Division: " + (a / b));
    }
}