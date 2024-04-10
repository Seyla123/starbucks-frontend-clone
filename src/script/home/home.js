// main section

const content = document.querySelector(".content-layout");
fetch("../../components/home/content.html")
.then((res) => res.text())
.then((data) => {
  content.innerHTML = data;
  minBtnMenu = document.querySelector("#minBtnMenu");
  minMenuDropdown = document.querySelector("#minMenuDropdown");

  minBtnMenu.addEventListener("click",function() {
    minMenuDropdown.classList.add("right-0");
    alert('hello')
  });


})
.catch((error) => console.error("Error fetching included file:", error));

