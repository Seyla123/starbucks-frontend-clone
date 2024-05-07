const careers_footer = document.querySelector(".careers-footer-careers");
fetch("../../components/careers/careers-footer.html")
  .then((res) => res.text())
  .then((data) => {
    careers_footer.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));