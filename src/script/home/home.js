// main section

const section1 = document.querySelector(".section-1-layout");
fetch("../../components/home/section-1.html")
.then((res) => res.text())
.then((data) => {
  section1.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));