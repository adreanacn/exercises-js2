/*
================

1. Create an HTML file that uses this javascript file.
2. The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
3. When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=45 with 
user latitude and longitude.
4. When you get the response from the server, print the current temperature in an <h3> marker.
5. Validate the form when you click on the button, if the inputs are empty or ar not numeric, show a warning message

================
*/

const getButton = document.getElementById("get-button");
getButton.addEventListener("click", () => {
    const latitude = document.getElementById("latitude").value
    const longitude = document.getElementById("longitude").value
    fetch("https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}")
        .then(response => response.json())
        .then(json => console.log(json.main.temp))
        .catch(error => console.error(error))
});