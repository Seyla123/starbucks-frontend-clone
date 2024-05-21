const planetContent = document.querySelector(".planet-content-layout");
fetch("../../components/social-impact/planet.html")
.then((res) => res.text())

.then((data) => {
    planetContent.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));