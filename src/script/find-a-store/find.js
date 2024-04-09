// body
const body = document.querySelector(".body1");
fetch("../../components/find-a-store/body.html")
.then((res) => res.text())

.then((data) => {
    body.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));
//


//content1
const content1 = document.querySelector(".content1");
fetch("../../components/find-a-store/content1.html")
.then((res) => res.text())

.then((data) => {
    content1.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));
//

//content2
const content2 = document.querySelector(".content2");
fetch("../../components/find-a-store/content2.html")
.then((res) => res.text())

.then((data) => {
    content2.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));
// 

//content3
const content3 = document.querySelector(".content3");
fetch("../../components/find-a-store/content3.html")
.then((res) => res.text())

.then((data) => {
    content3.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));