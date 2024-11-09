import math # importamos esto para poder usar funciones de matematicas

# 1.- Calcular el área de un círculo dado su radio y también su perímetro. Recuerda que el área de un círculo es π veces el cuadrado del radio.
print("EJERCICIO 1\n")
radio = float(input("Ingresa el valor del radio: "))
perimetro = math.pi * radio**2
area = 2 * math.pi * radio
print("El perimetro del circulo es: ", perimetro, " y su area: ", area)
print("\n")

# 2.- Calcular el PVP de un producto, conociendo su precio y aplicando sobre él, el 21% de IVA.
print("EJERCICIO 2\n")
precio = float(input("Introduce el precio del producto: "))
impuestos = (precio*21)/ 100
precioFinal = precio + impuestos
print("El precio con el iva sumado es: ", precioFinal)
print("\n")

# 3.- Evalúa el polinomio introduciendo x por teclado.
print("EJERCICIO 3\n")
x = int(input("Introduce la incognita x para saber el resultado del siguiente polinomio: 3x**2+2x+5: "))
resultado = (3*x**2)+(2*x)+5
print("El resultado es: ", resultado)
print("\n")

# 4.- Pidiendo el lado de un cuadrado, calcule el perímetro y el área.
print("EJERCICIO 4\n")
lado = float(input("Introduce el lado del cuadrado: "))
print("El perimetro es ", lado*4, " y su area ", lado*lado)
print("\n")

# 5.- Pidiendo los lados de un triángulo rectángulo calcule el perímetro y el área.
print("EJERCICIO 5\n")
base = float(input("Introduce la base del triangulo: "))
altura = float(input("Introduce la altura del triangulo: "))
hipotenusa = float(input("Introduce la hipotenusa del triangulo: "))
print("El perimetro es ", (base+altura+hipotenusa), " y su area ", (base * altura)/2)
print("\n")

# 6.- Diseña un programa que pida el valor de los tres lados de un triángulo y calcule
# el valor de su área y perímetro. Recuerda que el área A de un triángulo puede calcularse a
# partir de sus tres lados, a, b y c, así:
# A=, donde s = (a + b + c)/2.
print("EJERCICIO 6\n")

a = float(input("Introduce el lado a: "))
b = float(input("Introduce el lado b: "))
c = float(input("Introduce el lado c: "))

s = (a+b+c)/2
raiz = s*(s-a)*(s-b)*(s-c)
area=math.sqrt(raiz)

print("El perimetro es: ", (a+b+c)," y su area es ", area)
print("\n")

# 7.- El área A de un triángulo se puede calcular a partir del valor de dos de sus lados, a y
# b, y del ángulo θ que estos forman entre sí con la fórmula A = (ab sin(θ))/2. Diseña un programa
# que pida al usuario el valor de los dos lados (en metros), el ángulo que estos forman (en grados),
# y muestre el valor del área.
# (Ten en cuenta que la función sin de Python trabaja en radianes, así que el ángulo que leas en
# grados deberás pasarlo a radianes sabiendo que π radianes son 180 grados. Prueba que has
# hecho bien el programa introduciendo los datos
print("EJERCICIO 7\n")

a = float(input("Introduce el lado a: "))
b = float(input("Introduce el lado b: "))
θ = float(input("Introduce los grados del angulo: "))
θRadianes = math.radians(θ)

print("El area del triangulo es: ", (a*b*math.sin(θRadianes))/2)
print("\n")

# 8.- Haz un programa que pida al usuario una cantidad de euros, una tasa de interés
# y un número de años. Muestra por pantalla en cuánto se habrá convertido el capital inicial
# transcurridos esos años si cada año se aplica la tasa de interés introducida.
# Recuerda que un capital de C euros a un interés del x por cien durante n años se convierten
# en C · (1 + x/100) n euros.
print("EJERCICIO 8\n")

euros = float(input("Introduce una cantidad inicial de euros: "))
tasa = float(input("Introduce una tasa de interes: "))
anyos = int(input("Introduce una cantidad de anyos: "))
generado = euros * (1 + (tasa/100)) ** anyos
print("El capital inicial de ", euros, " se habra convertido en ", euros+generado)
print("\n")

# 9.- Haz un programa que calcule, si un número introducido por teclado es par, en el caso de ser par, calcula su factorial.
print("EJERCICIO 9\n")

numero=int(input("Introduce un numero: "))
if numero%2 == 0:
    print("Es par")
    print("El factorial es: ",math.factorial(numero))
else:
    print("No es par")

print("\n")

# 10.- Realiza un programa que calcule el desglose mínimo en billetes,
# y monedas de una cantidad exacta de euros. Hay billetes de 500, 200, 100, 50, 20, 10, y 5 €
# y monedas de 2 y 1 €. Por ejemplo, si deseamos conocer el desglose de 434€, el programa mostrará:
# 2 billetes de 200 €
# 1 billete de 20 €
# 1 billete de 10 €
# 2 monedas de 2 €
print("EJERCICIO 10\n")

cantidad = float(input("Introduce la cantidad de euros: "))
quinientos = 0
doscientos = 0
cien = 0
cincuenta = 0
veinte = 0
diez = 0
cinco = 0
dos = 0
uno = 0
contador = 0

while cantidad > 0:
    if cantidad >= 500:
        quinientos += 1
        cantidad -= 500
    elif cantidad >= 200:
        doscientos += 1
        cantidad -= 200
    elif cantidad >= 100:
        cien += 1
        cantidad -= 100
    elif cantidad >= 50:
        cincuenta += 1
        cantidad -= 50
    elif cantidad >= 20:
        veinte += 1
        cantidad -= 20
    elif cantidad >= 10:
        diez += 1
        cantidad -= 10
    elif cantidad >= 5:
        cinco += 1
        cantidad -= 5
    elif cantidad >= 2:
        dos += 1
        cantidad -= 2
    elif cantidad >= 1:
        uno += 1
        cantidad -= 1


if quinientos > 0:
    print("hay ", quinientos, " billetes de 500")
if doscientos > 0:
    print("hay ", doscientos, " billetes de 200")
if cien > 0:
    print("hay ", cien, " billetes de 100")
if cincuenta > 0:
    print("hay ", cincuenta, " billetes de 50")
if veinte > 0:
    print("hay ", veinte, " billetes de 20")
if diez > 0:
    print("hay ", diez, " billetes de 10")
if cinco > 0:
    print("hay ", cinco, " billetes de 5")
if dos > 0:
    print("hay ", dos, " monedas de 2")
if uno > 0:
    print("hay ", uno, " monedas de 1")

