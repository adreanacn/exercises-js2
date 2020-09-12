let jumbotronDiv = document.querySelector(".jumbotron");
let donateBtn = document.querySelector("#donate");
let volunteerBtn = document.querySelector("#volunteer");
let blueBtn = document.getElementById("blueBtn");
let orangeBtn = document.getElementById("orangeBtn");
let greenBtn = document.getElementById("greenBtn");
let submitBtn = document.querySelector('button[type="submit"]');
let emailInput = document.getElementById("exampleInputEmail1");
let nameInput = document.getElementById("example-text-input");
let describeInput = document.getElementById("exampleTextarea");

/*Functions for part 1 */
let blueClick = function () {
    jumbotronDiv.style.backgroundColor = "#588fbd";
    donateBtn.style.backgroundColor = "#ffa500";
    volunteerBtn.style.backgroundColor = "black";
    volunteerBtn.style.color = "white";
};

let orangeClick = function () {
    jumbotronDiv.style.backgroundColor = "#f0ad4e";
    donate.style.backgroundColor = "#5751fd";
    volunteerBtn.style.backgroundColor = "#31b0d5";
    volunteerBtn.style.color = "white";
};

let greenClick = function () {
    jumbotronDiv.style.backgroundColor = "#87ca8a";
    donate.style.backgroundColor = "black";
    volunteerBtn.style.backgroundColor = "#8c9c08";
};

blueBtn.addEventListener("click", blueClick);
orangeBtn.addEventListener("click", orangeClick);
greenBtn.addEventListener("click", greenClick);





/*Part 2*/

let inputs = [emailInput, nameInput, describeInput];
let submitClick = function (e) {
    e.preventDefault();
    const validInput = (x) => x.value.length > 0;
    if (inputs.every(validInput)) {
        inputs.forEach(function (x) {
            x.style.backgroundColor = "";
        });
        if (emailInput.value.includes("@")) {
            inputs.forEach(function (x) {
                x.style.backgroundColor = "";
                x.value = "";
            });
            alert("Thanks for filling the form!");
        } else {
            emailInput.style.backgroundColor = "red";
        }
    } else {
        inputs.forEach(function (x) {
            x.style.backgroundColor = x.value.length === 0 ? "red" : "";
        });
    }
};

submitBtn.addEventListener("click", submitClick);