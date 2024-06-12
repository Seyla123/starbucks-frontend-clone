const basePath = "../../images/reward";
const filterData = [
  {
    title: "STORE HOURS",
    items: [
      { imgSrc: `${basePath}/open.png`, text: "Open Now" },
      {
        imgSrc: `${basePath}/open-24-hours.png`,
        text: "Open 24 hours per day",
      },
    ],
  },
  {
    title: "ORDER & PICKUP OPTIONS",
    items: [
      {
        imgSrc: `${basePath}/shopping.png`,
        text: "Mobile Order and Pay",
      },
      { imgSrc: `${basePath}/market.png`, text: "In store" },
      { imgSrc: `${basePath}/drive-thru.png`, text: "Drive-Thru" },
      { imgSrc: `${basePath}/pickup-car.png`, text: "Curbside" },
      { imgSrc: `${basePath}/coffee-table.png`, text: "Outdoor" },
    ],
  },
  {
    title: "AMENITIES",
    items: [
      {
        imgSrc: `${basePath}/starbuck.png`,
        text: "Starbucks Reserve-Clover Brewed",
      },
      { imgSrc: `${basePath}/sun-umbrella.png`, text: "Cafe Seating" },
      { imgSrc: `${basePath}/wifi.png`, text: "Starbucks Wi-Fi" },
      { imgSrc: `${basePath}/reward.png`, text: "Redeem Rewards" },
      { imgSrc: `${basePath}/birds.png`, text: "Oleato Beverages" },
      {
        imgSrc: `${basePath}/sun-umbrella.png`,
        text: "Outdoor Seating",
      },
    ],
  },
  {
    title: "COMPANY",
    items: [
      { imgSrc: `${basePath}/open.png`, text: "Customer Service" },
      {
        imgSrc: `${basePath}/open-24-hours.png`,
        text: "Available 24/7",
      },
    ],
  },
];

const filterSectionsContainer = document.getElementById("filter-sections");

filterData.forEach((section) => {
  const sectionElement = document.createElement("ul");
  sectionElement.classList.add("flex", "flex-col");

  const sectionTitle = document.createElement("h2");
  sectionTitle.classList.add(
    "text-[16px]",
    "py-2",
    "bg-[#e8e8e8]",
    "text-[#6b6b6b]",
    "font-semibold",
    "pl-8"
  );
  sectionTitle.textContent = section.title;
  sectionElement.appendChild(sectionTitle);

  section.items.forEach((item) => {
    const itemElement = document.createElement("span");
    itemElement.classList.add("flex", "gap-4", "py-4", "pl-8");

    const itemImg = document.createElement("img");
    itemImg.classList.add("size-[25px]");
    itemImg.src = item.imgSrc;
    itemImg.alt = "";

    const itemText = document.createElement("p");
    itemText.classList.add("text-[#767676]");
    itemText.textContent = item.text;

    itemElement.appendChild(itemImg);
    itemElement.appendChild(itemText);
    sectionElement.appendChild(itemElement);
  });

  filterSectionsContainer.appendChild(sectionElement);
});

// Select all card elements
const cards = document.querySelectorAll(".card-location");

// Function to remove styles from all cards and hide "Order Here" button
const resetCardsAndButton = () => {
  cards.forEach((card) => {
    card.classList.remove("border-[#00754a]", "bg-[#e9f0ee]", "border-2");
  });
  // Hide "Order Here" button
  const orderButtons = document.querySelectorAll(".order-btn");
  orderButtons.forEach((button) => {
    button.classList.add("hidden");
  });
};

// Loop through each card and add event listener
cards.forEach((card) => {
  card.addEventListener("click", () => {
    // Reset styles and hide "Order Here" button for all cards
    resetCardsAndButton();

    // Toggle the classes to change the style for the clicked card
    card.classList.add("border-[#00754a]", "bg-[#e9f0ee]", "border-2");

    // Show "Order Here" button for the clicked card
    const orderButton = card.querySelector(".order-btn");
    orderButton.classList.remove("hidden");
  });
});

// Scrolling action
const section = document.querySelector(".overflow-y-auto"); // Update class name
const buttons = document.querySelectorAll("#button-up");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonHeight = button.offsetHeight; // Get the height of the clicked button
    const currentScrollHeight = section.scrollTop; // Get the current scroll height
    const newScrollHeight = currentScrollHeight + buttonHeight; // Calculate the new scroll height
    section.scrollTo({
      top: newScrollHeight,
      behavior: "smooth",
    });
  });
});

// click and show filter
const filterBTN = document.querySelector("#filter-btn");
const closeBTN = document.querySelector("#close-btn");
const filterContent = document.querySelector("#filter-content");
const externalContent = document.querySelector("#external-content");
const componentHide = document.querySelector("#component-hide");
const findBTN = document.querySelector("#find-btn");

function showFilter() {
  filterContent.classList.remove(
    "scale-[120%]",
    "opacity-0",
    "pointer-events-none"
  );
  componentHide.classList.add("hidden");
  externalContent.classList.add("hidden");
  filterContent.classList.add(
    "scale-[100%]",
    "opacity-100",
    "pointer-events-auto"
  );
}
filterBTN.addEventListener("click", () => {
  showFilter();
});

findBTN.addEventListener("click", () => {
  showFilter();
});
closeBTN.addEventListener("click", () => {
  filterContent.classList.add(
    "scale-[120%]",
    "opacity-0",
    "pointer-events-none"
  );
  filterContent.classList.remove(
    "scale-[100%]",
    "opacity-100",
    "pointer-events-auto"
  );
  componentHide.classList.remove("hidden");
  externalContent.classList.remove("hidden");
});
