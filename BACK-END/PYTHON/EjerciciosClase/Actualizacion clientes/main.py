# enunciado esta en la libreta Naranja
# importamos lo que debamos usar
import struct # sirve para tratar los paquetes de el fichero binario
import os

# hacemos las funciones
#----------------------------------------------------OPCION1------------------------------------------------------------------------------------------------

# la funcion opcion 1 se encagra de dar de alta en el fichero binario
def opcion1():
    with open("fibi","ba") as fibi:
        # como estamos metiendo registros en el fichero binario, lo primero es hacer una structura
        # la estructura es la siguiente, (I 10s 10s)
        s = struct.Struct("I 10s 10s") # mide 24 bytes

        # pedimos las variables para rellenar la estructura
        # la primera varibale la generamos usndo el atributo size del objeto que devuelve os.stat()
        # asi se asigna automaticamente el id y nadie puede hacer algo erroneo

        fichero = os.stat("fibi")
        bytes = fichero.st_size
        a = int(bytes/24) 

        # las siguientes variables las pedimos al usuario
        
        b = input("Introduce el nombre: ")
        c = input("Introduce la direccion: ")

        # empaquetamos el registro y hacemos encode a los string para poder meterlos en el fichero binario

        regisp = s.pack((a+1),b.encode("UTF-8"),c.encode("UTF-8"))

        # ya hemos empaquetado, ahora debemos escribir el paquete al final del fichero para que añada el registro y este ordenado
        # en el bucle ya abri el fichero y se lo pase a esta funcion por lo que no hace fala abrirlo aqui de nuevo

        # con el seek posicionamos el puntero
        fibi.seek(bytes)
        # escribimos el registro empaquetado
        fibi.write(regisp)


#----------------------------------------------------OPCION2------------------------------------------------------------------------------------------------

# la funcion opcion 2 se encarga de dar de alta en el fichero texto
def opcion2():
    with open("fite","a") as fite:
        # como estamos metiendo registros en un fichero texto, hay que hacer un formato para introducirle los datos
        # el formato es el siguiente, (3ints, 10s, saltoDeLinea)
        fichero = os.stat("fite")
        bytes = fichero.st_size
        a = int(input("Introduce su identificado, debe ocupar 3 bytes, puedes rellenar con ceros a la izquierda: "))
        b = input("Introduce tu nombre en mayusculas: ") 
        # hacemos la cadena con el formato que queremos para que siempre sean 14 bytes
        cadena = "{0:03}{1:<10s}{c}".format((a),b,c="\n")


        # ya tenemos la cadena lista por lo que procedemos a escribir el registro de 14 bytes

        # con el seek(bytes) le paso la ultima posicion para que el programa pueda escribir al final
        # con el write escribimos la cadena que creamos antes
        if bytes == 0:
            fite.write(cadena)
        elif bytes > 0:
            fite.seek(bytes)
            fite.write(cadena)
        

#----------------------------------------------------OPCION3------------------------------------------------------------------------------------------------

# la funcion opcion3 Actualizar, se encarga de leer el fichero tipo texto, ir registro a registro buscando el id que le hayamos especificado, en el fichero binario si alguno de sus registros coincide en la
# parte del id, se sustituye el campo del nombre del fichero binario, con el del fichero tipo texto 
def opcion3():
    with open("fibi", "br+")as fibi, open("fite","r+") as fite:

        # como estamos leyendo registros en el fichero binario, lo primero es hacer una structura
        # la estructura es la siguiente, (I 10s 10s)
        s = struct.Struct("I 10s 10s") # mide 24 bytes

        # vemos cuantos bytes tiene cada fichero para realizar operaciones posteriormente
        ficheroT = os.stat("fite")
        bytesT = ficheroT.st_size
        ficheroB = os.stat("fibi")
        bytesB = ficheroB.st_size

        # comprobamos que los ficheros si tienen contenido sobre el que tranajar
        if bytesT <= 0:
            print("El fichero tipo texto esta vacio, no se puede leer nada")
        elif bytesB <= 0:
            print("El fichero tipo texto esta vacio, no se puede leer nada")
        elif bytesT <= 0 and bytesB <= 0:
            print("ambos ficheros estab vacios, no se puede leer nada")

        # al ver que ninguno esta vacio, continuamos
        else:
            # sacamos cuantos registros tiene fite y lo guardamos en a
            a = int(bytesT/14)
            # contador nos ayudara a mover el puntero de escritura para meter el registro en fibi con la modificacion
            contador = 0
            for i in range(a):
                registrot = fite.read(14)
                # ahora que tenemos un registro del fite, leemos al completo el fibi en busca de coincidencias en el id para sustituir el nombre 
                # guardamos el id en una variable, esta varibale la suaremos despues para encontrar el registro de fibi a modificar
                idT = registrot[0]+registrot[1]+registrot[2]
                # aqui esta la variable que tiene guardada la id del registro que acabamos de ller de fite
                idT=idT.strip("0") 
                idT = int(idT)
                idB = 0
                
                # buscamos una coincidencia en el campo id de los registros de fibi
                while idT != idB:
                    
                    idB,nomB,dirB=s.unpack(fibi.read(24))
                    if idT == idB:
                        print("ids iguales, modificamos el nombre")
                        # obtenemos el campo nombre de fite
                        nombreF=registrot[3]+registrot[4]+registrot[5]+registrot[6]+registrot[7]+registrot[8]+registrot[9]+registrot[10]+registrot[11]+registrot[12]
                        nombreF = nombreF.strip(" ")

                        # creamos un nuevo paquete simplemente metiendo el nombre de fite dondde iria el antiguo nombre que se encuentra en fibi
                        paqueteNuevo = s.pack(idB,nombreF.encode("UTF-8"),dirB)
                        fibi.seek(contador)
                        fibi.write(paqueteNuevo)
                        # obtenemos el campo nombre de fibi y le hacemos decode

                        print("han coincidido ids cuando fite es: ",nombreF," y fibi es: ",nomB," y los hemos intercambiado en la posicon: ", contador)


                    else:
                        print("los ids no coinciden")
                        print(" el contador es: ", contador)  
                    contador += 24
                

#----------------------------------------------------OPCION4------------------------------------------------------------------------------------------------

# la funcion opcion4 Lista fichero binario, se encarga de listar el fichero binario, 
# si no le pasas ningun parametro, lista el fichero entero, 
# si le pasas un parametro el puntero se pone en la posicion del parametro que has pasado y lee hasta el final
# si le pasas el segundo parametro lee desde el principio hasta ese parametro
# si pasas dos parametros el puntero se coloca en la posicion del primer parametro y lee hasta la posicion del segundo parametro
def opcion4(pos1,pos2):
    with open("fibi","br+") as fibi:
        # comprobamos que el fichero no esta vacio viendo si la cantidad de bytes es mayor a 0
        fichero = os.stat("fibi")
        bytes = fichero.st_size
        if bytes <= 0:
            print("El fichero esta vacio, no se puede leer nada")
        # al ver que no esta vacio, comprobamos las 3 posibles situaciones
        else:

            # transformamos a en int para que los posibles bucles funcionen
            
            # como estamos leyendo registros desde el fichero binario, necesitamos la estructura de os registro para desempaquetar
            # la estructura es la siguiente, (I 10s 10s)
            s = struct.Struct("I 10s 10s") # mide 24 bytes
            if pos1 == "" and pos2 == "":
                a = int(bytes/24)
                for i in range(a):
                    # desempaquetamos el registro
                    id,nombre,direccion = s.unpack(fibi.read(24))
                    # hacemos decode a los string para que no esten en binario
                    nombre = nombre.decode("UTF-8")
                    direccion = direccion.decode("UTF-8")

                    # ahora quitamos los posibles \x00 que se han podido añadir por el formato que especificamos que tenga cada registro
                    # usamos el metodo split
                    nombre = nombre.split("\x00",1) 
                    nombre = nombre[0]

                    direccion = direccion.split("\x00",1) 
                    direccion = direccion[0]

                    # terminamos mostrando por consola el registro
                    print(id,nombre,direccion)

            elif pos1 != "" and pos2 == "":
                # transformamos pos1 que es un string a int
                pos1 = int(pos1)

                # ahora hacemos el caso en el que movemos el puntero para leer desde un registro en especifico hasta el final
                # movemos el puntero de lectura a la posicion que nos pasaron

                # en este caso debemos ajustar a para que el bucle no haga vueltas de mas y por lo tanto de error
                # a tiene que tener en cuenta, que si le pasan una posicion debe restarsela al numero de registros, ya que al pasar una posicion
                # no tiene que mostrar por pantalla todos los registros si no, todos los que hay desde la posicion hasta el final

                fibi.seek(pos1)
                a = int((bytes-pos1)/24)
                for i in range(a):
                    # desempaquetamos el registro
                    id,nombre,direccion = s.unpack(fibi.read(24))
                    # hacemos decode a los string para que no esten en binario
                    nombre = nombre.decode("UTF-8")
                    direccion = direccion.decode("UTF-8")

                    # ahora quitamos los posibles \x00 que se han podido añadir por el formato que especificamos que tenga cada registro
                    # usamos el metodo split
                    nombre = nombre.split("\x00",1) 
                    nombre = nombre[0]

                    direccion = direccion.split("\x00",1) 
                    direccion = direccion[0]

                    # terminamos mostrando por consola el registro
                    print(id,nombre,direccion)
            elif pos1 == "" and pos2 != "":
                pos2 = int(pos2)
                while fibi.tell() < pos2:
                    
                    # desempaquetamos el registro
                    id,nombre,direccion = s.unpack(fibi.read(24))
                    # hacemos decode a los string para que no esten en binario
                    nombre = nombre.decode("UTF-8")
                    direccion = direccion.decode("UTF-8")

                    # ahora quitamos los posibles \x00 que se han podido añadir por el formato que especificamos que tenga cada registro
                    # usamos el metodo split
                    nombre = nombre.split("\x00",1) 
                    nombre = nombre[0]

                    direccion = direccion.split("\x00",1) 
                    direccion = direccion[0]

                    # terminamos mostrando por consola el registro
                    print(id,nombre,direccion)
            elif pos1 != "" and pos2 != "":
                # transformamos pos1 y pos 2 que son un string a int
                pos1 = int(pos1)
                pos2 = int(pos2)

                # ahora hacemos el caso en el que movemos el puntero para leer desde un registro en especifico hasta la posicion de el segundo parametro que nos pasan
                # movemos el puntero de lectura a la posicion que nos pasaron y leemos hasta la siguiente posicion que nos pasaron

                # en este caso debemos ajustar a para que el bucle no haga vueltas de mas y por lo tanto de error
                # a tiene que tener en cuenta, que si le pasan una posicion debe restarsela al numero de registros, ya que al pasar una posicion
                # no tiene que mostrar por pantalla todos los registros si no, todos los que hay desde la posicion hasta el final
                
                # le pasamamos desde que posicion queremos leer
                fibi.seek(pos1)
                
                while fibi.tell() < pos2:
                    # desempaquetamos el registro
                    id,nombre,direccion = s.unpack(fibi.read(24))
                    # hacemos decode a los string para que no esten en binario
                    nombre = nombre.decode("UTF-8")
                    direccion = direccion.decode("UTF-8")

                    # ahora quitamos los posibles \x00 que se han podido añadir por el formato que especificamos que tenga cada registro
                    # usamos el metodo split
                    nombre = nombre.split("\x00",1) 
                    nombre = nombre[0]

                    direccion = direccion.split("\x00",1) 
                    direccion = direccion[0]

                    # terminamos mostrando por consola el registro
                    print(id,nombre,direccion)


#----------------------------------------------------OPCION5------------------------------------------------------------------------------------------------

# la funcion opcion5 Lista fichero texto, se encarga de listar el fichero texto, 
# si no le pasas ningun parametro, lista el fichero entero, si le pasas un parametro el puntero se pone en la posicion del parametro que has pasado y lee hasta el final
# si pasas dos parametros el puntero se coloca en la posicion del primer parametro y lee hasta la posicion del segundo parametro
def opcion5(pos1,pos2):
    with open("fite","r+") as fite:
        # comprobamos que el fichero no esta vacio viendo si la cantidad de bytes es mayor a 0
        fichero = os.stat("fite")
        bytes = fichero.st_size
        if bytes <= 0:
            print("El fichero esta vacio, no se puede leer nada")
        # al ver que no esta vacio, comprobamos las 3 posibles situaciones
        else:
            if pos1 == "" and pos2 == "":
                a = int(bytes/14)
                for i in range(a):
                    registro = fite.read(14)
                    print(registro)
                
            elif pos1 != "" and pos2 == "":
                pos1 = int(pos1)
                fite.seek(pos1)
                a = int((bytes-pos1)/14)
                for i  in range(a):
                    registro = fite.read(14)
                    print(registro)

            elif pos1 == "" and pos2 != "":
                pos2 = int(pos2)
                while fite.tell() < pos2:
                    registro = fite.read(14)
                    print(registro)

            elif pos1 != "" and pos2 != "":
                pos1 = int(pos1)
                pos2 = int(pos2)
                fite.seek(pos1)
                while fite.tell() < pos2:
                    registro = fite.read(14)
                    print(registro)



# ----------------------------------------------------MENU------------------------------------------------------------------------------------------------

# lo primero todo, a mi parecer es hacer el menu y despues las funcionalidades de las opciones

continuar = True
while continuar == True:
    opcion = int(input("Menu:\n1: Alta en fichero binario\n2: Alta en fichero texto\n3: Actualizacion\n4: Lista fichero binario\n5: Lista fichero texto\n6: Salir\nEscoge una opcion: ")) 


    if opcion == 1:
        print("opcion 1")
        opcion1()

    elif opcion == 2:
        print("opcion 2")
        opcion2()

    elif opcion == 3:
        print("opcion 3")
        opcion3()

    elif opcion == 4:
        print("opcion 4")
        pos1 = input("Desde que registro quieres consultar?: ")
        pos2 = input("Hasta que registro quieres mostrar?: ")
        opcion4(pos1,pos2)

    elif opcion == 5:
        print("opcion 5")
        pos1 = input("Desde que registro quieres consultar?: ")
        pos2 = input("Hasta que registro quieres mostrar?: ")
        opcion5(pos1,pos2)

    elif opcion == 6:
        print("opcion 6")
        continuar = False

    else:
        print("Opcion introducida no valida, vuelve a introducir una opcion.")

    

