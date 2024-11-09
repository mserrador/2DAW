# funcion que construya un diccionario, pasandole un (**c), le pasamos un 
# (+,1,2,3,"uno"="one","dos"="two","tres"="three")
def construirDiccionario(a,*b,**c):
    print("a",a)
    print("b",b)
    print("c",c)
print(construirDiccionario("+",1,2,3,4,5,uno="one",dos="two",tres="three"))


def f3(a,b=0): # el b = 0 significa que si por algun casual no le llega b a la funcion automaticamente le define 0, si le llega no le da el valor de 0
    print(b)

def f3(a,b=0,*c,**d): # pensar para el siguiente dia





