const navbarArr = [
    {
        title: "MENU",
        link: "menu/menu.html",
    }, 
    {
        title: "REWARDS",
        link: "reward/reward.html",
    },
    {
        title: "GIFT CARDS",
        link: "gift-card/gift-card.html",
    }]
// Function to render the navbar, sidebar base on parameter
export const renderNavbar = (sidebar)=>{
        // Map through navbarArr to create navbar links for top navigation
        const navbar = navbarArr.map((item)=>{
            return `<li><a class="hover:text-green-700"  href="../../pages/${item.link}">${item.title}</a></li>`
        }).join("")
        // Map through navbarArr to create navbar links for sidebar navigation with additional padding and block display
        const sideNavbar = navbarArr.map((item)=>{
            return `<li><a class="px-8 py-4 block"  href="../../pages/${item.link}">${item.title}</a></li>`
        }).join("")
        // Return sideNavbar if sidebar is true, otherwise return navbar
        return sidebar ? sideNavbar : navbar
    }
const createSidebar = ()=>{
    return `
    <sidebar id="minMenuDropdown" class="bg-white duration-300 w-[80%] md:invisible h-screen fixed right-[-100%] z-40">
        <div class="flex mt-10 flex-col">
            <ul class="flex flex-col text-xl ">
                ${renderNavbar("sidebar")}
            </ul>
            <hr class="mx-8 my-4">
            <div class="mx-8 my-4">
                <div class="flex gap-4 items-center text-md font-bold">
                    <a href="../../pages/log-in/log-in.html" class="h-3 p-4 items-center flex justify-center rounded-full outline outline-1 hover:bg-gray-200 ">Sign in</a>
                    <a href="../../pages/join-now/join-now.html" class="h-3 p-4 items-center flex justify-center text-white  bg-black hover:bg-gray-600 rounded-full">Join now</a>
            </div>
                <div class="flex manrope-sans font-semibold text-md items-center mt-4">
                    <a class="flex items-center gap-2 hover:text-green-700  " href="../../pages/find-a-store/find-a-store.html">
                        <i class="fa-solid fa-location-dot"></i>
                        <p>Find a Store</p>
                    </a>   
                </div>
            </div>
        </div>
    </sidebar>
    `;
}
export class Sidebar extends HTMLElement {
    constructor(){
        super()
    }
    connectedCallback() {
        // Set the inner HTML of the sidebar component
        this.innerHTML = createSidebar();
    }
}
// Define a custom element named 'sidebar-component'
customElements.define('sidebar-component', Sidebar);