const content_about_us_1 = document.querySelector(".content-1-about-us-layout");
fetch("../../components/about-us/our-company.html")
  .then((res) => res.text())
  .then((data) => {
    content_about_us_1.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));

const content_about_us_2 = document.querySelector(".content-2-about-us-layout");
fetch("../../components/about-us/our-coffee.html")
  .then((res) => res.text())
  .then((data) => {
    content_about_us_2.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));

const contactUs = document.querySelector(".contact-us-about-us-layout");
fetch("../../components/about-us/contact-us.html")
  .then((res) => res.text())
  .then((data) => {
    contactUs.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));
  