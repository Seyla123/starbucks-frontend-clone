import { category } from "./categoryArr.js"
import { subCategory } from "./subCategoryArr.js"
// Function to create the main category sidebar
const createMainCategorySideBar = () =>{
    return `
    <aside class="max-w-[140px] flex-col gap-10 hidden lg:flex">
    ${category.map((item)=>{
        return `
        <ul class="flex flex-col gap-4 text-[#888]">
            <h2 class="font-semibold text-lg text-black">${item.category_name}</h2>
            ${subCategory.filter(element => element.category_id == item.category_id).map((product)=>{
                return `
                <li>
                    <button  class="btn productBtn text-start" value="${product.sub_category_id}" >
                        ${product.sub_category_name}
                    </button>
                </li>
                `
            }).join("")}
            
        </ul>
        `
    }).join("")}
        
    </aside>
    `
}
class Sidebar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = createMainCategorySideBar()
    }
}

customElements.define('sidebar-menu-component', Sidebar)