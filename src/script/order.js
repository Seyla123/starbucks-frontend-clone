const content_order_1 = document.querySelector(".content-1-order-layout");
fetch("../components/order/content-1.html")
  .then((res) => res.text())
  .then((data) => {
    content_order_1.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));

const content_order_2 = document.querySelector(".content-2-order-layout");
fetch("../components/order/content-2.html")
    .then((res) => res.text())
    .then((data) => {
      content_order_2.innerHTML = data;
    })
    .catch((error) => console.error("Error fetching included file:", error));

const content_order_3 = document.querySelector(".content-3-order-layout");
fetch("../components/order/content-3.html")
    .then((res) => res.text())
    .then((data) => {
      content_order_3.innerHTML = data;
    })
    .catch((error) => console.error("Error fetching included file:", error));

