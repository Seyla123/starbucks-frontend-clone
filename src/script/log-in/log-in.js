const logInContent = document.querySelector(".log-in-content-layout");
fetch("../../components/log-in/log-in.html")
.then((res) => res.text())

.then((data) => {
    logInContent.innerHTML = data;

    const userInput = document.querySelector("#userInput");
    const userLabel = document.querySelector("#userLabel");
    const userLabelText = document.querySelector("#userLabel span span");
    const reqUser = document.querySelector("#reqUser");

    userInput.addEventListener("focus", () => {
       //!-- left-3 top-[-20%] text-sm text-red-500 || border-2 border-red-500-->

       userLabel.classList.add("left-3","top-[-18%]","text-sm","text-[#00754a]");
       userInput.addEventListener("focusout", () => {
        if (userInput.value.length <=0){
            userLabel.classList.remove("left-3","top-[-18%]","text-sm","text-[#00754a]");
            userLabel.classList.add("text-red-500");
            userLabelText.classList.add("text-red-500");
            userInput.classList.add("border-2","border-red-500");
            reqUser.classList.remove("hidden");

        }else{
            userLabel.classList.remove("text-[#00754a]")
        }
       })
       //userLabelText.classList.add("text-sm","text-")
       //,"text-red-500
       //userInput.classList.add("border-2","border-red-500")
    })
})
.catch((error) => console.error("Error fetching included file:", error));