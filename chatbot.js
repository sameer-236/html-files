function sendMessage() {
    let userInput = document.getElementById("user-input");
    let chatBox = document.getElementById("chat-box");

    if (userInput.value.trim() === "") return;

    // Add user message to chat
    let userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.innerText = userInput.value;
    chatBox.appendChild(userMessage);

    // Simulate bot response
    setTimeout(() => {
        let botMessage = document.createElement("div");
        botMessage.classList.add("bot-message");
        botMessage.innerText = getBotResponse(userInput.value);
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    userInput.value = "";
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Simple bot response function
function getBotResponse(input) {
    let responses = {
        "hello": "Hi there! 😊",
        "how are you": "I'm just a bot, but I'm doing great!",
        "bye": "Goodbye! Have a nice day! 👋"
    };

    input = input.toLowerCase();
    return responses[input] || "I'm still under development.";
}
