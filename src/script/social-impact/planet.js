import * as Layout from '../../script/components/layout.js'
// const planetContent = document.querySelector(".planet-content-layout");
// fetch("../../components/social-impact/planet.html")
// .then((res) => res.text())

// .then((data) => {
//     planetContent.innerHTML = data;
// })
// .catch((error) => console.error("Error fetching included file:", error));


const createPlanetContent = ()=>{
    return `
    <!-- Becoming resource positive -->
<div class="mt-1 text-center">
    <div class="lg:w-[70%] text-center text-emerald-950 bg-white inline-block mx-auto md:px-[15%] lg:px-[10%] mb-9">
        <h1 class="text-3xl lg:text-5xl font-extrabold tracking-[0.20em] pt-7 text-balance lg:leading-snug">BECOMING RESOURCE POSITIVE</h1>
        <h1 class="text-wrap tracking-[0.05em] my-6 text-base sm:text-xl leading-normal">We are committed to becoming resource positive - to give more than we take from the planet. We will store more carbon than we emit, eliminate waste and conserve and replenish more freshwater than we use.
        </h1>
    </div>
</div>
<!-- Image & 2023 commitments -->
<div>
    <div class="text-[#1f3932] my-6">
        <div class="flex flex-col md:flex-row bg-[#d4e9e2] md:h-auto mx-auto items-center h-90">
            <div class="w-[100%] md:w-[50%]">
                <a chref=""><img class="w-full" src="../../images/social-impact/planet-river.png" alt=""></a>
            </div>
            <div class="w-[100%] md:w-[50%] flex flex-col items-start justify-center pl-8 gap-7 py-6">
                <h1 class="font-semibold text-xl">2030 COMMITMENTS</h1>
                <h1 class="lg:text-lg tracking-[0.05em] leading-loose max-w-[97%]">Starbucks set a multi-decade commitment to reduce our carbon, our water and our waste footprints by half by 2030.</h1>
                <a href="https://stories.starbucks.com/stories/2020/starbucks-solidifies-pathway-to-a-planet-positive-future/">
                    <button class="border-[1px] border-[#1f3932] px-4 py-1 rounded-full font-bold">Read more</button>
                </a>
                
            </div>
        </div>
    </div>
</div>
<!-- Area of focus -->
<div class="mt-2 text-center">
    <div class="md:px-52 text-center text-emerald-950 bg-white inline-block w-[97%]">
        <h1 class="lg:text-5xl text-3xl font-extrabold tracking-[0.20em] pt-7 text-balance">AREAS OF FOCUS</h1>
        <h1 class="text-wrap tracking-[0.06em] my-7 text-lg">We're driving innovation at scale to achieve our 2030 targets through these five focus areas:</h1>
    </div>
</div>
<!-- hamburger -->
<div>
    <div class="text-[#1f3932] my-12">
        <div class="flex flex-col md:flex-row md:h-auto mx-auto items-center h-90">
            <div class="w-[100%] md:w-[50%]">
                <a chref=""><img class="w-full" src="../../images/social-impact/planet-hamburger.png" alt=""></a>
            </div>
            <div class="max-w-[90%] md:w-[40%] flex flex-col items-start justify-center py-8">
                <h1 class=" font-normal text-xl tracking-[0.04em]">Expanding <span class="font-extrabold text-xl">plant-based menu options</span></h1>
            </div>
        </div>
    </div>
</div>
<!-- cup -->
<div>
    <div class="text-[#1f3932] my-12">
        <div class="flex flex-col md:flex-row md:h-auto mx-auto items-center h-90">
            <div class="w-[100%] md:w-[50%]">
                <a chref=""><img class="w-full" src="../../images/social-impact/planet-cup.png" alt=""></a>
            </div>
            <div class="max-w-[90%] md:w-[40%] flex flex-col items-start justify-center py-8">
                <h1 class=" font-normal text-xl tracking-[0.04em]">Shifting away from single-use to <span class="font-extrabold text-xl">reusable packaging</span></h1>
            </div>
        </div>
    </div>
</div>
<!-- plants -->
<div>
    <div class="text-[#1f3932] my-12">
        <div class="flex flex-col md:flex-row md:h-auto mx-auto items-center h-90">
            <div class="w-[100%] md:w-[50%]">
                <a chref=""><img class="w-full" src="../../images/social-impact/planet-plants.png" alt=""></a>
            </div>
            <div class="max-w-[90%] md:w-[40%] flex flex-col items-start justify-center py-8">
                <h1 class=" font-normal text-xl tracking-[0.04em]">Investing in <span class="font-extrabold text-xl"> regenerative agriculture, reforestation, forest conservation and water replenishment</span> in our supply chain</h1>
            </div>
        </div>
    </div>
</div>
<!-- trash -->
<div>
    <div class="text-[#1f3932] my-12">
        <div class="flex flex-col md:flex-row md:h-auto mx-auto items-center h-90">
            <div class="w-[100%] md:w-[50%]">
                <a chref=""><img class="w-full" src="../../images/social-impact/planet-trash.png" alt=""></a>
            </div>
            <div class="max-w-[90%] md:w-[40%] flex flex-col items-start justify-center py-8">
                <h1 class=" font-normal text-xl tracking-[0.04em]">Working on better ways to <span class="font-extrabold text-xl">manage our waste</span></h1>
            </div>
        </div>
    </div>
</div>
<!-- store -->
<div>
    <div class="text-[#1f3932] my-12">
        <div class="flex flex-col md:flex-row md:h-auto mx-auto items-center h-90">
            <div class="w-[100%] md:w-[50%]">
                <a chref=""><img class="w-full" src="../../images/social-impact/planet-store.png" alt=""></a>
            </div>
            <div class="max-w-[90%] md:w-[40%] flex flex-col items-start justify-center py-8">
                <h1 class=" font-normal text-xl tracking-[0.04em]">Innovating with more <span class="font-extrabold text-xl">plant-based menu options</span>operations, manufacturing and delivery</h1>
            </div>
        </div>
    </div>
</div>
<!-- Learn Mores -->
<div class="lg:px-[10%] px-auto flex flex-col gap-10">
    <div class="mt-2 text-center">
        <div class="md:px-52 text-center text-emerald-950 bg-white inline-block w-[97%]">
            <h1 class="lg:text-5xl text-3xl font-bold tracking-[0.15em] pt-7 text-balance lg:px-[2%]">PROGRESS TOWARD OUR COMMITMENTS</h1>
            <h1 class="text-wrap tracking-[0.06em] my-7 text-xl leading-normal">Starbucks is committed to transparency. Learn more about our commitments to the planet and our progress on our Environmental and Social Impact Reporting Hub.</h1>
            <button class="border-emerald-950 hover:bg-gray-200 transition delay-20 border-[1px] mx-1 px-5 py-1 rounded-full">Learn more</button>
        </div>
    </div>
    <div class="mt-2 text-center">
        <div class="md:px-52 text-center text-emerald-950 bg-white inline-block w-[97%]">
            <h1 class="lg:text-5xl text-3xl font-bold tracking-[0.15em] pt-7 text-balance">ETHICAL SOURCING STANDARDS</h1>
            <h1 class="text-wrap tracking-[0.06em] my-7 text-xl leading-normal">Track the responsible ways we produce and purchase our coffee, tea, cocoa and manufactured goods.</h1>
            <button class="border-emerald-950 hover:bg-gray-200 transition delay-20 border-[1px] mx-1 px-5 py-1 rounded-full">Learn more</button>
        </div>
    </div>
    <div class="mt-2 text-center">
        <div class="md:px-52 text-center text-emerald-950 bg-white inline-block w-[97%]">
            <h1 class="lg:text-5xl text-3xl font-bold tracking-[0.15em] pt-7 text-balance">ALL THE LATEST</h1>
            <h1 class="text-wrap tracking-[0.06em] my-7 text-xl leading-normal">Stay up to date with Starbucks commitment to environmental sustainability.</h1>
            <button class="border-emerald-950 hover:bg-gray-200 transition delay-20 border-[1px] mx-1 px-5 py-1 rounded-full">Learn more</button>
        </div>
    </div>
    <hr>
</div>
    `
}

class Planet extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = createPlanetContent();
    }
}

customElements.define('planet-content-layout', Planet)