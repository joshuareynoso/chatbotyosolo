function Menu() {
    console.log("//////Menu//////");
    console.log("1 Donde esta el hospital");
    console.log("2 como puedo sacar un turno");
    console.log("3 horarios de los doctores");
    console.log("4 cuarta pregunta");
    console.log("5 quinta pregunta");
    console.log("/// si tus dudas no son estas toque 6 para comunicarse atraves del numero del hospital///");
}

function ejecutarMenu(Opciones, Opciones2, volver) {
    if (Opciones === "1") {
        console.log("Hospital Municipal La Falda, 13 de Diciembre 596, X5172 La Falda, Córdoba");
        if (Opciones2 === "7") {
            Menu();
            return "continuar";
        }
        if (Opciones2 === "8") {
            console.log("Número del hospital: 03548 42-5824");
            if (volver === "9") {
                return "continuar";
            } else {
                console.log("Fin de la conversación");
                return "fin";
            }
        } else {
            console.log("Fin de la conversación");
            return "fin";
        }
    }

    if (Opciones === "2") {
        console.log("Puedes ingresar el siguiente link donde te van a explicar cómo sacar un turno.");
        if (Opciones2 === "7") {
            return "continuar";
        }
        if (Opciones2 === "8") {
            console.log("Número del hospital: 03548 42-5824");
            if (volver === "9") {
                return "continuar";
            } else {
                console.log("Fin de la conversación");
                return "fin";
            }
        } else {
            console.log("Fin de la conversación");
            return "fin";
        }
    }

    if (Opciones === "3") {
        console.log("En este link mostraremos los horarios de los doctores y qué día están.");
        if (Opciones2 === "7") {
            return "continuar";
        }
        if (Opciones2 === "8") {
            console.log("Número del hospital: 03548 42-5824");
            if (volver === "9") {
                return "continuar";
            } else {
                console.log("Fin de la conversación");
                return "fin";
            }
        } else {
            console.log("Fin de la conversación");
            return "fin";
        }
    }

    if (Opciones === "4") {
        console.log("Horario de atención en el hospital son 6:00 hasta las 24:00");
        if (Opciones2 === "7") {
            Menu();
            return "continuar";
        }
        if (Opciones2 === "8") {
            console.log("Número del hospital: 03548 42-5824");
            if (volver === "9") {
                return "continuar";
            } else {
                console.log("Fin de la conversación");
                return "fin";
            }
        } else {
            console.log("Fin de la conversación");
            return "fin";
        }
    }

    if (Opciones === "5") {
        console.log("Aceptamos obras sociales");
        if (Opciones2 === "7") {
            Menu();
            return "continuar";
        }
        if (Opciones2 === "8") {
            console.log("Número del hospital: 03548 42-5824");
            if (volver === "9") {
                return "continuar";
            } else {
                console.log("Fin de la conversación");
                return "fin";
            }
        } else {
            console.log("Fin de la conversación");
            return "fin";
        }
    }

    if (!["1", "2", "3", "4", "5"].includes(Opciones)) {
        console.log("Esta opción no está en el menú, por favor elige una de las opciones:");
        return "continuar";
    } else {
        console.log("Número del hospital: 03548 42-5824");
        return "fin";
    }
}

Menu();

// Ejemplo de cómo podrías llamar la función con valores predefinidos
let resultado;
do {
    resultado = ejecutarMenu("1", "7", "9");
} while (resultado === "continuar");

console.log("FIN");
