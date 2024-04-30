const content = document.querySelector(".content-careers");
fetch("../../components/careers/college-content.html")
  .then((res) => res.text())
  .then((data) => {
    content.innerHTML = data;
    const buttonHead = document.querySelectorAll(".buttonHead");
    const contentDropdown = document.querySelectorAll(".contentDropdown");
    const chevron = document.querySelectorAll(".chevron");
  
    for (let i = 0; i < buttonHead.length; i++) {
      buttonHead[i].addEventListener("click", () => {
        buttonHead[i].classList.toggle("active");
        if (buttonHead[i].classList.contains("active")) {
          contentDropdown[i].classList.add("max-h-screen");
          contentDropdown[i].classList.remove("max-h-0");
          chevron[i].classList.add("rotate-180");
        } else {
          contentDropdown[i].classList.remove("max-h-screen");
          contentDropdown[i].classList.add("max-h-0");
          chevron[i].classList.remove("rotate-180");
        }
      });
    }    
  })
  .catch((error) => console.error("Error fetching included file:", error));


