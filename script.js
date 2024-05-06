document.getElementById('fileLink').addEventListener('click', function(event) {
    event.preventDefault(); 
    alert('Simulated: Open File');
});

document.getElementById('editLink').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('textInput').focus(); 
});

document.getElementById('runLink').addEventListener('click', function(event) {
    event.preventDefault(); 
    checkInput();
});

document.getElementById('aboutUsLink').addEventListener('click', function(event) {
    event.preventDefault(); 
    showAboutUs();
});

function checkInput() {
    var inputText = document.getElementById('textInput').value.trim();
    var resultElement = document.getElementById('result');
    var message = '';

    if (inputText === '') {
        message = "Message: Please enter a value before checking.";
    } else {
        var scientificRegex = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;
        if (scientificRegex.test(inputText)) {
            message = "Message: " + inputText + " is a valid scientific number.";
        } else {
            message = "Message: " + inputText + " is not a valid scientific number.";
        }
    }

    resultElement.textContent = message;
}

function showAboutUs() {
    var aboutUsMessage = `
        Created By,
        Name  : Hendrik F.P Wompere 
        ID    : 211011060087
        Information System Class C
    `;

    var aboutUsElement = document.createElement('p');
    aboutUsElement.textContent = aboutUsMessage;
    aboutUsElement.classList.add('aboutUs');

    var container = document.querySelector('.container');
    container.appendChild(aboutUsElement);
}
