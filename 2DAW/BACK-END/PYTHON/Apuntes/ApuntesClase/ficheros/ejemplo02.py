f = open("fite.txt","w") # escribir en el fichero / abrir el fichero / al ser tipo texto no le indicamos nada porque el metodo lo pre supone
lee1 = f.write("escribo texto") # ahora la variable lee contiene el numero de bytes que se ha introducido
# si abrimos con w, escribimos y guardamos, borra todo el fichero y guarda lo que hayamos introducido
# si abrimos con a, el puntero apunta al final y no borra lo que hay delante del puntero

b = open("fi1.txt","r+") # r+ permite leer y escribir / al ser tipo texto no le indicamos nada porque el metodo lo pre supone
print(b.tell()) # indica don se encuentra el puntero
lee = b.read(10) # va a leer los primeros 10 caracteres, y deja el puntro en la posicion 10
print(b.tell())
print(lee) # muestra lo leido
lee = b.read(10) # ahora el puntero se encuentra en la posicion 20
print(lee) 
lee = b.read() # al no indicarle nada, el puntero se mueve al final del fichero, el metodo ha leido desde el caracter 20 hasta el final
print(lee) 
print(b.tell())
b.seek(0)
print(b.tell())
lee = b.readline() # esto lee desde la posicion del puntero hasta el siguiente salto de linea
print(lee)
lee = b.readlines() # genera una lista en la que cada elemento de la lista es una linea del fichero, a parte empieza desde la linea dos
print(lee)
lee[1]="aaaaaaaaa\n"
print(lee)
b.writelines(lee) # esto introduce en el fichero una lista de string
b.close()
