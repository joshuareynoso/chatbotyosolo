function Menu() {
    console.log("//////Menu//////");
    console.log("1. Donde esta el hospital");
    console.log("2. Como puedo sacar un turno");
    console.log("3. Horarios de los doctores");
    console.log("4. Cuarta pregunta");
    console.log("5. Quinta pregunta");
    console.log("/// Si tus dudas no son estas toque 6 para comunicarse a través del número del hospital ///");
}

Menu();

while (true) {
    const Opciones = parseInt(prompt("Ingrese una opción del 1 al 6:"));

    if (Opciones === 1) {
        console.log("Hospital Municipal La Falda, 13 de Diciembre 596, X5172 La Falda, Córdoba");
        const Opciones2 = parseInt(prompt("Si quiere preguntar algo más presione 7 o si su respuesta no fue la información que esperabas, puedes comunicarte con el hospital de La Falda tocando 8:"));

        if (Opciones2 === 7) {
            Menu();
            continue;
        }

        if (Opciones2 === 8) {
            console.log("Número del hospital: 03548 42-5824");
            const volver = parseInt(prompt("Si quiere preguntar algo más presione 9:"));
            if (volver === 9) {
                continue;
            } else {
                console.log("Fin de la conversación");
                break;
            }
        } else {
            console.log("Fin de la conversación");
            break;
        }

    } else if (Opciones === 2) {
        console.log("Puedes ingresar el siguiente link donde te explicarán cómo sacar un turno");
        const Opciones2 = parseInt(prompt("Si quiere preguntar algo más presione 7 o si su respuesta no fue la información que esperabas, puedes comunicarte con el hospital de La Falda tocando 8:"));

        if (Opciones2 === 7) {
            continue;
        }

        if (Opciones2 === 8) {
            console.log("Número del hospital: 03548 42-5824");
            const volver = parseInt(prompt("Si quiere preguntar algo más presione 9:"));
            if (volver === 9) {
                continue;
            } else {
                console.log("Fin de la conversación");
                break;
            }
        } else {
            console.log("Fin de la conversación");
            break;
        }

    } else if (Opciones === 3) {
        console.log("En este link mostraremos los horarios de los doctores y qué día están");
        const Opciones2 = parseInt(prompt("Si quiere preguntar algo más presione 7 o si su respuesta no fue la información que esperabas, puedes comunicarte con el hospital de La Falda tocando 8:"));

        if (Opciones2 === 7) {
            continue;
        }

        if (Opciones2 === 8) {
            console.log("Número del hospital: 03548 42-5824");
            const volver = parseInt(prompt("Si quiere preguntar algo más presione 9:"));
            if (volver === 9) {
                continue;
            } else {
                console.log("Fin de la conversación");
                break;
            }
        } else {
            console.log("Fin de la conversación");
            break;
        }

    } else if (Opciones === 4) {
        console.log("El horario de atención en el hospital es de 6:00 a 24:00");
        const Opciones2 = parseInt(prompt("Si quiere preguntar algo más presione 7 o si su respuesta no fue la información que esperabas, puedes comunicarte con el hospital de La Falda tocando 8:"));

        if (Opciones2 === 7) {
            Menu();
            continue;
        }

        if (Opciones2 === 8) {
            console.log("Número del hospital: 03548 42-5824");
            const volver = parseInt(prompt("Si quiere preguntar algo más presione 9:"));
            if (volver === 9) {
                continue;
            } else {
                console.log("Fin de la conversación");
                break;
            }
        } else {
            console.log("Fin de la conversación");
            break;
        }

    } else if (Opciones === 5) {
        console.log("Aceptamos obras sociales");
        const Opciones2 = parseInt(prompt("Si quiere preguntar algo más presione 7 o si su respuesta no fue la información que esperabas, puedes comunicarte con el hospital de La Falda tocando 8:"));

        if (Opciones2 === 7) {
            Menu();
            continue;
        }

        if (Opciones2 === 8) {
            console.log("Número del hospital: 03548 42-5824");
            const volver = parseInt(prompt("Si quiere preguntar algo más presione 9:"));
            if (volver === 9) {
                continue;
            } else {
                console.log("Fin de la conversación");
                break;
            }
        } else {
            console.log("Fin de la conversación");
            break;
        }

    } else {
        console.log("Esta opción no está en el menú. Por favor, elija una de las opciones:");
        break;
    }
}
