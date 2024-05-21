import * as chooseStore from "./choose-store.js"
// previous header
const previousHeader = document.querySelector(".previous-header-layout");
fetch("../../components/menu/previous-header.html")
.then((res) => res.text())

.then((data) => {
    previousHeader.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));
// previous content
const previousContent = document.querySelector(".previous-content-layout");
fetch("../../components/menu/previous-content.html")
.then((res) => res.text())

.then((data) => {
    previousContent.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));