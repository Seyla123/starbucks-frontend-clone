const imgArr = [
  [
    "feature-1.jpg",
    "feature-2.jpg",
    "feature-3.jpg",
    "feature-4.jpg",
    "feature-5.png",
    "feature-6.jpg",
    "feature-7.jpg",
    "feature-8.png",
    "feature-9.jpg",
    "feature-10.png",
    "feature-11.png",
    "feature-12.jpg",
    "feature-13.png",
    "feature-14.png",
    "feature-15.png",
    "feature-16.jpg",
    "feature-17.png",
    "feature-18.png",
    "feature-19.png",
    "feature-20.jpg",
    "feature-21.jpg",
  ],
  [
    "image copy 5.png",
    "image copy 6.png",
    "image copy 7.png",
    "image copy 8.png",
  ],
  [
    "bd-1.jpg",
    "bd-2.jpg",
    "bd-3.png",
    "bd-4.jpg",
    "bd-5.jpg",
    "image copy 9.png",
    "image copy 10.png",
    "image copy 11.png",
    "image copy 12.png",
  ],
  [
    "image copy 13.png",
    "image copy 14.png",
    "image copy 15.png",
    "image copy 16.png",
  ],
  [
    "image copy 17.png",
    "image copy 18.png",
    "image copy 19.png",
    "image copy 20.png",
    "image copy 31.png",
    "image copy 32.png",
    "image copy 33.png",
  ],
  ["image copy 21.png", "image copy 22.png", "image copy 23.png"],
  ["image copy 24.png", "image copy 25.png", "image copy 26.png"],
  [
    "image copy 27.png",
    "image copy 28.png",
    "image copy 29.png",
    "image copy 30.png",
  ],
  ["image copy 6.png", "image copy 7.png", "image copy 8.png"],
];
// Get the category from the URL and store it in the cardCategory variable
let cardCategory = window.location.href.split("?")[1];

// Get the element with the id "giftCardCategory" and store it in the giftCardCategory variable
const giftCardCategory = document.querySelector("#giftCardCategory");

// Initialize an empty string to store the HTML code
let html = "";

// Iterate over the images in the selected category
imgArr[cardCategory].forEach((item) => {
  // Append the HTML code for each image to the html string
  html += `
    <!-- Card container -->
    <div class="rounded-lg md:rounded-2xl overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:-translate-y-4 duration-500">
      <!-- Link to the detail page with the image name as a query parameter -->
      <a href="../../pages/gift-card-detail/gift-card-detail.html?${item}" class="w-full">
        <!-- Image element with the image source and classes -->
        <img src="../../images/gift-card/${item}" class="object-cover w-full h-full">
      </a>
    </div>`;
});

// Set the innerHTML of the giftCardCategory element to the generated HTML code
giftCardCategory.innerHTML = html;
