
// Array with movies
let filmsArr = [];

// Add a new movie into the movies array
function addFilm() {

    // Verify if input are filled with something
    if (!document.getElementById('film').value) {

        // Display error message
        document.getElementById('error-message-required').style.display = "block";

    } else {

        // hidde error message
        document.getElementById('error-message-required').style.display = "none";

        // Push the movie into the movies array
        filmsArr.push(document.getElementById('film').value);

        // Clear the input field value
        document.getElementById('film').value = "";

        // Clear the currently displayed movies to display the new movie
        document.getElementById('filmsList').innerHTML = "";
        
        for (let i = 0; i < filmsArr.length; i++) {

            // Verify if the filled value is a .jpg
            if (filmsArr[i].endsWith(".jpg")) {

                // Hidde the error message
                document.getElementById('error-message-url').style.display = "none";

                // Display the new movie
                document.getElementById('filmsList').innerHTML = document.getElementById('filmsList').innerHTML + "<div class='col-12 col-md-4 col-lg-3 text-center'><img class='film' src=" + filmsArr[i] + "></div";
            
            } else {

                // Display the error message
                document.getElementById('error-message-url').style.display = "block";
                
            }
        }
    }


}
