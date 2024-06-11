import { createContentItem } from "./itemCotent.js";
const btn = document.querySelectorAll('.btn');
        btn.forEach((item)=>{
            item.addEventListener('click',(e)=>{
                const mainContent = document.querySelector("#content-main")
                const subId = e.target.attributes.value.value
                mainContent.innerHTML = createContentItem(subId)
            })
        })
