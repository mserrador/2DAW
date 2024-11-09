# diccionario: clave num 0-9, segun elem. vocal otro diccionario, key 1:a , valor 2:e

dic = {
    "num":[0,1,2,3,4,5,6,7,8,9],"vocal":{1:"a",2:"e",3:"i",4:"o",5:"u"}    
}
# para acceder al numero 1 (primer elemento del diccionario)
print(dic["num"][1])
# para acceder a la vocal a
print(dic["vocal"][1])
print(dic["num"])

