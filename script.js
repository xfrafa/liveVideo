document.getElementById('send-button').addEventListener('click', function() {
    var messageInput = document.getElementById('message-input');
    var message = messageInput.value;
    if (message.trim() !== '') {
       var messageElement = document.createElement('p');
       messageElement.textContent = message;
       document.getElementById('chat-messages').appendChild(messageElement);
       messageInput.value = ''; // Limpa o campo de entrada
    }
   });