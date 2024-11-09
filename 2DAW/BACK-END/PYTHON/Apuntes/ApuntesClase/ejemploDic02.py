
dici={"uno":"one","dos":"two","tres":"three"}
for k,v in dici.items():
    print(k,v)

dici["dos"]="twooooooo" # ahora el dici tiene en la key "dos":"twooooooooo"
dici["cuatro"]="four" # añade un elemento al diccionario
print(dici)

