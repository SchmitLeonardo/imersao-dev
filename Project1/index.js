
/**
 * Calculates the grades entered in the form
 * 
 * @param {*} event 
 */
function calculateGrades(event) {

    // Prevent event default when send form
    event.preventDefault();

    // Array with all grades fields
    var grades = [];

    // Get all notes input values
    grades[0] = document.getElementById("grade1");
    grades[1] = document.getElementById("grade2");
    grades[2] = document.getElementById("grade3");
    grades[3] = document.getElementById("grade4");

    // If field isn't filled display error message
    grades.map(element => {
        console.log(element);
        if (!!parseInt(element.value)) {
            console.log('nao entrou aqui')
            document.getElementById(element.name).style.borderBottomColor = '#4e4543';
            document.querySelector('.' + element.name).style.display = 'none';
        } else {
            console.log('entrou aqui')
            document.getElementById(element.name).style.borderBottomColor = '#8F0031';
            document.querySelector('.' + element.name).style.display = 'block';
        }
    })

    // Verify if all fields have been filled
    if (parseInt(grades[0].value) && parseInt(grades[1].value) && parseInt(grades[2].value) && parseInt(grades[3].value)) {

        // Calculate the grades and round the value
        var calc = (parseInt(grades[0].value) + parseInt(grades[1].value) + parseInt(grades[2].value) + parseInt(grades[3].value)) / 4;
        var result = calc.toFixed(1);

        // Display Result on screen
        document.getElementById('gradesResult').innerHTML = result;
        document.getElementById('result').style.display = 'block';
    }
}

/**
 * Show error message when field isn't filled
 * 
 * @param {*} input 
 */
function focusOutInput(input) {
    if (!!parseInt(document.getElementById(input).value)) {
        document.getElementById(input).style.borderBottomColor = '#4e4543';
        document.querySelector('.' + input).style.display = 'none';
    } else {
        document.getElementById(input).style.borderBottomColor = '#8F0031';
        document.querySelector('.' + input).style.display = 'block';
    }
}
