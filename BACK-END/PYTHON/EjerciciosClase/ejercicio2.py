# quiero que se metan perros por teclado, de manera indefinida, y que cada perro 
# este unido con el siguiente perro, de tal manera que si meto 5 perros sin ser 
# una restrucutra de array o diccionarios, tengo objetos unidos a otros (nodos)

class Animal:
    def __init__(self,especie,medio):
        self.especie = especie
        self.medio = medio

    def respirar(self):
        return "puffff"
    
'''class Nodo():
    def __init__(self,objeto):
        self.objeto = objeto
        self.siguienteObjeto = None'''

# la forma que he realizado, estaria aprobada, pero un perro en la vida real no tiene un apuntador a otro perro, 
# por lo tanto lo suyo es crear una clase, (nodo), y en ella hacer la lista de anidaciones de perros.

class Perro(Animal):
    def __init__(self,especie,medio,nombre,edad,raza): 
        super().__init__(especie,medio) 
        self.nombre = nombre
        self.edad = edad
        self.raza = raza
        self.siguientePerro = None

    def ladrar(self): # todos los metodos deben de tener como parametro self
            potenciaRazas = {"golden":3,"terrier":1,"caniche":1,"pastor aleman":4,"chihuahua":1}
            print("guau " * potenciaRazas.get(self.raza,1))
    def respirar(self):         
         return "paaaaaaaaaffffffffff" + super().respirar()
    


nombre = input("Introduce el nombre del perro: ")
edad = input("Introduce la edad del perro: ")
raza = input("Introduce la raza: ")
perroInicial = Perro("perro", "terrestre", nombre, edad, raza)
primero = perroInicial  

continuar = False
while not continuar:
    opcion = int(input("Quieres introducir otro perro? 1 sí, 0 no: "))
    if opcion == 1:
        nombre = input("Introduce el nombre del perro: ")
        edad = input("Introduce la edad del perro: ")
        raza = input("Introduce la raza: ")

   
    nuevoPerro = Perro("perro", "terrestre", nombre, edad, raza)
    perroInicial.siguientePerro = nuevoPerro
    perroInicial = nuevoPerro 

    opcion = int(input("Quieres introducir otro perro? 1 sí, 0 no: "))
    if opcion == 0:
        continuar = True
    elif opcion == 0:
        continuar = True

    

actual = primero
contador = 1
while actual.siguientePerro != None: # podria hacer en perro la funcion str y simplemente hacer un print de Perro
    print()
    print(contador, "º perro")
    print("--------------")
    print("Especie del perro:", actual.especie)
    print("Medio del perro:", actual.medio)
    print("Nombre del perro:", actual.nombre)
    print("Edad del perro:", actual.edad)
    print("Raza del perro:", actual.raza)
    print()
    contador += 1
    actual = actual.siguientePerro


    