const peopleContent = document.querySelector(".people-content-layout");
fetch("../../components/social-impact/people.html")
.then((res) => res.text())

.then((data) => {
    peopleContent.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));