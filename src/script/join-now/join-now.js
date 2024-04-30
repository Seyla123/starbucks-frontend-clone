const logInContent = document.querySelector(".join-now-content-layout");
fetch("../../components/join-now/join-now.html")
    .then((res) => res.text())
    .then((data) => {
        logInContent.innerHTML = data;

        const accordingHeaders = document.querySelectorAll(".according-header");

        accordingHeaders.forEach((header) => {
            header.addEventListener("click", function () {
                const accordingContent = header.parentElement.querySelector(".according-content");
                let accordingMaxHeight = accordingContent.style.maxHeight;

                if (!accordingMaxHeight || accordingMaxHeight === "0px") {
                    accordingContent.style.maxHeight = `${accordingContent.scrollHeight + 32}px`;
                } else {
                    accordingContent.style.maxHeight = "0px";
                }
            });
        });

        const chevron = document.getElementById("chevron-button")
        const dropLetter = document.getElementById("drop-letter")
        dropLetter.addEventListener("click", () => {
            chevron.classList.toggle("rotate-180");
        })
        chevron.addEventListener("click", () => {
            chevron.classList.toggle("rotate-180");
        })



        // password section
        const eyeIcon = document.getElementById("eyeicon");
        const passwordField = document.getElementById("password");

        eyeIcon.addEventListener("click", () => {
            togglePasswordFieldVisibility();
        });

        function togglePasswordFieldVisibility() {
            if (passwordField.type === "password") {
                passwordField.type = "text";
                eyeIcon.classList.add("eyeicon-active");
            } else {
                passwordField.type = "password";
                eyeIcon.classList.remove("eyeicon-active");
            }
        }



    })
    .catch((error) => console.error("Error fetching included file:", error));




// const accordingHeader = document.querySelector(".according-header");
// const accordingContent = document.querySelector(".according-content");

// accordingHeader.addEvenListener("click", () => {
//     alert("clicked")
// })

