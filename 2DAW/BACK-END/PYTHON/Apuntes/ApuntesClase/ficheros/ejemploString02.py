a = 123
b = 45.76
c="Federico Rico Rico"
d = "sseñor"

print("El <{3:0>6s}> <{2:50s}> cuyo codigo es <{0:@>20d}>, tiene {1:^10.2f}libras".format(a,b,c,d))

# {2:50s} añade 50 espacios a la derecha
# {0:@>20} añade 20 @ a la izquierda
# {1:^10} añade 5 a la izquierda y 5 a la derecha
# {3:0>6s} rellena con ceros a la izquierda porque el string debe ser minimo de 6 



c = input("dame nombre: ")[:15]

print("El <{3:0>6s}> <{2:<15s}> cuyo codigo es <{0:>20d}>, tiene {1:^10.2f}libras".format(a,b,c,d))

