import mysql.connector

# Conectar a la base de datos
def conectar():
    return mysql.connector.connect(
        host="3306",
        user="root",
        password="14@55ESo",
        database="ejemplo1"
    )

# Añadir un contacto
def agregar_contacto(nombre, telefono, email):
    conn = conectar()
    cursor = conn.cursor()
    sql = "INSERT INTO contactos (nombre, telefono, email) VALUES (%s, %s, %s)"
    valores = (nombre, telefono, email)
    cursor.execute(sql, valores)
    conn.commit()
    print(f"Contacto {nombre} añadido.")
    cursor.close()
    conn.close()

# Listar todos los contactos
def listar_contactos():
    conn = conectar()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM contactos")
    resultados = cursor.fetchall()
    for contacto in resultados:
        print(contacto)
    cursor.close()
    conn.close()

# Actualizar un contacto
def actualizar_contacto(id, nombre, telefono, email):
    conn = conectar()
    cursor = conn.cursor()
    sql = "UPDATE contactos SET nombre = %s, telefono = %s, email = %s WHERE id = %s"
    valores = (nombre, telefono, email, id)
    cursor.execute(sql, valores)
    conn.commit()
    print(f"Contacto con ID {id} actualizado.")
    cursor.close()
    conn.close()

# Eliminar un contacto
def eliminar_contacto(id):
    conn = conectar()
    cursor = conn.cursor()
    sql = "DELETE FROM contactos WHERE id = %s"
    cursor.execute(sql, (id,))
    conn.commit()
    print(f"Contacto con ID {id} eliminado.")
    cursor.close()
    conn.close()

# Menú de usuario
def menu():
    while True:
        print("\nGestor de Contactos")
        print("1. Añadir contacto")
        print("2. Listar contactos")
        print("3. Actualizar contacto")
        print("4. Eliminar contacto")
        print("5. Salir")
        
        eleccion = input("Elige una opción: ")
        
        if eleccion == '1':
            nombre = input("Nombre: ")
            telefono = input("Teléfono: ")
            email = input("Email: ")
            agregar_contacto(nombre, telefono, email)
        elif eleccion == '2':
            listar_contactos()
        elif eleccion == '3':
            id = int(input("ID del contacto a actualizar: "))
            nombre = input("Nuevo nombre: ")
            telefono = input("Nuevo teléfono: ")
            email = input("Nuevo email: ")
            actualizar_contacto(id, nombre, telefono, email)
        elif eleccion == '4':
            id = int(input("ID del contacto a eliminar: "))
            eliminar_contacto(id)
        elif eleccion == '5':
            break
        else:
            print("Opción inválida, intenta de nuevo.")

if __name__ == "__main__":
    menu()
