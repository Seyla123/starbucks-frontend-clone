const logInContent = document.querySelector(".log-in-content-layout");
fetch("../../components/log-in/log-in.html")
.then((res) => res.text())

.then((data) => {
    logInContent.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));