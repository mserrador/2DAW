# EJERCICIO-2:
class Animal:
    def __init__(self,especie,medio):
        self.especie = especie
        self.medio = medio

    def respirar(self):
        return "puffff nene, si lo siento"
    


class Perro(Animal):
    def __init__(self,especie,medio,nombre,edad,raza): # ejercicio 3
        super().__init__(especie,medio) # ejercicio 3
        self.nombre = nombre
        self.edad = edad
        self.raza = raza
# EJERCICIO-1:
    def ladrar(self): # todos los metodos deben de tener como parametro self
            potencia_razas = {"golden":3,"terrier":1,"caniche":1,"pastor aleman":4,"chihuahua":1}
            print("guau " * potencia_razas.get(self.raza,1))
    def respirar(self):         
         return "paaaaaaaaaffffffffff" + super().respirar()
                 
# antes de poner la herecia 
'''perro1 = Perro("Fumon",1,"pastor aleman")
print(perro1.nombre)

perro1.ladrar()

animal1= Animal("raton","terrestre")
animal1.respirar()'''

# EJERCICIO-1: dentro de ese ladrar crear una estructura en la cual tengamos la raza y la fuerza, en el 
# caso de que la raza del perro no se encuentre en la estructura, le ponemos fuerza 1
# lo que queremos es que solo pasando la raza (instaciando el perro), pase automaticamente 
# los ladridos que hace segun su fuerza-potencia

# EJERCICIO-2: una clase que se llame animal, y esa clase va a tener un nombre y a su vez va a
# tener un medio(terrestre, acuatico, aereo), y quiero que haga una function
# que se llame respirar, y esa funcion lo que va a hacer es escribirme un soplido

# EJERCICIO-3: hacer la herencia entre animal y perro

# EJERCICIO-4: quiero hacer un respirar como perro, op1, sobreescrivir el metodo animal, 
# op2, sobreescribir respirar, que haga lo mismo y añadirle cosas que haga un perro

perro1 = Perro("Perro","Terrestre","Nelo",10,"chihuahua")
print(perro1.nombre)
print(perro1.especie)
print("respira")



