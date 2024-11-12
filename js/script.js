const botondeinicidelmenu = document.getElementById('openMenuButton');
const menu = document.getElementById('menu');
const response = document.getElementById('response');
const cierredelmenu = document.getElementById('cierredelmenu');
const menuOptions = document.querySelectorAll('.menu-option');
const chatBox = document.getElementById('chat-box');

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
        addMessage("user", e.target.innerText);
        showResponse(selectedOption);
    });
});

function showResponse(option) {
    let botReply = "";
    switch (option) {
        case '1':
            botReply = "Hospital Municipal La Falda, 13 de Diciembre 596, X5172 La Falda, Córdoba.";
            break;
        case '2':
            botReply = "Puedes ingresar en el siguiente link donde te explican cómo sacar un turno.";
            break;
        case '3':
            botReply = "Aquí se mostrarán los horarios de los doctores y qué días están.";
            break;
        case '4':
            botReply = "Horario de atención en el hospital es de 6:00 a 24:00.";
            break;
        case '5':
            botReply = "Aceptamos todas las obras sociales.";
            break;
        default:
            botReply = "Esta opción no está en el menú. Comunícate con el hospital: 03548 42-5824";
            break;
    }
    addMessage("bot", botReply);
}

function addMessage(sender, text) {
    const message = document.createElement('p');
    message.classList.add(sender === "bot" ? "bot-message" : "user-message");
    message.textContent = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

cierredelmenu.addEventListener('click', () => {
    addMessage("bot", "Fin de la conversación.");
    cierredelmenu.classList.add('hidden');
    botondeinicidelmenu.classList.remove('hidden');
});
