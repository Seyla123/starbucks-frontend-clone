const content_1 = document.querySelector(".content-1-careers");
fetch("../../components/careers/culture-content.html")
  .then((res) => res.text())
  .then((data) => {
    content_1.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));