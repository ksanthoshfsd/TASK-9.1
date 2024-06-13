let display = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function appendCharacter(char) {
    currentInput += char;
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput || '0';
}