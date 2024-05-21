const spanInput = document.querySelectorAll(".spanInput");
function moveSpan() {
    for (let i = 0; i < spanInput.length; i++) {
        spanInput[i].classList.remove("left-3", "top-[14px]");
        spanInput[i].classList.add("bg-white");
    }
}
document.body.addEventListener("onload", moveSpan());
import "../../script/components/inputTextField.js";


const inputField = document.querySelector(".inputField");
const label = document.querySelector(".label");
const labelText = label.querySelector("span span");
const req = document.querySelector(".req");

required(inputField, label, labelText, req);