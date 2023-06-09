// Function to append clicked button value to the result input
function appendToResult(value) {
    document.getElementById("result").value += value;
}

function deleteLastCharacter() {
    const result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
}

// Function to clear the result input
function clearResult() {
    document.getElementById("result").value = "";
}

function calculatePercentage() {
    const result = document.getElementById("result").value;
    const percentage = parseFloat(result) / 100;
    document.getElementById("result").value = percentage;
}

// Function to evaluate and display the result
function calculateResult() {
    try {
        const result = eval(document.getElementById("result").value);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
