import "../../script/components/layout.js"
const content_reward = document.querySelector(".content-reward-layout");

fetch("../../components/rewards/content.html")
  .then((res) => res.text())
  .then((data) => {
    content_reward.innerHTML = data;

    // get element address according to the coupon
    const couPon25 = document.getElementById("coupon25");
    const couPon100 = document.getElementById("coupon100");
    const couPon200 = document.getElementById("coupon200");
    const couPon300 = document.getElementById("coupon300");
    const couPon400 = document.getElementById("coupon400");

    // get element address according to the image
    const conTent25 = document.getElementById("content-25");
    const conTent100 = document.getElementById("content-100");
    const conTent200 = document.getElementById("content-200");
    const conTent300 = document.getElementById("content-300");
    const conTent400 = document.getElementById("content-400");

    // get underline element address by id
    const underLine = document.getElementById("green-underline");

    // function action
    couPon25.addEventListener("click", () => {
      conTent25.classList.remove("hidden");
      conTent100.classList.add("hidden");
      conTent200.classList.add("hidden");
      conTent300.classList.add("hidden");
      conTent400.classList.add("hidden");
    });

    couPon100.addEventListener("click", () => {
      conTent25.classList.add("hidden");
      conTent100.classList.remove("hidden");
      conTent200.classList.add("hidden");
      conTent300.classList.add("hidden");
      conTent400.classList.add("hidden");
    });

    couPon200.addEventListener("click", () => {
      conTent25.classList.add("hidden");
      conTent100.classList.add("hidden");
      conTent200.classList.remove("hidden");
      conTent200.classList.add("duration-200");
      conTent300.classList.add("hidden");
      conTent400.classList.add("hidden");
    });
    couPon300.addEventListener("click", () => {
      conTent25.classList.add("hidden");
      conTent100.classList.add("hidden");
      conTent200.classList.add("hidden");
      conTent300.classList.remove("hidden");
      conTent400.classList.add("hidden");
    });
    couPon400.addEventListener("click", () => {
      conTent25.classList.add("hidden");
      conTent100.classList.add("hidden");
      conTent200.classList.add("hidden");
      conTent300.classList.add("hidden");
      conTent400.classList.remove("hidden");
    });

    // move the underline
    // Calculate the width of each coupon element
    const couponWidth = couPon25.offsetWidth;
    underLine.style.transition = "transform 0.5s ease";

    couPon25.addEventListener("click", () => {
      moveUnderline(0);
    });

    couPon100.addEventListener("click", () => {
      moveUnderline(4);
    });

    couPon200.addEventListener("click", () => {
      moveUnderline(8.5);
    });

    couPon300.addEventListener("click", () => {
      moveUnderline(13);
    });

    couPon400.addEventListener("click", () => {
      moveUnderline(17.5);
    });

    // move according to the width of the coupon
    function moveUnderline(index) {
      const offset = index * couponWidth;
      underLine.style.transform = `translateX(${offset}px)`;
    }
  })
  .catch((error) => console.error("Error fetching included file:", error));
