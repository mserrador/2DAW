import random
import math
# CREAMOS LA ESTRUCTURA AÑO
# round(random.uniform(-30,50),2)

def celsiusAFarenheit(): # Esta funcion genera una temperatura aleatoria en celsius y la pasa a farenheit
    celsius =  round(random.uniform(-30,50),2)
    farenheit = ((celsius*9)/5)+32
    return farenheit

def farenheitACelsius(): # Esta funcion genera una temperatura aleatoria en farenheit y la pasa a celsius
    farenheit = round(random.uniform(-22,122),2) 
    celsius = (farenheit - 32)*(5/9)
    return celsius

def dia():
    dia = []
    for i in range(24):
        dia.append(round(random.uniform(-30,50),2)) 

    return dia

def mes():
    mes = []
    for i in range(31):
        mes.append(dia())
    return mes

def año():
    año = []
    for i in range(12):
        año.append(mes())
    return año

def estructura(cantidadAnyos):
    estructura = [] 
    for i in range(cantidadAnyos):
        estructura.append(año())
    return estructura

estructura1 = estructura(1)
print(estructura1)

# conseguir que al introducir una fecha especifica me encuentre la temperatura


# print(año(input()))
# trabajamos con un año
'''for mes in range(12):
    for dia in range(31):
            for hora in range(24):
                año1[mes][dia][hora] = (int(str(mes)+str(dia)+str(hora)))'''
                
#print(año1)

anyos = int(input("Introduce cuantos años quieres: "))
medida = input("Quieres los grados en farenheit o celsius?: ")
 

A = []
for estructura in range(anyos + 1):        
    a = []
    for mes in range(12):
        b = []
        for dia in range(31):
            c = []
            for hora in range(24):
                if estructura > anyos:
                    media = 0
                    for i in range(anyos):
                        media += A[i][mes][dia][media]
                    media /= mes
                    c.append(round(media,2))
                else:    
                    if medida == "celsius":
                        c.append(round(farenheitACelsius(),2)) # introduce celsius
                    elif medida == "farenheit":
                        c.append(round(celsiusAFarenheit(),2)) # introduce farenheit
            b.append(c)
        a.append(b)
    A.append(a)

año = int(input("que año quieres: "))
mes = int(input("que mes quieres: "))
dia = int(input("que dia quieres: "))
hora = int(input("que hora quieres: "))

                





