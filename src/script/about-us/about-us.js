const content_about_us_1 = document.querySelector(".content-1-about-us-layout");
fetch("../../components/about-us/content-1.html")
  .then((res) => res.text())
  .then((data) => {
    content_about_us_1.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));

const content_about_us_2 = document.querySelector(".content-2-about-us-layout");
fetch("../../components/about-us/content-2.html")
  .then((res) => res.text())
  .then((data) => {
    content_about_us_2.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));

  const content_about_us_3 = document.querySelector(".content-3-about-us-layout");
  fetch("../../components/about-us/content-3.html")
    .then((res) => res.text())
    .then((data) => {
      content_about_us_2.innerHTML = data;
    })
    .catch((error) => console.error("Error fetching included file:", error));