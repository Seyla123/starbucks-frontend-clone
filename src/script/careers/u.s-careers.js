const u_s_careers = document.querySelector(".us-careers");
fetch("../../components/careers/u.s-content.html")
  .then((res) => res.text())
  .then((data) => {
    u_s_careers.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));

  const whatYourName = document.querySelector("#whatYourName");
  const whatYourNameInput = document.querySelector("#whatYourNameInput");

  whatYourNameInput.addEventListener("focus",()=>{
    whatYourName.classList.remove("text-black/90")
    whatYourName.classList.add("left-3", "-top-2", "text-xs", "bg-white", "px-1" ,"text-[#00754a]")
  })
  whatYourNameInput.addEventListener("focusout",()=>{
    if(whatYourNameInput.value.length == 0){
      whatYourName.classList.remove("left-3", "-top-2", "text-xs", "bg-white", "px-1" ,"text-[#00754a]")
    }
  })


