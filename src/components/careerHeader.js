const findAStore = ["Retail","Corporate","Manufacturing & Disturbution","Internship", "FAQ & Tips","Current Partners"]
const working = ["Culture and Values", "Benefits and Perks","Education" ]
const careerArr = ["Home","Find a Job", "Working at Starbucks", "My Jobs"]
const headerArr = [
    {
        title :"Find a Job",
        id : "findajob-button"
    },
    {
        title :"Working at Starbucks",
        id : "working-button"
    },
    {
        title :"My Jobs",
        id : "myjobs-button"
    }
    ]
const renderHeaderArr = ()=>{
    return headerArr.map((item)=>{
        return `
        <li id="${item.id}">
            <button class="flex group justify-center w-full items-center gap-1 py-3">
            ${item.title}<span><img src="../../images/careers/icon/down-arrow-5-svgrepo-com.svg"
                class="w-4 group-hover:rotate-180 duration-300" alt="" id="findajob-chevron" /></span>
        </button>
        </li>`
    }).join("")
}
const renderFindAStore = ()=>{
    return findAStore.map((item)=>{
         return `
        <div class="bg-white hover:bg-[#edebe9] text-black/95 tracking-wide p-2 cursor-pointer">${item}</div>
        `
    }).join("")
}
const renderWorkingArr = ()=>{
    return working.map((item)=>{
         return `
         <div class="bg-white p-2 hover:bg-[#edebe9] text-black/95 tracking-wide cursor-pointer">${item}</div>
        `
    }).join("")
}
const renderCareerArr = ()=>{
    return careerArr.map((item)=>{
         return `
         <li class="py-4 flex cursor-pointer justify-between font-semibold">
            ${item}
            <img src="../../images/careers/icon/down-arrow-5-svgrepo-com.svg" class="w-4 pt-1" alt="${item}" />
        </li>
        `
    }).join("")
}
const careerHeader = () => {
    return `
    <div class="bg-[#EDEBE9] drop-shadow-sm py-3 md:py-0 sticky top-0 z-30">
        <div class="md:ml-[78px] ml-2 pl-6">
            <div class="flex justify-between items-center">
            <h1 class="hidden lg:flex sodosan font-bold text-[14px] tracking-wide">
                CAREERS
            </h1>
            <h1 id="careers-nav" class="flex lg:hidden sodosan font-bold text-[14px] tracking-wide gap-1 cursor-pointer">
                CAREERS
                <img src="../../images/careers/icon/down-arrow-5-svgrepo-com.svg" class="w-4 rotate-0 duration-300"
                id="chevron-button" alt="" />
            </h1>
            <!-- dropdown bar -->
            <div class="relative" id="dropdownButton">
                <ul class="hidden md:flex gap-8 pr-8">
                    ${renderHeaderArr()}
                </ul>
                <!-- find a job dropdown -->
                <div
                class="absolute top-[47px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-white hidden w-[260px] h-[275px] border right-30 py-2"
                id="findajob-dropdown">
                    ${renderFindAStore()}
                </div>  
                <!-- workings at starbuck dropdown -->
                <div
                class="absolute top-[47px] hidden shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] left-[118px] h-[155px] w-[200px] border bg-white py-3"
                id="working-dropdown">
                    ${renderWorkingArr()}
                <!-- my jobs dropdown -->
                </div>
                <div
                class="absolute hidden top-[47px] w-[105px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]  left-80 h-14 py-2 bg-white border"
                id="myjobs-dropdown">
                    <div class="bg-white p-2 hover:bg-[#edebe9] text-black/95 tracking-wide flex gap-2 cursor-pointer">
                        Sign In
                        <span><img src="../../images/careers/icon/link.png" alt="" class="w-3 py-1.5" /></span>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <ul id="careers-dropdown" class="w-full absolute hidden   top-[45px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white divide-y px-6 lato text-[15px] tracking-wide"  >
            ${renderCareerArr()}
        </ul>
    </div>
    `
};
export class CareerHeader extends HTMLElement {
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = careerHeader();
        this.setUpEventListener()
    }
    setUpEventListener(){
        const findAJobDropdown = this.querySelector('#findajob-dropdown')
        const findAJobButton = this.querySelector('#findajob-button')
        const workingDropdown = this.querySelector('#working-dropdown')
        const workingButton = this.querySelector('#working-button')
        const myJobsDropdown = this.querySelector('#myjobs-dropdown')
        const myJobsButton = this.querySelector('#myjobs-button')

        this.dropdownFunction(findAJobButton,findAJobDropdown)
        this.dropdownFunction(workingButton,workingDropdown)
        this.dropdownFunction(myJobsButton,myJobsDropdown)
        // careers dropdown on small screen
        const careersDropdown = this.querySelector("#careers-dropdown")
        const careersNav = this.querySelector("#careers-nav")
        const chevronButton = this.querySelector("#chevron-button") 

        careersNav.addEventListener("click", () => {
        careersDropdown.classList.toggle("hidden");
        })
        careersNav.addEventListener("click", () => {
        chevronButton.classList.toggle("rotate-180");
        })
    }
    dropdownFunction(btn,content){
        btn.addEventListener("mouseover", ()=>{
            content.classList.remove("hidden");
            })
            content.addEventListener("mouseover", () => {
            content.classList.remove("hidden");
            })
            btn.addEventListener("mouseout", () => {
            content.classList.add("hidden");
            })
            content.addEventListener("mouseout", () => {
            content.classList.add("hidden");
            })
    }
}

customElements.define("career-header-component", CareerHeader);