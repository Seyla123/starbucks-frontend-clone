import './sidebar.js'; 
const createNavbar = (maxWidth, isMenuHidden) => {
    return `<nav class=" w-full flex justify-between gap-4 bg-white px-8 h-[83px] lg:h-[99px] shadow-lg p-4 ${isMenuHidden ? "md:justify-start" : "md:justify-center"} outline outline-1 outline-none relative z-50">
    <a href="../home/home.html" class="max-w-14">
        <img src="../../images/layout/starkbuck-logo.png" alt="">
    </a>
    <div class="w-full ${maxWidth ?  "max-w-screen-2xl" : ""} justify-between items-center hidden ${isMenuHidden ? "md:hidden" : "md:flex"} ">
        <div>
            <ul class="flex gap-4 sodan font-bold tracking-widest text-sm">
                <li><a class="hover:text-green-700"  href="../../pages/menu/menu.html">MENU</a></li>
                <li><a class="hover:text-green-700"  href="../../pages/reward/reward.html">REWARDS</a></li>
                <li><a class="hover:text-green-700"  href="../../pages/gift-card/gift-card.html">GIFT CARDS</a></li>
            </ul>

        </div>

        <div>
            <ul class="flex gap-12 manrope-sans font-semibold text-sm items-center">
                <li >
                    <a class="flex items-center gap-2 hover:text-green-700  " href="../../pages/find-a-store/find-a-store.html">
                        <i class="fa-solid fa-location-dot"></i>
                        <p>Find a Store</p>
                        </a>
                </li>
                <li class="flex gap-4 items-center">
                    <a href="../../pages/log-in/log-in.html" class="h-3 p-4 items-center flex justify-center rounded-full outline outline-1 hover:bg-gray-200 ">Sign in</a>
                    <a href="../../pages/join-now/join-now.html" class="h-3 p-4 items-center flex justify-center text-white  bg-black hover:bg-gray-600 rounded-full">Join now</a>
                </li>
            </ul>
        </div>

    </div>
    <button class="menu-button max-w-5 flex items-center ${isMenuHidden ? "hidden" : ""} md:hidden " id="menuButton">
        <!-- Hamburger icon or menu icon -->
        <span class="menu-icon" id="menuIcon">
          <img src="../../images/layout/menu.png" alt="Menu">
        </span>
      </button>
    <a class="invisible  max-w-14 hidden  2xl:${maxWidth ? "flex" : "invisible"} ${isMenuHidden ? "2xl:hidden" : ""}">
        <img src="../../images/layout/starkbuck-logo.png" alt="">
    </a>
    
</nav> 
<!-- sidebar -->

    `;
}

class navbar extends HTMLElement {
    connectedCallback() {
        const maxWidth = this.getAttribute("maxWidth") === 'true';
        const isMenuHidden = this.getAttribute("isMenuHidden") === 'true';
        this.innerHTML = createNavbar(maxWidth, isMenuHidden);
        this.appendChild(document.createElement('sidebar-component'));
        this.addMenuButtonListener();
    }


    addMenuButtonListener() {
        const menuButton = this.querySelector('#menuButton');
        const minMenuDropdown = this.querySelector("#minMenuDropdown");

        menuButton?.addEventListener("click", () => {
            const isActive = menuButton.classList.toggle("active");
            this.querySelector('#menuIcon').innerHTML = isActive ? '<img src="../../images/layout/close.png" alt="Close">' :'<img src="../../images/layout/menu.png" alt="Menu">';
            minMenuDropdown.style.right = isActive ? "0%" : "-100%";
            document.body.classList.toggle("overflow-hidden", isActive);
        });
    }
}

customElements.define('navbar-component', navbar);

