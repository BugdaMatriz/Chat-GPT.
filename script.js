const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", sendMessage);

function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() === "") {
        return;
    }

    const assistantResponse = "Resposta do Assistente: ..."; // Aqui você chamaria a API do GPT-3.5 para obter a resposta real

    const now = new Date();
    const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

    const message = `
        <div class="message user-message">
            <span class="timestamp">${formattedDate}</span>
            <p>${userMessage}</p>
        </div>
        <div class="message assistant-message">
            <span class="timestamp">${formattedDate}</span>
            <p>${assistantResponse}</p>
        </div>
    `;

    chatLog.innerHTML += message;
    userInput.value = "";

    chatLog.scrollTop = chatLog.scrollHeight;
}
