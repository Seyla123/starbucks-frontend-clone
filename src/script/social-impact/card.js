const cardArray = [
    {
        imgURL: "../../images/social-impact/planet-hamburger.png",
        text: `Expanding <span class="font-extrabold text-xl">plant-based menu options</span>`
    },
    {
        imgURL: "../../images/social-impact/planet-cup.png",
        text: `Expanding <span class="font-extrabold text-xl">plant-based menu options</span>`
    },
    {
        imgURL: "../../images/social-impact/planet-plants.png",
        text: `Expanding <span class="font-extrabold text-xl">plant-based menu options</span>`
    },
    {
        imgURL: "../../images/social-impact/planet-trash.png",
        text: `Expanding <span class="font-extrabold text-xl">plant-based menu options</span>`
    },
    {
        imgURL: "../../images/social-impact/planet-store.png",
        text: `Expanding <span class="font-extrabold text-xl">plant-based menu options</span>`
    }
];

const cardPlanet = () => {
    return `${cardArray.map((card) => `
        <div class="text-[#1f3932] my-12">
            <div class="flex flex-col md:flex-row md:h-auto mx-auto items-center h-90">
                <div class="w-[100%] md:w-[50%]">
                    <a href=""><img class="w-full" src="${card.imgURL}" alt=""></a>
                </div>
                <div class="max-w-[90%] md:w-[40%] flex flex-col items-start justify-center py-8">
                    <h1 class="font-normal text-xl tracking-[0.04em]">${card.text}</h1>
                </div>
            </div>
        </div>
    `).join('')}`;
};

class CardPlanet extends HTMLElement {
    connectedCallback(){
        this.innerHTML = cardPlanet();
    }
}

customElements.define("card-planet", CardPlanet);
