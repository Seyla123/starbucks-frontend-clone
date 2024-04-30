// body
const find = document.querySelector(".find-content-layout");
fetch("../../components/find-a-store/content.html")
  .then((res) => res.text())

  .then((data) => {
    find.innerHTML = data;
    // Create array objects
    const listCards = [
      {
        location: "Eden Garden",
        direction: "Building E, Phnom Penh City Centre, Phnom Penh",
        distance: "3.6 miles away",
      },
      {
        location: "AEON Mall 1",
        direction: "3 Samdech Sothearos Blvd, Phnom Penh",
        distance: "3.3 miles away",
      },
      {
        location: "Prince Phnom Penh Tower",
        direction: "445 Preah Monivong Blvd, Phnom Penh",
        distance: "2.7 miles away",
      },
      {
        location: "Lucky Pavilion",
        direction: "G/F, Soyra Mall, Phnom Penh",
        distance: "2.8 miles away",
      },
      {
        location: "AEON Mall 1",
        direction: "3 Samdech Sothearos Blvd, Phnom Penh",
        distance: "3.3 miles away",
      },
      {
        location: "Sathapana Tower",
        direction: "41 Preah Norodom Blvd, Phnom Penh",
        distance: "2.1 miles away",
      },
      {
        location: "BKK Flagship",
        direction: "#14, St. 57 & 288, Sangkat Boeung Keng Kong",
        distance: "2.5 miles away",
      },
      {
        location: "TK Royal 1",
        direction: "G/F & M/F of TkK Royal One, Phnom Penh",
        distance: "3 miles away",
      },
      {
        location: "Prince Phnom Penh Tower",
        direction: "445 Preah Monivong Blvd, Phnom Penh",
        distance: "2.7 miles away",
      },
      {
        location: "Sathapana Tower",
        direction: "41 Preah Norodom Blvd, Phnom Penh",
        distance: "2.1 miles away",
      },
      {
        location: "Eden Garden",
        direction: "Building E, Phnom Penh City Centre, Phnom Penh",
        distance: "3.6 miles away",
      },
      {
        location: "Toul Tom Pong",
        direction:
          "Street 155 at Street 468, Toul Tom Pong I Commune, Phnom Penh",
        distance: "4.1 miles away",
      },
      {
        location: "The Bridge ",
        direction: "Village No.14, National Assembly Street, Phnom Penh City",
        distance: "3.1 miles away",
      },
      {
        location: "Chroy Changva",
        direction: "Open Space, Prohm Bayon Circle, Sangkat, Phnom Penh",
        distance: "0.5 miles away",
      },
      {
        location: "TK Royal 1",
        direction: "G/F & M/F of TkK Royal One, Phnom Penh",
        distance: "3 miles away",
      },
      {
        location: "Lucky Pavilion",
        direction: "G/F, Soyra Mall, Phnom Penh",
        distance: "2.8 miles away",
      },
      {
        location: "AEON Mall 1",
        direction: "3 Samdech Sothearos Blvd, Phnom Penh",
        distance: "3.3 miles away",
      },
      {
        location: "BKK Flagship",
        direction: "#14, St. 57 & 288, Sangkat Boeung Keng Kong",
        distance: "2.5 miles away",
      },
      {
        location: "The Bridge ",
        direction: "Village No.14, National Assembly Street, Phnom Penh City",
        distance: "3.1 miles away",
      },
      {
        location: "Sathapana Tower",
        direction: "41 Preah Norodom Blvd, Phnom Penh",
        distance: "2.1 miles away",
      },
      {
        location: "Prince Phnom Penh Tower",
        direction: "445 Preah Monivong Blvd, Phnom Penh",
        distance: "2.7 miles away",
      },
      {
        location: "The Bridge ",
        direction: "Village No.14, National Assembly Street, Phnom Penh City",
        distance: "3.1 miles away",
      },
      {
        location: "Lucky Pavilion",
        direction: "G/F, Soyra Mall, Phnom Penh",
        distance: "2.8 miles away",
      },
      {
        location: "Toul Tom Pong",
        direction:
          "Street 155 at Street 468, Toul Tom Pong I Commune, Phnom Penh",
        distance: "4.1 miles away",
      },
      {
        location: "Eden Garden",
        direction: "Building E, Phnom Penh City Centre, Phnom Penh",
        distance: "3.6 miles away",
      },
      {
        location: "TK Royal 1",
        direction: "G/F & M/F of TkK Royal One, Phnom Penh",
        distance: "3 miles away",
      },
      {
        location: "Lucky Pavilion",
        direction: "G/F, Soyra Mall, Phnom Penh",
        distance: "2.8 miles away",
      },
      {
        location: "AEON Mall 1",
        direction: "3 Samdech Sothearos Blvd, Phnom Penh",
        distance: "3.3 miles away",
      },
    ];

    // create cards function to loop over the listlocation
    const createCardComponent = () => {
      return `
      <div class="flex flex-col gap-1">
      ${listCards
        .map((card) => {
          return `
        <div id="button-up"
        class="card-location hover:bg-gray-100 rounded-lg py-[20px] flex justify-between items-center">
        <!-- content -->
        <div class="pl-10">
          <h1 class="font-bold text-[14px]">${card.location}</h1>
          <p class="text-[13px]">${card.direction}</p>
          <p class="text-[13px]">${card.distance}</p>
        </div>
        <!-- button -->
        <div class="pr-4 pl-10">
          <!-- heart and problem mark -->
          <div class="flex justify-end px-2 gap-4">
            <img
              class="size-[20px] cursor-pointer"
              src="../../images/reward/heart.png"
              alt="" />
            <img
              class="rotate-180 size-[20px] cursor-pointer"
              src="../../images/reward/problem.png"
              alt="" />
          </div>
          <div class="pt-2">
            <button
              id="order-btn"
              class="order-btn hidden hover:bg-opacity-90 px-[18px] py-[5px] text-[14px] text-white bg-[#00754a] font-medium border-[1px] rounded-full">
              Order Here
            </button>
          </div>
        </div>
      </div>
        `;
        })
        .join("")}

      </div>
      
    `;
    };

    // create class to link the component in HTML
    class CardComponent extends HTMLElement {
      connectedCallback() {
        this.innerHTML = createCardComponent();
      }
    }
    customElements.define("card-component", CardComponent);

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
    


  })
  .catch((error) => console.error("Error fetching included file:", error));
// modify card option
// border-[#00754a] bg-[#e9f0ee] border-2
