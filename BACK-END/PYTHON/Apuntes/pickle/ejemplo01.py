import pickle

a = [1,2,3,4,5,6]

b={"uno":"one","dos":"two","tres":"three"}

class Perro:
    def __init__(self,nombre,raza,edad):
        self.nombre = nombre
        self.raza = raza
        self.edad = edad
    def saluda(self):
        print("hola soy {0} de raza {1} con edad {2}".format(self.nombre,self.raza,self.edad))

perro1=Perro("nomuno","razauno",1)
perro2=Perro("nomdos","razados",2)

# hacemos un pickle
# creamos un fichero binario que es con el que voy a usar pickle

f=open("datos1","bw")

# metemos los datos con el metodod dump()
# dump necesita que le pases primero el dato y luego el fichero
pickle.dump(a,f)
pickle.dump(b,f)
pickle.dump(perro1,f)
pickle.dump(perro2,f)

# cerramos el fichero para guardar
f.close()
# ahora necesito saber en que orden guarde los datos
# por cada dump que haga tengo que ahcer un load

# abrimos el fichero
f=open("datos1","br+")

# ahora queremos leer cada dump que hicimos, usamos load
# para leer el registro solo le pasamos el nombre del fichero
# guardamos el resultaod del load en una variable

# la razon por la que debemos saber en que orden hacemos el dump, es por que a la hora de hacer load, devuelve las variables en el mismo orden

ax = pickle.load(f)
print(ax)

bx = pickle.load(f)
print(bx)

perro1x = pickle.load(f)
perro1.saluda()
perro1x.saluda()

perro2x = pickle.load(f)
perro2.saluda()
perro2x.saluda()
