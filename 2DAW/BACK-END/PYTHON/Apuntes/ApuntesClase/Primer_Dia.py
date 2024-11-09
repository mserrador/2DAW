# variables
cadena = "hola"
j=2*cadena
print(j)

string = "hola"
print(string[0])

# Estructuras duplas. listas, diccionarios, conjuntos

# dos tipos de arrays, los arrays que son duplas y los array que son listas, arrays que
# son mutables e inmutables
# las tuplas son inmutables y las listas mutables
# la tupla es con parentesis() y lista con corchetes[]

a=(1,2,3,4,5)
print(a)
print(a[0])
print(a[2])
print(a[4])

# print(a[44]) da error ya que es una dupla y es inmutable

print(a[-1]) #podemos usar numeros negativos porque debemos pensar en que son circulos unidos
b=[1,2,3,4,5]
print(b[0])
b[0]=77
print(b[0])

# si tenemos una lista dentro de una tupla, podemos modificar la lista en si pero no la tupla

tupla=(1,2,3,[10,20,30])
print(tupla)
print(tupla[3])
tupla[3][0]="Visca Barsa" # dentro de la lista podemos meter el tipo de dato que queramos
print(tupla)

# ejemplo de lista dentro de una tupla

lista=[1,(2,3,4),5]
print(lista)
print(lista[1])

# aun estando en una lista no se puede modificar una tupla


# hacer una tabla de datos donde tengamos dos niveles, que se pueda acceder a la estructura mediante un nombre y nos de su nota
# debe tenr un nombre y una nota
# Ejemplo de tablas




# para introducir por teclado usamos input
nombre=input("Introduce tu nombre: ")
print("Tu nombre es ", nombre)

# Hacer un programa que pida el año de naciemiento y segun ela ño de nacimiento nos diga cuantos años vamos a cumplir este año

nacimiento=int(input("En que año naciste?: "))
print("Este año vas a cumplir ", (2024 - nacimiento), " años")





























