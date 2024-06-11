import { itemArr } from "./itemArr.js";
import { subCategory } from "./subCategoryArr.js";
export const createContentItem = (subId) =>{
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