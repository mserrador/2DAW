rema = []
rema.append(0) # append sirve para añadir un elemento
rema.append(2)
rema.append(3)
print(rema) # solo hemos añadido elementos

rema.insert(1,1) # Esto sirve para insertar contenido
print(rema) # hemos insertado y comprobamos

rema.insert(2,22)
print(rema)
rema.remove(2) # busca el valor especificado y lo borra, aunque se repita borra todos
print(rema)

# añadir una lista a otra lista
resultado = rema + [55,86,80,90]
print(resultado)


rema = [0,1,2,3,4,5]
for ele in rema: # bucle sin indice
    print(ele)

print("\n")

for indice in range(4): # bucle con indice, el range basicamente crea un array con la longitud del numero que ponga para recorrerlo el numero de veces que elemento tenga
    print(indice)

print("\n")

ind = (0,1,2,3)
for indice in ind:
    print(indice)

print("\n")

for indice in range(6):
    print(rema[indice])

print("\n")

# estructura en la cual en cada fila lo que tengamos sea dos columnas
rema = [[0,1],[10,11],[20,21],[30,31],[40,41],[50,51]]
print(rema)
#quiero acceder al elemento 21 de rema
print(rema[2][1]) # recordar que se empieza a contar por 0

print("\n")

# ejercicio de antes
nombres=[]
notas=[]
conta = 0
for ind in range(1):
    nom=input("Dame el nombre: ")
    nota=int(input("Dame la nota: "))

    nombres.append(nom)
    notas.append(nota)
print("______vuelco______")
for ind in range(1):
    print(ind, nombres[ind], notas[ind])

print("\n")
# hacer un solo array que se llama rema, voy a tener el nombre y notas
rema = []
for i in range (3):
    nom = input("Dame el nombre: ")
    nota = int(input("Dame la nota: "))
    aux = [nom,nota]
    rema.append(aux) # tambien sirve rema.append([nom,nota]) y no haria falta aux
                     # tambien sirve rema.append([input("dame el nombre: "), int(input(dame la nota: ))])
                     # y hacemos que todo sea una linea

print("______vuelco______")
for ind in range(3):
    print(ind, rema[ind], rema[ind][0], rema[ind][1]) # forma correcta