import sqlite3

conexion = sqlite3.connect("BACK-END/PYTHON/Apuntes/BBDD/bd1.sqlite")

# crear una tabla
cur=conexion.cursor()

cur.execute("""CREATE TABLE IF NOT EXISTS clientes(
                    codigo INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre VARCHAR(10),
                    apellido VARCHAR(10),
                    dni VARCHAR(9),
                    debe REAL)""")

# insertar en la tabla
cur.execute("INSERT INTO clientes(nombre,apellido,dni,debe) VALUES (?,?,?,?)",("Pedro","Fernandez","12345P",431.3))

cur.execute("INSERT INTO clientes(nombre,apellido,dni,debe) VALUES (?,?,?,?)",("Juan","Garcia","12345P",431.3))

# pedir datos a la bbdd
todo = cur.execute("SELECT * FROM clientes")
cliente1 = cur.fetchone()
print(cliente1)

cliente2 = cur.fetchone()
print(cliente2)


codigo_mostrar= 1
cliente = cur.execute(f"SELECT * FROM clientes WHERE codigo={codigo_mostrar}")
cliente = cur.fetchone()
print(cliente)

# commit, se hace sobre la conexion, no sobre el cursor
conexion.commit()


# borrar registros
'''cur.execute("DELETE FROM clientes *")'''
cliente = cur.execute(f"SELECT * FROM clientes")
cliente = cur.fetchone()
print(cliente)

print()
print(todo)

# DDL es un subconjunto de instrucciones sql (lenguaje de definicion de datos)
# DMl es un conjunto de instrucciones (lenguaje de manipulacion de datos)

# lo mejor que se ouede hacer es una bateria de queries, eso significa definir las querys y guardarlas en variables, hacer las queries muy genericas para que sean reutilizables
