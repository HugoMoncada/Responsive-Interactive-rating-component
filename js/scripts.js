let buttons = document.querySelectorAll(".rating__button");
let submitButton = document.querySelector("#submit");
let selectedValue = document.querySelector("#selected-value");
let rating = document.querySelector(".rating");
let thanks = document.querySelector(".thanks");

// LISTENERS
buttons.forEach( button => {
    button.addEventListener("click", () => {
        removeClass();
        button.classList.remove("inactive");
        button.classList.add("active");
    });
})

submitButton.addEventListener("click", submit);


// FUNCTIONS
function removeClass () {
    buttons.forEach( button => {
        button.classList.remove("active");
        button.classList.add("inactive");
    });
}

function submit () {
    let selectedButton = "-"; 
    buttons.forEach ( button => {
        if( button.classList.contains("active") ){
            selectedButton = button.id;
        }
    })
    selectedValue.innerHTML = selectedButton;
    rating.style.display = "none";
    thanks.style.display = "block";
    
}