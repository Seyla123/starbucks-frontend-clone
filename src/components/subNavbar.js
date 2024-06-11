const subNavbarArr = [
{
    title : "Menu",
    link : "menu/menu.html"
},
{
    title : "Featured",
    link : "featured/feature-menu.html"
},
{
    title : "Previous",
    link : "previous/previous-page.html"
},
{
    title : "Favorites",
    link : "favorite/favorite.html"
},]

const renderSubNavbar = (page) =>{
    return subNavbarArr.map((item)=>{
        return `
            <li class="py-4 mr-8 ${page == item.title.toLowerCase() ? 'underline-offset-8 underline' : ''}"><a href="../../pages/${item.link}">${item.title}</a></li>
        `
    }).join("")
}
// Function to create the sub navigation based on the current page
const createSubNav = (page)=>{
    return `
    <!-- Sub Navigation -->
    <div class="bg-[#F9F9F9] w-full flex justify-center border to-black overflow-hidden">
        <div class="w-full md:ml-[78px] pl-6 ">
            <ul class="flex text-[13px] ">
            ${renderSubNavbar(page)}
            </ul>
        </div>
    </div>
    `
}

// Custom element for SubNav component
export class SubNav extends HTMLElement {
    constructor() {
        super();
    }

    // Lifecycle method called when the element is added to the DOM
    connectedCallback() {
        // Retrieve the 'page' attribute value
        const page = this.getAttribute('page');

        // Set the inner HTML of the component using the createSubNav function
        this.innerHTML = createSubNav(page);
    }
}

// Define a custom element named 'sub-navbar-component'
customElements.define('sub-navbar-component', SubNav);
