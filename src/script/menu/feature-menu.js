import "../../script/components/layout.js"
const featureContent = document.querySelector(".feature-content-layout");
fetch("../../components/menu/feature-content.html")
.then((res) => res.text())

.then((data) => {
    featureContent.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));