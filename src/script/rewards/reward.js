const content_reward = document.querySelector(".content-reward-layout");
fetch("../components/rewards/content.html")
  .then((res) => res.text())
  .then((data) => {
    content_reward.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));