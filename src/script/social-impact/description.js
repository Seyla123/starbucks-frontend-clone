const descriptArray = [
    {
        title: "PROGRESS TOWARD OUR COMMITMENTS",
        text: `Starbucks is committed to transparency. Learn more about our commitments to the planet and our progress on our Environmental and Social Impact Reporting Hub.`,
        button: "Learn more"
    },
    {
        title: "ETHICAL SOURCING STANDARDS",
        text: `Track the responsible ways we produce and purchase our coffee, tea, cocoa and manufactured goods.`,
        button: "Learn more"
    },
    {
        title: "ALL THE LATEST",
        text: `Stay up to date with Starbucks commitment to environmental sustainability.`,
        button: "Learn more"
    }
];

const descriptPlanet = () => {
    return `${descriptArray.map((descript) => `
    <div class="lg:px-[10%] px-auto flex flex-col gap-10">
        <div class="mt-2 text-center">
            <div class="md:px-52 text-center text-emerald-950 bg-white inline-block w-[97%]">
                <h1 class="lg:text-5xl text-3xl font-bold tracking-[0.15em] pt-7 text-balance lg:px-[2%]">${descript.title}</h1>
                <h1 class="text-wrap tracking-[0.06em] my-7 text-xl leading-normal">${descript.text}</h1>
                <button class="border-emerald-950 hover:bg-gray-200 transition delay-20 border-[1px] mx-1 px-5 py-1 rounded-full">${descript.button}</button>
            </div>
        </div>
    </div>
    `).join('')}`;
};

class DescriptPlanet extends HTMLElement {
    connectedCallback() {
        this.innerHTML = descriptPlanet();
    }
}

customElements.define("descript-planet", DescriptPlanet);