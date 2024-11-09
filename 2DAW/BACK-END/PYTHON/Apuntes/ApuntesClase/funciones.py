def escribe():
    return "Visca el barsa"

   
print("el mundo es maravilloso y ", escribe())

def escribe():
    print("Visca el barsa")

print("el mundo es maravilloso y ")
escribe()

# pasando algo por parametro

def escribe(a):
    print(a)
escribe("holaaaaa")
a = "ibai"
k = 3
escribe(a)
escribe(k)
print()
# funcion que recibe dos numero y los suma y me devuelva ese numero sumado
def suma(num1, num2,num3,):
    return num1+num2+num3

print(suma(2,2,2))

# pasamos una estructura
def f1(*a):
    print(a)
f1(5,1,7,2,3,9,4,5,8)
# imprimir elemento a elemento
def f1(*a):
    for elemento in a:
        print(elemento)
f1(5,1,7,2,3,9,4,5,8)
# suma de todos los elementos
def f1(*a):
    resultado = 0
    for i in a:
        resultado += i
    print(resultado)
f1(5,1,7,2,3,9,4,5,8)
f1(2,2)
# funcion que se llama f3, recibe una primera variable, 
# que me diga que operacion debo hacer, a la derecha los numeros de las operaciones
def f3(operador, *lista):
    resultado = 0
    if operador == "+":
        for i in lista:
            resultado += i
    else:
           print("operador no valido")     
    print(resultado)        

f3("+",1,1)

# EJERCICIO lo mismo que arriba pero le pasamos solo un parametro pero el ultimo elemento es el signo de la operacion f3(5,6,7,"+")
def f3(*lista):
    operador = lista[-1]
    if operador == "+":
        resultado = 0
    elif operador == "-":
        resultado = 0
    elif operador == "*":
        resultado = 1
    elif operador == "/":
        resultado = 1
    
    rango = len(lista)-1
    if operador == "+":
        for i in range(rango):
            resultado += lista[i]
        print(resultado)
    elif operador == "-":
        for i in range(rango):
            resultado -= lista[i]
        print(resultado)       
    elif operador == "*":
        for i in range(rango):
            resultado *= lista[i]
        print(resultado)
    elif operador == "/":
        for i in range(rango):
            resultado /= lista[i]
        print(resultado)
    else:
           print("operador no valido")     
    

f3(2,2,"+")
f3(2,2,"-")
f3(2,2,"*")
f3(2,2,"/")
f3(2,2,"seis")

# como hacer que una funcion retorne varios varoles
a = 1
b = 2
def variosValores(a,b):
    return a,b
c,d = variosValores(a,b)
print("c es: ", c," d es: ", d)

