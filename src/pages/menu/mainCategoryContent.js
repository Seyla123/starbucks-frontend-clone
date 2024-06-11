import { category } from "./categoryArr.js"
import { subCategory } from "./subCategoryArr.js"
const createMainCategory = ()=>{
    return `
    <div id="mainComponent" class="w-full lg:max-w-[80%] max-w-[100%] productComponent">
        <h2 class="mt-2 font-bold text-xl lg:text-3xl">Menu</h2>
        ${category.map((item)=>{
            return `
            <div class="mt-8">
                <h2 class="font-bold text-xl lg:text-3xl">${item.category_name}</h2>
                <hr class="mt-4 pb-6" />
                <div class="grid md:grid-cols-2 lg:gap-8 gap-4">
                ${subCategory.filter(element => element.category_id == item.category_id).map((sub)=>{
                    return `
                    <!-- Card -->
                    <button class="btn productBtn flex items-center gap-4" >
                        <div class="flex items-center text-start gap-4">
                            <img value="${sub.sub_category_id}"  class="rounded-full lg:w-28 lg:h-28 w-20 h-20 object-cover" src="../../images/menu/${sub.sub_category_img_path}" alt="${sub.sub_category_name}" />
                                <h4 class="text-lg lg:text-xl">${sub.sub_category_name}</h4>
                        </div>
                    </button>
                    `
                }).join("")}
                    
                </div>
            </div>
            `
        }).join("")}
        
    </div>
    `
}
class MainCategory extends HTMLElement {
    connectedCallback() {
        this.innerHTML = createMainCategory();
    }
}

customElements.define('main-category-component', MainCategory);