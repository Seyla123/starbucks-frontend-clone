// main section

const content = document.querySelector(".content-layout");
fetch("../../components/home/content.html")
.then((res) => res.text())
.then((data) => {
  content.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));