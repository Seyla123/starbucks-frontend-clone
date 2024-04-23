const pickup = document.querySelector(".order-pickup-layout");
fetch("../../components/order/pickup.html")
    .then((res) => res.text())
    .then((data) => {
      pickup.innerHTML = data;
    })
    .catch((error) => console.error("Error fetching included file:", error));
