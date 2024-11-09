import math
def main():
    #ejercicio1(input("Introduce la palabra: "))
    #print("\n")
    #ejercicio2()
    #print("\n")
    #ejercicio3()
    #print("\n")
    ejercicio4()
    #print("\n")
    #ejercicio5()
    print("\n")
    

def ejercicio1(palabra):
    for letra in palabra:
        if letra.isupper():
            print(letra," es mayuscula")
        if letra.islower():
            print(letra, " es minuscula")
        if letra.isdigit():
            print(letra, " es un numero")
        if letra == " ":
            print(letra, " es un espacio")
        if letra == "!" or letra == "/" or letra == ":" or letra == "#" or letra == "$" or letra == "%" or letra == "&" or letra == "+" or letra == "*":
            print(letra, " es un signo de puntuacion")

def ejercicio2():
    terminar = False
    lista = []
    indice = 0
    while terminar == False:
        radio = float(input("Introduce un radio: "))
        if radio != 0:
            diametro = radio*2
            superficie = math.pi * radio ** 2
            perimetro = 2 * math.pi * radio
            lista.append([diametro,superficie,perimetro])
            opcion = input("a) diametro\nb) perimetro\nc) superficie\nd) otro circulo\ne) fin\nElige una respuesta: ")
            match opcion:
                case "a":
                    print("El diametro es: ", diametro)
                case "b":
                    print("El perimetro es: ", perimetro)
                case "c":
                    print("La superficie es: ", superficie)
                case "d":
                    continue
                case "e":

                    terminar = True
            indice += 1
        if radio == 0:

            terminar = True
    for i in range(len(lista)):
        print(i+1," circulo, diametro: ",lista[i][0], " perimetro: ", lista[i][1], " superficie: ",lista[i][2])
    print("Fin de la funcion")

def ejercicio3():
    terminar = False
    lista = []
    while terminar == False:
        num = int(input("Introduce un numero: "))
        if num != 0:
            lista.append(num)
        if num == 0:
            opcion = input("a) Sumar\nb) Restar\nc) Multiplicar\nd) Dividir\ne) Fin\nEscoge una opcion: ")
            match opcion:
                case "a":
                    print("Escogiste suma")
                    numero = ejercicio3Suma(lista)
                    ejercicio3Imprimir(lista, numero)
                    lista = []
                case "b":
                    print("Escogiste resta")
                    numero = ejercicio3Resta(lista)
                    ejercicio3Imprimir(lista, numero)
                    lista = []
                case "c":
                    print("Escogiste multiplicacion")
                    numero = ejercicio3Multiplicar(lista)
                    ejercicio3Imprimir(lista, numero)
                    lista = []
                case "d":
                    print("Escogiste division")
                    numero = ejercicio3Dividir(lista)
                    ejercicio3Imprimir(lista, numero)
                    lista = [] 
                case "e":
                    print("Escogiste Terminar")
                    terminar = True
                    print("Fin de la funcion")





def ejercicio3Suma(lista):
    total = 0
    if len(lista)%2 != 0:
        lista.append(0)
    for numero in lista:
        total = total + numero
    return total

def ejercicio3Resta(lista):
    total = 0
    if len(lista)%2 != 0:
        lista.append(0)
    for numero in lista:
        total = numero - total
    return total
def ejercicio3Multiplicar(lista):
    total = 1
    if len(lista)%2 != 0:
        lista.append(1)
    for numero in lista:
        total = numero * total
    return total
def ejercicio3Dividir(lista):
    total = 1
    if len(lista)%2 != 0:
        lista.append(1)
    for numero in lista:
        total = numero / total
    return total
def ejercicio3Imprimir(lista, numero):
    print("Los numeros eran: ", lista, " y el resultado es: ", numero)

'''En realidad en este ejericico se trabaja lista con lista, no con el interior de ella'''
print("\n")

def ejercicio4(): 
    terminar = False
    lista = []
    while terminar == False:
        num1 = int(input("introduce el primer numero: "))
        num2 = int(input("introduce el segundo numero: "))
        num3 = int(input("introduce el tercer numero: "))
        vector = [num1,num2,num3]

        if  vector != [0,0,0]:
            lista.append(vector)
            
            continue
        elif vector == [0,0,0]:
           opcion = input("a) Suma\nb) Diferencia\nc) Producto escalar\nd) Fin\nEscoge una opcion: ")
           match opcion:
            case "a":
                resultado = ejercicio4Suma(lista)
                ejercicio4Imprimir(lista, resultado)
                lista = []
            case "b":
                resultado = ejercicio4Diferencia(lista)
                ejercicio4Imprimir(lista, resultado)
                lista = []
            case "c":
                resultado = ejercicio4ProductoEscalar(lista)
                ejercicio4Imprimir(lista, resultado)
                lista = []
            case "d":    
                print("Fin de la funcion")
                terminar = True

def ejercicio4Suma(lista):
    resultado = []
    if len(lista)%2 != 0:
        lista.append([0,0,0])
    for i in range(len(lista)):
        resultado.append(sum(lista[i]))
    return resultado

def ejercicio4Diferencia(lista):
    resultado = []
    if len(lista)%2 != 0:
        lista.append([0,0,0])
    for i in range(len(lista)):
        resultado.append(lista[i][0]-lista[i][1]-lista[i][2])
    return resultado    


def ejercicio4ProductoEscalar(lista):
    resultado = []
    if len(lista)%2 != 0:
        lista.append([1,1,1])
    for i in range(len(lista)):
        resultado.append(lista[i][0]*lista[i][1]*lista[i][2])
    return resultado

def ejercicio4Imprimir(lista, resultado):
    print("La lista es: ", lista, " y los resultados: ", resultado)

def ejercicio5():
    lista = []
    finalPrimos = []
    terminar = False
    while terminar == False:
        a = ejercicio5Peticion()
        if a[0] == 0 and a[1] == 0:
            finalPrimos = ejercicio5Primos(lista)
            print(finalPrimos)
            terminar = True
        else:
            lista.append(a)
            


def ejercicio5Peticion():
    num1 = int(input("Introduce el primer numero: "))
    num2 = int(input("Introduce el segundo numero: "))
    lista = [num1,num2]
    return lista

def ejercicio5Primos(lista):
    a = []
    listaDevolver = []
    for i in range(len(lista)):
        mayor = max(lista[i])
        menor = min(lista[i])
        
        final = list(range(menor, mayor + 1))
        
        a.append(final)

    primo = False
    for i in a:
        b = i
        for indice in b:
            for i in range(2, indice):
                primo = False
                if indice % i == 0:
                    print(indice, " no es primo", i, " es divisor")
                    primo = True
                    break
                
            if primo == False:
                listaDevolver.append(indice[i])
              
    

if __name__ == "__main__":
    main()


