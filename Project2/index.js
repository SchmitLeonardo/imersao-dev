
/**
 * Calculates the currency informed
 * 
 * @param {*} event 
 */
function calculateCurrency(event) {

    // Prevent event default when send form
    event.preventDefault();

    // Get input value
    const value = parseFloat(document.getElementById('value').value);

    // Currencies values
    const dolar = 5.28;
    const euro = 6.20;
    const libra = 7.25;

    const resultDolar = value / dolar;
    document.getElementById('dolarResult').innerHTML = resultDolar.toFixed(0);

    const resultEuro = value / euro;
    document.getElementById('euroResult').innerHTML = resultEuro.toFixed(0);

    const resulLibra = value / libra;
    document.getElementById('libraResult').innerHTML = resulLibra.toFixed(0);

    // Display results on screen
    document.getElementById('result').style.display = 'block';
}

/**
 * Enable / Disable form button when user filled input
 * 
 */
function keyupInput() {
    if(!!parseFloat(document.getElementById('value').value)) {
        document.getElementById("Button").disabled = false;
        document.getElementById("Button").style.backgroundColor = '#edc298';
    } else {
        document.getElementById("Button").disabled = true;
        document.getElementById("Button").style.backgroundColor = '#9e8065';
    }
}
