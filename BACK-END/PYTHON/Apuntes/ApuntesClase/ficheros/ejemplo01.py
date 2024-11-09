# open necesita 2 parametros, el nombre del fichero y el modo en que lo voy a abrir
f = open("fi1.txt","r+") # hay que aprender a poner la ruta
lee = f.read() # asi lee todo el fichero
print(lee)
lee = f.read()
print(lee)
f.tell() # dice donde apunta el puntero
f.seek(0) # mueve el puntero de escritura y leer a la posicion deseada
lee = f.read(10) # lee un numero determindo de caracteres / bytes, al hacer read, mueve el puntero de escritura al final
print(lee)
f.write("escritoNuevo") # en este caso el puntero de escritura esta al final
# f.close() sirve para guardar las modificaciones
f.close()
# javi recomienda leer el manual, ver los enlances, y videos


