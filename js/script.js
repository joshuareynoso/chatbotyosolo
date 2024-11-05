
const botondeinicidelmenu = document.getElementById('openMenuButton');
const menu = document.getElementById('menu');
const response = document.getElementById('response');
const cierredelmenu = document.getElementById('cierredelmenu');
const menuOptions = document.querySelectorAll('.menu-option');


botondeinicidelmenu.addEventListener('click', () => {
    menu.classList.remove('hidden');
    botondeinicidelmenu.classList.add('hidden'); 
    response.classList.add('hidden'); 
});

menuOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        const selectedOption = e.target.getAttribute('data-option');
        menu.classList.add('hidden'); 
        cierredelmenu.classList.remove('hidden'); 
        showResponse(selectedOption);
        interactWithOption(selectedOption); 
    });
});


function showResponse(option) {
    response.classList.remove('hidden');
    switch (option) {
        case '1':
            response.innerHTML = "<p>Hospital Municipal La Falda, 13 de Diciembre 596, X5172 La Falda, Córdoba.</p>";
            break;
        case '2':
            response.innerHTML = "<p>Puedes ingresar en el siguiente link donde te explican cómo sacar un turno.</p>";
            break;
        case '3':
            response.innerHTML = "<p>Aquí se mostrarán los horarios de los doctores y qué días están.</p>";
            break;
        case '4':
            response.innerHTML = "<p>Horario de atención en el hospital es de 6:00 a 24:00.</p>";
            break;
        case '5':
            response.innerHTML = "<p>Aceptamos todas las obras sociales.</p>";
            break;
        default:
            response.innerHTML = "<p>Esta opción no está en el menú. Comunícate con el hospital: 03548 42-5824</p>";
            break;
    }
}


function interactWithOption(option) {
    let followUpMessage = "";

  
    const followUpButton = document.createElement('button');
    followUpButton.textContent = "¿Quieres preguntar algo más? Presiona aquí";
    followUpButton.classList.add('follow-up-button');
    response.appendChild(followUpButton);

    
    followUpButton.addEventListener('click', () => {
        response.innerHTML = ""; 
        followUpMessage = "Si deseas continuar, selecciona una nueva opción del menú o comunícate con el hospital.";
        response.innerHTML = `<p>${followUpMessage}</p>`;

        const backToMenuButton = document.createElement('button');
        backToMenuButton.textContent = "Volver al Menú";
        backToMenuButton.classList.add('menu-return-button');
        response.appendChild(backToMenuButton);

        backToMenuButton.addEventListener('click', () => {
            response.classList.add('hidden'); 
            menu.classList.remove('hidden'); 
        });

        const finishConversationButton = document.createElement('button');
        finishConversationButton.textContent = "Terminar Conversación";
        response.appendChild(finishConversationButton);

        finishConversationButton.addEventListener('click', () => {
            response.innerHTML = "<p>Gracias por usar el chatbot. ¡Hasta luego!</p>";
            followUpButton.remove(); 
            cierredelmenu.classList.add('hidden');
            botondeinicidelmenu.classList.remove('hidden');
        });
    });
}

cierredelmenu.addEventListener('click', () => {
    response.innerHTML = "<p>Fin de la conversación.</p>";
    cierredelmenu.classList.add('hidden');
    botondeinicidelmenu.classList.remove('hidden');
});
