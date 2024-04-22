const order = document.querySelector(".order-order-layout");
fetch("../../components/order/order.html")
  .then((res) => res.text())
  .then((data) => {
    order.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));





