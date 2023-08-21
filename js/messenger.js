document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('send-button');
    const messageInput = document.getElementById('message-input');
    const chat = document.querySelector('.chat');

    sendButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message !== '') {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message');
            messageDiv.innerHTML = `
                <div class="message-sender">You</div>
                <div class="message-content">${message}</div>
            `;
            chat.appendChild(messageDiv);
            messageInput.value = '';
        }
    });
});
