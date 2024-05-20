const createSubNav = (page)=>{
    return `
    <!-- header -->
    <div class="bg-[#F9F9F9] w-full flex justify-center border to-black ">
        <div class="w-full md:ml-[78px] pl-6 ">
            <ul class="flex text-[13px] ">
                <li class="py-4 mr-8 ${page == 'menu'? 'underline-offset-8 underline' : ''}"><a href="../../pages/menu/menu.html">Menu</a></li>
                <li class="py-4 mr-8 "><a href="../../pages/menu/feature-menu.html">Featured</a></li>
                <li class="py-4 mr-8 ${page == 'previous'? 'underline-offset-8 underline' : ''}">Previous</li>
                <li class="py-4 mr-8 ${page == 'favorite'? 'underline-offset-8 underline' : ''}"><a href="../../pages/menu/favorites-page.html">Favorites</a></li>
            </ul>
        </div>
    </div>
    `
}

export class SubNav extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        const page = this.getAttribute('page');

        this.innerHTML = createSubNav(page);
    }
}

customElements.define('sub-navbar-component', SubNav)