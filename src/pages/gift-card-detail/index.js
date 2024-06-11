const spanInput = document.querySelectorAll(".spanInput");
function moveSpan() {
    for (let i = 0; i < spanInput.length; i++) {
        spanInput[i].classList.remove("left-3", "top-[14px]");
        spanInput[i].classList.add("bg-white");
    }
}
document.body.addEventListener("onload", moveSpan());

let giftCard = window.location.href.split("?");
giftCard = giftCard[1];
console.log(giftCard);
const giftCardImg = document.querySelector("#giftCardImg");
giftCardImg.setAttribute("src",`../../images/gift-card/${giftCard}`)