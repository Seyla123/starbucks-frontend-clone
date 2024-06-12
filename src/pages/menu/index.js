import { createContentItem } from "./itemCotent.js";
// Selecting all elements with class 'btn'
const btn = document.querySelectorAll('.btn');
btn.forEach((item) => {
    // Adding click event listener to each button
    item.addEventListener('click', (e) => {
        // Selecting the main content element
        const mainContent = document.querySelector("#content-main");
        // Getting the value attribute of the clicked button
        const subId = e.target.attributes.value.value;
        //change content base on subId 
        mainContent.innerHTML = createContentItem(subId);
    });
});
