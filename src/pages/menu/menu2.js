// const item_type = [
//     {   item_type_id:0,
//         sub_category_id : 0,
//         item_type : "Americanos"
//     },
//     {   item_type_id:1,
//         sub_category_id : 0,
//         item_type : "Brewed Coffees"
//     },
//     { 
//         item_type_id:2,
//         sub_category_id : 0,
//         item_type :"Cappuccinos"
//     },
//     { 
//         item_type_id:3,
//         sub_category_id : 0,
//         item_type :"Espresso Shots"
//     },
//     { 
//         item_type_id:3,
//         sub_category_id : 0,
//         item_type :"Espresso Shots"
//     },
// ]

import { itemArr} from "./itemArr.js";
import { category } from "./categoryArr.js";
import { subCategory } from "./subCategoryArr.js";
// category.map((item) => {
//     console.log("id : ", item.category_id, "category name : ", item.category_name);
//     const filter = subCategory.filter(element => element.category_id == item.category_id)
//     console.log("filter : ", filter);
// })
// const filterItem = item.filter(item => item.sub_category_id == 0)
// console.log("item filter :", filterItem);
// const bakeryProducts = [
//     {
//         sectionTitle: 'Bagels',
//         products: [
//             {
//                 name: 'Hot Chocolates',
//             },
//             {
//                 name: 'White Hot Chocolate',
//             },
//             {
//                 name: 'Hot Chocolates',
//             },
//         ],
//     },

//     {
//         sectionTitle: 'Cake Pops',
//         products: [
//             {
//                 name: 'Caramel Apple Spice',
//             },
//             {
//                 name: 'Steamed Apple Juice',
//             },
//             {
//                 name: 'Steamed Apple Juice',
//             },
//         ],
//     },

//     {
//         sectionTitle: 'Cookies, Brownies & Bars',
//         products: [
//             {
//                 name: 'Iced Chai Tea Latte',
//             },
//             {
//                 name: 'Pistachio Crème Frappuccino® Blended Beverage',
//             },
//             {
//                 name: 'Iced Chai Tea Latte',
//             },
//         ],
//     },

//     {
//         sectionTitle: 'Croissants',
//         products: [
//             {
//                 name: 'Iced Chai Tea Latte',
//             },
//             {
//                 name: 'Pistachio Crème Frappuccino® Blended Beverage',
//             },
//             {
//                 name: 'Iced Chai Tea Latte',
//             },
//         ],
//     },

//     {
//         sectionTitle: 'Loaves, Cakes & Buns',
//         products: [
//             {
//                 name: 'Iced Chai Tea Latte',
//             },
//             {
//                 name: 'Pistachio Crème Frappuccino® Blended Beverage',
//             },
//             {
//                 name: 'Iced Chai Tea Latte',
//             },
//             {
//                 name: 'Iced Chai Tea Latte',
//             },
//         ],
//     },

//     {
//         sectionTitle: 'Danishes & Doughnuts',
//         products: [
//             {
//                 name: 'Iced Chai Tea Latte',
//             },
//             {
//                 name: 'Pistachio Crème Frappuccino® Blended Beverage',
//             },
//             {
//                 name: 'Iced Chai Tea Latte',
//             },
//         ],
//     },

//     {
//         sectionTitle: 'Muffins & Scones',
//         products: [
//             {
//                 name: 'Iced Chai Tea Latte',
//             },
//             {
//                 name: 'Pistachio Crème Frappuccino® Blended Beverage',
//             },
//             {
//                 name: 'Iced Chai Tea Latte',
//             },
//         ],
//     },
// ];
// function hello() {
//     alert("hello")
// }
// const tesing = document.querySelector("#tesing");
// tesing.addEventListener('click', (e) => {
//     console.log("id : ", e.target.value)
//     const filterId = item.filter(item => item.sub_category_id == 0)
//     console.log("item by sub category : ", filterId);
// })
// function myFunction() {
//     console.log("my fuc");
// }
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

const createContentItem = (subId) =>{
    const filter = itemArr.filter(i=>i.sub_category_id == subId)
    const itemTypes = [...new Set(filter.map(item => item.item_type))];
    const subName = subCategory.find(i =>i.sub_category_id == subId).sub_category_name

    return `
         <div id="hotCoffeesProduct" class="max-w-[1500px] ">
            <p class="text-sm md:text-md text-gray-500 font-semibold">
                  Menu / <span class="text-black">${subName}</span>
            </p>
            <h2 class="md:mt-8 mt-4 font-bold text-xl lg:text-3xl">${subName}</h2>
            <!-- Drink -->
            ${itemTypes
							.map((product) => {
								return `
                        <div class="mt-10">
                              <h2 class="font-bold text-xl lg:text-3xl">${
																product
															}</h2>
                              <hr class="mt-6 " />
                              <div class="grid md:grid-cols-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-10 gap-4 gap-y-14 my-14">
                                 <!-- Card -->
                                 ${filter.filter(i =>i.item_type == product)
																		.map((item) => {
																			const imgSrc = `../../images/menu/${item.item_img_path}`;

																			return `
                                             <a href="../../pages/product/product_detail.html?6" class="h-full w-full flex flex-col items-center gap-4">
                                                <div class="w-36 h-36 rounded-full overflow-hidden">
                                                      <img class="w-full h-full object-cover" src="${imgSrc}" alt="" />
                                                </div>
                                                <h4 class="text-lg lg:text-xl text-center">${item.item_name}</h4>
                                             </a>
                                          `;
																		})
																		.join(' ')}
                              </div>
                        </div>
                     `;
							})
							.join('')}
         </div>
      `;
}


class Sidebar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = createMainCategorySideBar()
    }
}

class MainCategory extends HTMLElement {
    connectedCallback() {
        this.innerHTML = createMainCategory();
    }
}

customElements.define('sidebar-menu-component', Sidebar)
customElements.define('main-category-component', MainCategory);
const btn = document.querySelectorAll('.btn');
        btn.forEach((item)=>{
            item.addEventListener('click',(e)=>{
                const mainContent = document.querySelector("#content-main")
                const subId = e.target.attributes.value.value
                mainContent.innerHTML = createContentItem(subId)
            })
        })
