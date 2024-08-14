print("Hola bienvenido al chatbot como te puedo ayudar")
def Menu():
    print("//////Menu//////") 
    print("1 Donde esta el hospital")
    print("2 como puedo sacar un turno")
    print("3 horarios de los doctores")
    print("4 cuarta pregunta")
    print("5 quinta pregunta")
    print("/// si tus dudas no son estas toque 6 para comunicarse atraves del numero del hospital///")


Menu() 
while True:
        Opciones=(input("ingrese una opcion del 1 al 6  :"))
        if Opciones== "1":
            print("Hospital Municipal La Falda, 13 de Diciembre 596, X5172 La Falda, Córdoba")
            Opciones2=(input("si quiere preguntar algo mas presione 7 o si  su respuesta no fue la informacion que esperavas, puedes comuicarte con el hospital de la falda tocando 8 :")) 
            if Opciones2=="7": 
                Menu()
                continue
            
            if Opciones2 =="8":
                print("Numero del hospital: 03548 42-5824")
                volver=(input("si quiere preguntar algo mas presione 9 :"))
                if volver=="9":
                    continue
                else:
                    print("Fin de la comersacion")
                    break
            else:
                print("fin de la comersacion ")
                break
        
    
        if Opciones== "2":
            print("puedes ingresar el sigiente likg donde te van a explicar como sacr un turno")
            Opciones2=(input("si quiere preguntar algo mas presione 7 o si  su respuesta no fue la informacion que esperavas, puedes comuicarte con el hospital de la falda tocando 8 :")) 
            if Opciones2=="7": 
                continue
            
            if Opciones2 =="8":
                print("Numero del hospital: 03548 42-5824")
                volver=(input("si quiere preguntar algo mas presione 9 :"))
                if volver=="9":
                    continue
                else:
                    print("Fin de la comersacion")
                    break
            else:
                print("fin de la comersacion ")
                break           

        if Opciones== "3":
            print("en este link mostraremos los horarios de los doctore y que dia estan")
            Opciones2=(input("si quiere preguntar algo mas presione 7 o si  su respuesta no fue la informacion que esperavas, puedes comuicarte con el hospital de la falda tocando 8 :")) 
            if Opciones2=="7": 
                continue
            
            if Opciones2 =="8":
                print("Numero del hospital: 03548 42-5824")
                volver=(input("si quiere preguntar algo mas presione 9 :"))
                if volver=="9":
                    continue
                else:
                    print("Fin de la comersacion")
                    break
            else:
                print("fin de la comersacion ")
                break
        
        if Opciones== "4":
            print("horari de atencion enn el hospital son  a las 6:00 hasta las 24:00")
            Opciones2=(input("si quiere preguntar algo mas presione 7 o si  su respuesta no fue la informacion que esperavas, puedes comuicarte con el hospital de la falda tocando 8 :")) 
            if Opciones2=="7": 
                print(Menu())
                continue
            
            if Opciones2 =="8":
                print("Numero del hospital: 03548 42-5824")
                volver=(input("si quiere preguntar algo mas presione 9 :"))
                if volver=="9":
                    continue
                else:
                    print("Fin de la comersacion")
                    break
            else:
                print("fin de la comersacion ")
                break
           
    
        elif Opciones== "5":
            print("Haceptamos obras sociales")
            Opciones2=(input("si quiere preguntar algo mas presione 7 o si  su respuesta no fue la informacion que esperavas, puedes comuicarte con el hospital de la falda tocando 8 :")) 
            if Opciones2=="7": 
                print(Menu())
                continue
            
            if Opciones2 =="8":
                print("Numero del hospital: 03548 42-5824")
                volver=(input("si quiere preguntar algo mas presione 9 :"))
                if volver=="9":
                    continue
                else:
                    print("Fin de la comersacion")
                    break
            else:
                print("fin de la comersacion ")
                break  

        elif Opciones != Opciones:
            print("Esta opcion no esta en el menu porfavor eliga una de las opciones:")  
            continue

        else:
            print("Numero del hospital: 03548 42-5824") 
        break 
print("FIN") 