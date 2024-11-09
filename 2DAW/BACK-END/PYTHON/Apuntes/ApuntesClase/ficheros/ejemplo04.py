import struct # este fichero esta incompleto, no hacerle caso
# abrimos fichero texto e introducimos 5 registros

# print(nom) -> nomuno\x00\x00\x00\x00\x00\x00
# nom = nom.split("\x00",1)[0]
# print(nom) -> nomuno

# abrimos fite1
fite = open ("fite1.txt","r+")
# abrimos fibe
fibi = open ("fibi", "br+")
# definimos la estrucutra para empaquetar, esto se hace para poder escribir en tipo binario
s = struct.Struct("I f 10s")

# vamos a escribir en el fichero binario
a=1
b=1.1
c="nomuno"

cortop = s.pack(a,b,c.encode("UTF-8"))

fibi.write(cortop)

a=2
b=2.2
c="nomdos"

cortop = s.pack(a,b,c.encode("UTF-8"))

fibi.write(cortop)











