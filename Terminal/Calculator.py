def add (x,y):
    return x+y

def soustraction(x,y):
    return x-y

def multiply(x,y):
    return x*y

def divide(x,y):
    return x/y

x = True
while x == True :
    print("--- MENU ---")
    print("Select operation :")
    print("1.Add : "  )
    print("2.Substract : ")
    print("3.Multiply : ")
    print("4.Divide : ")
    print("Q|q.Quit : ")

    choice = input("Enter choice(1/2/3/4/Q|q):")
    if choice == "1":
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
        print(num1,"+",num2,"=", add(num1,num2))
    elif choice == "2":
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
        print(num1,"-",num2,"=", soustraction(num1,num2))
    elif choice == "3":
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
        print(num1,"*",num2,"=", multiply(num1,num2))
    elif choice == "4":
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
        print(num1,"/",num2,"=", divide(num1,num2))
    elif choice == "Q" or "q":
        print("Quitting")
        x = False
