const content_cart_1 = document.querySelector(".content-cart-1-layout");
fetch("../components/carts/content-1.html")
  .then((res) => res.text())
  .then((data) => {
    content_cart_1.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));

const content_cart_2 = document.querySelector(".content-cart-2-layout");
fetch("../components/carts/content-2.html")
  .then((res) => res.text())
  .then((data) => {
    content_cart_2.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));