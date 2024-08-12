import tkinter as tk
from tkinter import messagebox

def mostrar_menu():
    menu_text = (
        "//////Menu//////\n"
        "1. Donde esta el hospital\n"
        "2. Como puedo sacar un turno\n"
        "3. Horarios de los doctores\n"
        "4. Cuarta pregunta\n"
        "5. Quinta pregunta\n"
        "/// Si tus dudas no son estas, toque 6 para comunicarse con el número del hospital///"
    )
    messagebox.showinfo("Menu", menu_text)

def procesar_opcion():
    try:
        opcion = int(entry_opcion.get())
    except ValueError:
        messagebox.showerror("Error", "Por favor, ingrese un número válido.")
        return

    if opcion == 1:
        respuesta = "Hospital Municipal La Falda, 13 de Diciembre 596, X5172 La Falda, Córdoba"
    elif opcion == 2:
        respuesta = "Puedes ingresar el siguiente link donde te explicarán cómo sacar un turno."
    elif opcion == 3:
        respuesta = "En este link mostraremos los horarios de los doctores y qué día están."
    elif opcion == 4:
        respuesta = "El horario de atención en el hospital es de 6:00 a 24:00."
    elif opcion == 5:
        respuesta = "Aceptamos obras sociales."
    elif opcion == 6:
        respuesta = "Número del hospital: 03548 42-5824"
    else:
        respuesta = "Esta opción no está en el menú. Por favor, elija una opción válida."

    messagebox.showinfo("Respuesta", respuesta)

root = tk.Tk()
root.title("Menu de Hospital")

label = tk.Label(root, text="Ingrese una opción del 1 al 6:")
label.pack()

entry_opcion = tk.Entry(root)
entry_opcion.pack()

button_menu = tk.Button(root, text="Mostrar Menu", command=mostrar_menu)
button_menu.pack()

button_enviar = tk.Button(root, text="Enviar", command=procesar_opcion)
button_enviar.pack()

root.mainloop()
