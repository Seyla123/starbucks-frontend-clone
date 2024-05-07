const chooseStore = document.querySelector(".choose-store-content-layout");
fetch("../../components/menu/choose-store.html")
.then((res) => res.text())

.then((data) => {
    chooseStore.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));