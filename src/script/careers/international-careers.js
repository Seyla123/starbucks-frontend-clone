const u_s_careers = document.querySelector(".international-careers");
fetch("../../components/careers/international-content.html")
  .then((res) => res.text())
  .then((data) => {
    u_s_careers.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));