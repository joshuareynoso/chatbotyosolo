document.addEventListener('DOMContentLoaded', function() {
    const menuDiv = document.getElementById('menu');
    const respuestaDiv = document.getElementById('respuesta');
    const opcionesDiv = document.getElementById('opciones');

    // Muestra el menú principal
    function mostrarMenu() {
        const opciones = [
            "1. ¿Dónde está el hospital?",
            "2. ¿Cómo puedo sacar un turno?",
            "3. Horarios de los doctores",
            "4. Cuarta pregunta",
            "5. Quinta pregunta",
            "/// Si tus dudas no son estas, selecciona 6 para comunicarte a través del número del hospital ///"
        ];
        
        menuDiv.innerHTML = opciones.map((opcion, index) => 
            `<button onclick="procesarOpcion('${index + 1}')">${opcion}</button><br>`
        ).join('');
        respuestaDiv.innerHTML = '';
        opcionesDiv.innerHTML = '';
    }

    // Procesa la opción seleccionada por el usuario
    window.procesarOpcion = function(opcion) {
        let resultado = manejarInteraccion(opcion, null);

        respuestaDiv.innerHTML = resultado.mensaje;
        opcionesDiv.innerHTML = resultado.opciones.length > 0
            ? resultado.opciones.map(subOpcion => 
                `<button onclick="manejarInteraccion('${opcion}', '${subOpcion.split(' ')[0]}')">${subOpcion}</button><br>`
            ).join('') + `<button onclick="mostrarMenu()">Volver al Menú</button>`
            : `<button onclick="mostrarMenu()">Volver al Menú</button>`;
    }

    // Maneja la interacción continua
    window.manejarInteraccion = function(opcion, subOpcion) {
        let resultado;

        if (subOpcion === "7") {
            resultado = { mensaje: mostrarMenu(), opciones: [] };
        } else if (subOpcion === "8" || subOpcion === "9") {
            resultado = { mensaje: "Número del hospital: 03548 42-5824", opciones: [] };
        } else {
            resultado = procesarOpcion(opcion);
        }

        respuestaDiv.innerHTML = resultado.mensaje;
        opcionesDiv.innerHTML = resultado.opciones.length > 0
            ? resultado.opciones.map(subOpcion => 
                `<button onclick="manejarInteraccion('${opcion}', '${subOpcion.split(' ')[0]}')">${subOpcion}</button><br>`
            ).join('') + `<button onclick="mostrarMenu()">Volver al Menú</button>`
            : `<button onclick="mostrarMenu()">Volver al Menú</button>`;
    }

    // Procesa la opción seleccionada y devuelve la respuesta y opciones correspondientes
    function procesarOpcion(opcion) {
        let resultado = {};

        switch(opcion) {
            case "1":
                resultado.mensaje = "Hospital Municipal La Falda, 13 de Diciembre 596, X5172 La Falda, Córdoba";
                resultado.opciones = ["7. Preguntar algo más", "8. Comunicarte con el hospital"];
                break;
            case "2":
                resultado.mensaje = "Puedes ingresar en el siguiente link donde te explicarán cómo sacar un turno.";
                resultado.opciones = ["7. Preguntar algo más", "8. Comunicarte con el hospital"];
                break;
            case "3":
                resultado.mensaje = "En este link mostraremos los horarios de los doctores y qué día están.";
                resultado.opciones = ["7. Preguntar algo más", "8. Comunicarte con el hospital"];
                break;
            case "4":
                resultado.mensaje = "El horario de atención en el hospital es de 6:00 a 24:00.";
                resultado.opciones = ["7. Preguntar algo más", "8. Comunicarte con el hospital"];
                break;
            case "5":
                resultado.mensaje = "Aceptamos obras sociales.";
                resultado.opciones = ["7. Preguntar algo más", "8. Comunicarte con el hospital"];
                break;
            case "6":
                resultado.mensaje = "Número del hospital: 03548 42-5824";
                resultado.opciones = [];
                break;
            default:
                resultado.mensaje = "Esta opción no está en el menú, por favor elija una de las opciones.";
                resultado.opciones = [];
        }

        return resultado;
    }

    mostrarMenu();
});

