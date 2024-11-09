# ejemplos herencia y sobreescribir metodos
class A:
    def __init__(self, auno, ados, atres):
        self.auno=auno
        self.ados=ados
        self.atres=atres

    def __str__(self): # sobreescribimos el metodo str, siempre debe ener un return para que funcione
        print("auno",self.auno)
        print("ados",self.ados)
        print("atres",self.atres)
        return "Monicius"
    
    def f1(self):        
        print("***** Estoy en la funcion f1 del padre *****")
    




class B(A): # asi se declara una herencia
    def __init__(self,auno,ados,atres,buno,bdos,btres):# se le debe pasar los atributos de A y B
        super().__init__(auno,ados,atres) # para acceder al constructor de A, se usa "super", se usa supr porque solo hereda de una clase, aqui no hace falta el self porque esta creando un ojeto
        self.buno=buno
        self.bdos=bdos
        self.btres=btres

    def f1(self):
        A.f1(self) # puedo usar super en caso de heredar de una sola clase o debo referenciar la clase y pasarle el objeto(self), para que el molde pueda crear el objeto
        print("***** Estoy en la funcion f1 del hijo *****") # sobre escribimos la funcion f1 del padre para que haga otra cosa


a = A(1,2,3)
print("a",a) # sin sobreescribir printea la direccion de memoria, con sobrescribir str hace lo que le pido arriba
print("a",a.auno,a.ados,a.atres)

b = B(1,2,3,11,22,33)
b.f1()

# queremos que cuando llamemos a la f1 del hijo, haga la f1 del padre y del hijo, que se ejecuten ambos
