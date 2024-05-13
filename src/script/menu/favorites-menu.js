import * as chooseStore from "./choose-store.js"
import "../../script/components/layout.js"
// previous header
const favoritesHeader = document.querySelector(".favorites-header-layout");
fetch("../../components/menu/favorites-header.html")
.then((res) => res.text())

.then((data) => {
    favoritesHeader.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));
// previous content
const favoritesContent = document.querySelector(".favorites-content-layout");
fetch("../../components/menu/favorites-content.html")
.then((res) => res.text())

.then((data) => {
    favoritesContent.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));