// This function takes an array of objects and returns grid of cards.
const cultureCard = (arr) => {
    return `
    <div class="grid min-[480px]:grid-cols-2 gap-8 bg-white">
    ${arr.map((item) => {
        return `
        <div class="bg-white rounded-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-4 flex flex-col gap-4">
            <h1 class="sodan tracking-wider text-2xl">${item.title}</h1>
            ${item.text.map((i)=>{
                return `
                <p class="text-[#757575]">
                ${i}
            </p>
                `
            }).join("")}
        </div>
        `
    }).join("")}
    </div>
    `
}

// This array contains the data for the culture cards.
const cultureCardArr = [
    {
        title: "Craft",
        text:
        ["We delight in the rigor of the details—no matter what our job is",
        "We learn and teach in the pursuit of growth",
        "We deliver excellence with passion and creativity",
    ],
    },
    {
        title: "Courage",
        text : 
        ["We embrace the difficult conversations, with respect, to make us better",
        "We pursue audacious ideas beyond our comfort zone",
        "We do the right thing, even when it's hard"],
    },
    {
        title: "Results",
        text : 
        ["We consistently achieve our goals with focus, integrity, and drive",
        "We continuously innovate to stay ahead",
        "We exceed the expectations of the people we serve"],
    },
    {
        title: "Belongings",
        text : 
        ["We actively listen and connect with warmth and transparency",
        "We recognize every person for who they are",
        "We treat each other with dignity and care"],
    }
]

class CultureCard extends HTMLElement {
    constructor() {
        super()
    }
    // This function is called when the component is inserted into the DOM.
    connectedCallback() {
        this.innerHTML = cultureCard(cultureCardArr);
    }
}
// registers the component with the browser.
customElements.define("culture-card", CultureCard);
