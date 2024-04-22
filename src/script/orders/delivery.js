const delivery = document.querySelector(".order-delivery-layout");
fetch("../../components/order/delivery.html")
    .then((res) => res.text())
    .then((data) => {
      delivery.innerHTML = data;
    })
    .catch((error) => console.error("Error fetching included file:", error));