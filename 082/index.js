
function toggleTime() {
    const sendButton = document.getElementById('sendButton');
    sendButton.textContent === 'Done' ? sendButton.textContent = 'Send' : sendButton.textContent = 'Done';
    sendButton.classList.toggle('back');
}