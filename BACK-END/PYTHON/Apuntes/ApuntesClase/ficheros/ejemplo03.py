f = open("fi1.txt","r+")
print(f.tell())
lee = f.read(10)
print(lee)
f.write("zzzzzzzzzzzzzzzzzzzzzzzzz")
f.close()

# hay que tener en cuenta la posicon de ambos punteros, escribir y leer
f = open("fi1.txt","r+")
print(f.tell())
f.seek(25) # pone los dos punteros en el sitio que yo le indique
f.write("jjjj") # escribe donde este el puntero de escritura
f.close()

