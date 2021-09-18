
function verifyAnswer(event) {

    // Prevent event default when send form
    event.preventDefault();

    // Get value of input
    const answer = parseInt(document.getElementById('value').value);

    // Sort a random number between 0 and 10
    const sort = Math.round(Math.random() * 10);

    // Verify if the number informed is equal to random number
    if (answer === sort) {
        document.getElementById('alert-correct').style.display = 'block'
        disableButton();
        setTimeout(function () {
            document.getElementById('alert-correct').style.display = 'none'
            enableButton();
        }, 3000)
    } else {
        document.getElementById('alert-error').style.display = 'block'
        disableButton();
        setTimeout(function () {
            document.getElementById('alert-error').style.display = 'none'
            enableButton();
        }, 3000)
    }

}

/**
 * Enable / Disable form button when user filled input
 * 
 */
function keyupInput() {
    if (!!parseFloat(document.getElementById('value').value)) {
        enableButton();
    } else {
        disableButton();
    }
}

/**
 * Disable Button
 * 
 */
function disableButton() {
    document.getElementById("Button").disabled = true;
    document.getElementById("Button").style.backgroundColor = '#9e8065';
}

/**
 * Enable Button
 * 
 */
function enableButton() {
    document.getElementById("Button").disabled = false;
    document.getElementById("Button").style.backgroundColor = '#edc298';
}