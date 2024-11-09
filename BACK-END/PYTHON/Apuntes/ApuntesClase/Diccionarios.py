# el diccionario es una variable mutable
# {} diccionario o conjunto, () tupla, [] lista
CR7 = {"uno":"one","dos":"two","tres":"three"}
print(CR7["dos"]) # meto la clave y me da el significado
CR7["dos"]="SIIIUUUUUUUUUUUUUUUUU"
print(CR7["dos"])

# iterar sobre la estructura
for a in CR7: # cuando iteras lo que devuelve default son las claves
    print(a)

for k,v in CR7.items(): # devuelve una lista el metodo y k y v itera sobre ellos
    print(k,v)
print(CR7.items()) # devuelve dos elemntos la key y el value y cada uno se debe guardar en una variable
# funcion que recibe una lista, una variblae y un diccioncario
# metodo get para diccionarios
def f1(a,*args,**kwargs):
    print("___________dentro de la f1")
    print("a", a)
    print("args", args)
    print("kwargs", kwargs)
    a=2222
    print(kwargs.get("uno","no existe"))
    print(kwargs.get("dos", "no existe"))
    print(kwargs.get("tres", "no existe"))



print("PROGRAMA PRINCIPAL")
f1(1,2,3,4,5,uno="uno", dos="dos")
