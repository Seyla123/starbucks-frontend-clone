// Footer
const footer = document.querySelector(".footer-layout");
fetch("../../components/layout/footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
    
    const btn1 = document.querySelector("#btn1");
    const drop1 = document.querySelector("#drop1");
    let isOpen = false;
    btn1.addEventListener("click", () => {

        isOpen = !isOpen;
    if (isOpen) {
      drop1.classList.add("max-h-screen");
      drop1.classList.remove("max-h-0");
    } else {
      drop1.classList.remove("max-h-screen");
      drop1.classList.add("max-h-0");
    }
      
    });
    
      
  })
  .catch((error) => console.error("Error fetching included file:", error));
