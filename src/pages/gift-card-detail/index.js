// Get all elements with class "spanInput" and assign them to the constant "spanInput"
const spanInput = document.querySelectorAll(".spanInput");

// Define a function "moveSpan" 
function moveSpan() {
    for (let i = 0; i < spanInput.length; i++) {
        spanInput[i].classList.remove("left-3", "top-[14px]");
        spanInput[i].classList.add("bg-white");
    }
}

// Add an event listener to the "onload" event of the document body that calls the "moveSpan" function
document.body.addEventListener("onload", moveSpan());

// Get the URL of the current window and split it by "?"
let giftCard = window.location.href.split("?");

// Get the second part of the split URL (after the "?") and assign it to the constant "giftCard"
giftCard = giftCard[1];

// Get the element with the ID "giftCardImg" and assign it to the constant "giftCardImg"
const giftCardImg = document.querySelector("#giftCardImg");

// Set the "src" attribute of "giftCardImg" to the path of the image file corresponding to the "giftCard" value, located in the "../../images/gift-card/" directory
giftCardImg.setAttribute("src",`../../images/gift-card/${giftCard}`)
