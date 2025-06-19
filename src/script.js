const displayBar = document.getElementById("display-el");

function displayButtonValue(input) {
    displayBar.textContent += input;
}

function calculate() {
    try{
        displayBar.textContent = eval(displayBar.textContent);
    } catch (error) {
        displayBar.textContent = "Error";
    }
}