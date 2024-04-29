const logInContent = document.querySelector(".join-now-content-layout");
fetch("../../components/join-now/join-now.html")
.then((res) => res.text())

.then((data) => {
    logInContent.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));