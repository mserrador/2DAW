'''a = [[3,3,3],[3,3,3]]
resultado = a[0][0] + a[1][0]
print(resultado)
a = []
for i in range(3):
    
    a.append(input(""))
print(a)'''

'''lista = [1,2,3,4,5,6,7,8,9,10,11,12,13]


primo = False

for indice in lista:
    for i in range(2, indice):
        primo = False
        if indice % i == 0:
            print(indice, " no es primo", i, " es divisor")
            primo = True
            break
        
    if primo == False:
        print(indice, " es primo")'''

lista = [[6,2],[10,20],[50,10]]
a = []
for i in range(len(lista)):
    mayor = max(lista[i])
    menor = min(lista[i])
    
    final = list(range(menor, mayor + 1))
    
    a.append(final)

primo = False
for i in a:
    b = i
    for indice in b:
        for i in range(2, indice):
            primo = False
            if indice % i == 0:
                print(indice, " no es primo", i, " es divisor")
                primo = True
                break
            
        if primo == False:
            print(indice, " es primo")
