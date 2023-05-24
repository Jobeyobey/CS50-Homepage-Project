// Check if page is loaded
let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(stateCheck);
        // If user hasn't submitted an email address already, activate popup
        if (!localStorage.getItem("userEmail")) {
            document.getElementById("popup-container").classList.add("popon");
            document.getElementById("popup-container").classList.remove("popup");
        }
    }
})

// Handle email submission
function handleEmail(event)
{
    let userInput = document.getElementById("email").value;
    localStorage.setItem("userEmail", userInput)
    document.querySelector(".speech-bubble").innerHTML = "See you on the battlefield!";
    document.getElementById("popup-container").classList.remove("popon");
    document.getElementById("popup-container").classList.add("popoff");
    event.preventDefault();
}