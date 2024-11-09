import struct # importante importar struct

s = struct.Struct("I f 10s") # un num entero, un float y un str de 10 caracteres / molde de la estructura
# I = entero/utiliza 4 bytes para guardar informacion, 
# f = float/utiliza 4 bytes para guardar informacion, 
# 10s = String de 10 caracteres/utiliza 10 bytes.
# A la hora de leer o escribir en esta estructura hay que tener en centa que leo o escribo 18 bytes
# Buscar mas informacion de que se le puede pasar al metodo (tablita)

# rellenamos el molde 
# declaramos variables
a=1
b=1.1
c="UNO"

# rellenamos

#regisp = s.pack(a,b,c) # a y b nos deja empaquetar porque son numeros, pero c al ser string no lo hace de manera binaria, da error
# debemos convertir en binario c para que nos permita empaquetarlo
# conversion a binario de c
d=c.encode("utf-8")
print(d) # esto devuelve: b'UNO' la b delante del string indica que esta en binario
# volvemos a intentar el empaquetado
regisp = s.pack(a,b,d) # esto ya no da error
print(regisp) # aqui se visualiza como no da error y su contenido

# Ahora que esta empaquetado ya podemos crear el fichero binario, e introducirle estos datos con el write()
# abrimos el fichero binario
f = open("fibi","bw") # a la hora de abrir el fichero debemos indicar que es binario, si no nos saldra un error, ya que intentamos meter bytes a un fichero de texto
f.write(regisp) # esto escribe el registro anterior que creamos

# creamos el siguiente registro

# declaramos variables
aa = 2
bb = 2.2
cc = "DOS".encode("UTF-8") # lo declaramos como binario

# declaramos el registro
regisp2 = s.pack(aa,bb,cc)
# escribimos el segundo registro
f.write(regisp2)

# creamos un tercer registro

# declaramos las variables
aaa = 3
bbb = 3
ccc = "TRESSSSSSSSSSSSSSSSSSSSSSSS".encode("UTF-8")

regisp3 = s.pack(aaa,bbb,ccc)

print(regisp3) # comprobamos que el string solo mide 10
f.write(regisp3)

# creamos el cuarto registro
aaaa = 4
bbbb = 4
cccc = "CUATRO".encode("UTF-8")

regisp4 = s.pack(aaaa,bbbb,cccc)
print(regisp4) # aqui vemos que despues del cuatro rellena el string con 0 binarios
# el tema de los 0 binarios que rellenan es un tema importante

# escribimos el cuarto registro
f.write(regisp4)

# cerramos 
f.close()

# ahora cuando hagamos un more de fibi, no podremos ver nada, 
# para poder ver lo que hay usamos el comando hexdump, nos mostrara el contenido en hexadecimal

# ahora gracias a la estructura que declaramos antes, podremos leer el fichero en python
# abrimos el fichero, si pongo una w me lo cargo el contenido del fichero, 
# si no calificamos(epsecificar) el tipo de fichero lo abre como tipo texto
f = open("fibi","br+") # lo hemos avierto de manera que le indicamos que es tipo binario, para leer y poder escribir con el +
f.tell() # indica la posicion del puntero de lectura

regispL = f.read(18) # regispL tiene la L para poner un nombre difernete a la variable, le pasamos la longitud del registro, sabemos la longitud del registor ya que al hacer la estructura declaramos que fueran 18 bytes
print(regispL) # nos devuelv el registro, este registro esta empaquetado por lo que debemos desempaquetarlo para poder leerlo

# desempaquetado
regisu = s.unpack(regispL) # para desempaquetarlo, creamos una variable que contiene, la estructura "s", su metodo "unpack" y al metodo le pasamos el registro empaquetado "regispL" al metodo
print(regisu) # podemos comprobar que lo ha desempaquetado

# aun no hemos terminado, falta hacer un decode al string ya que al introducir el registro lo pasamos a binario
# uncode
cDecoded = regisu[2].decode("UTF-8") # regisu es una lista, al desempaquetar se devuelve un array, ahora accedemos a la posicion del string que es la 2 en este caso y hacemos el decode
print(cDecoded) # ahora vemos que lo tenemos en formato string pero hay otro problema, como c no era de la longitud que especificamos "10", añadio caracteres para que siempre cumpleira esa funcion, ahora hay que solucionar estos caracteres

# vamos a leer el siguiente registro

# vemos donde nos encontramos con f.tell()
f.tell()

# leemos el siguiente registro

r2a,r2b,r2c = s.unpack(f.read(18)) # aqui en una sola linea, guardamos en 3 variables los 3 campos de registro al leerlo
# aqui leemos un registro, despues le hacemos unpack, el unpack lo hace segun el molde que creamos "s", despues como unpack devuelve una tupla cuyos valores se asignan a las 3 variables

r2c = r2c.decode("UTF-8") # pasamos de binario a string, persiste el problema de que el molde pide que mia 10 el string, esta relleno de 0
print(r2c)


regisu3 = s.unpack(f.read(18))
r3a,r3b,r3c = regisu3 # aqui hacemos lo mismo que arriba pero en dos lineas

r3c = r3c.decode("UTF-8") # pasamos de binario a string, persiste el problema de que el molde pide que mia 10 el string, esta relleno de 0
print(r3c)
# leemos otro registro

regisu4 = f.read(18)
regisu4 = s.unpack(regisu4)
print(regisu4)
r4c = regisu4[2].decode("UTF-8")
print(r4c)

# hacemos print de r4c pero dandole formato para que no salgan los 0
print("<{0}>".format(r4c))

d = "CUATRO"
print(f"c={r4c}, d={d}")
if r4c== d:
    print("son iguales")
else:
    print("no son iguales")

# Esta pequeña estructura de if, nos muestra que aunque hagamos un decode de el string que tenia 10 caracteres en el molde 
# y al que
# se le añadieron 0 para llegar a ese cupo de 10 caracteres, error mencionado previeamente arriba, 
# cuando comparamos ese string al que se le hizo decode
# con uno que creamos de manera momentanea que supuestamente tiene el mismo contenido, 
# el if nos muestra que no es realmente asi por lo que deberemos aplicar 
# la siguiente solucion:

# solucion 1: strip()
r4c = r4c.strip("\x00") # el metodo strip() suprime blancos u otro carácter especificado del final o del principio de una expresión de serie.
print("print de la variable r4c: ", r4c)

if r4c== d:
    print("son iguales")
else:
    print("no son iguales")
# la estrucutra de if muestra que son iguales porque con strip recortamos los rellenos del molde "\x00"


# solucion 2: split()
r4c = r4c.split("\x00",1) # es como en java, el string lo convierte e lista separando por lo que el trozo de cadena que especifiquemos, el 1 ahi indica cuantas partes queremos, en este caso dividio "CUATRO" de todos los "\x00" generando una lista de dos posiciones
r4c = r4c[0]

if r4c== d:
    print("son iguales")
else:
    print("no son iguales")
# la estrucutra de if muestra que son iguales porque con strip recortamos los rellenos del molde "\x00"

# solucion 3: replace()
r4c = r4c.replace("\x00","") # a este metodo se le pasa primero, lo que queremos sustituir, segundo por lo que queremos sustituir, tercero(opcional) cuantos queremos sustituir
if r4c== d:
    print("son iguales")
else:
    print("no son iguales")
# la estrucutra de if muestra que son iguales porque con strip recortamos los rellenos del molde "\x00"


#--------------------------------------------------------------------------------------------------------
# en esta ultima parte hemos leido un registro, hemos visto como hemos sacado esos valores, visto que con int o float no hay problema,
# pero con los string hay que ahcer un tratamiento especial, primero pasarlo de binario a string, despues comprobar que 
# esos string estan o son lo que queremos, y si no lo son tenemos 3 ejemplos para darle una solucion a ese problema con
# metodos de string
#---------------------------------------------------------------------------------------------------------
# javi ha propuesto hacer una comprobacion nosotros mismos de como se comportan los punteros cuando estamos con un fichero
# tipo texto o tipo binario. 
# esta comprobacion la voy a realizar en un fichero llamado comprobacionTB.py que se va a encontrar en la carpeta "ficheros" de apuntes clase
#---------------------------------------------------------------------------------------------------------
# dar vueltas a sql dijo javi
# javi recomienda/prefiere, que miremos el manual antes de buscar en internet idk
# 100% necesario leer el manual de python
# hoy dia 10 de 10 de 24, se dijo que la tarea de ficheros se mandaba hoy o mañana, hemos terminado con ficheros, toca bbdd


print("cambio")




