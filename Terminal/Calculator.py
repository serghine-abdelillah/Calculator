# develop a simple calculator

# Function to add two numbers
def add (x,y):
    return x+y

def soustraction(x,y):
    return x-y

def multiply(x,y):
    return x*y

def divide(x,y):
    return x/y

print("Select operation.")
print("1.Add")
print("2.Substract")
print("3.Multiply")
print("4.Divide")

# Take input from the user
choice = input("Enter choice(1/2/3/4):")
if choice == 1:
    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))
    print(num1,"+",num2,"=", add(num1,num2))


