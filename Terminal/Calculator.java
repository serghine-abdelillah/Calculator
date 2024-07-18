/* develop calculator */
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
        float a = 4;
        float b = 2;
        System.out.println("Addition: " + (a + b));
        System.out.println("Subtraction: " + (a - b));
        System.out.println("Multiplication: " + (a * b));
        System.out.println("Division: " + (a / b));
    }
}