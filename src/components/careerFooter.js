const socialIcon = [
{
    title : "Instagram",
    img:"instagram.svg",
    link :"https://www.instagram.com/starbucksjobs"
},
{
    title : "LinkedIn",
    img:"linkedin.svg",
    link :"https://www.linkedin.com/company/starbucks"
},
{
    title : "Facebook",
    img:"facebook.svg",
    link :"http://www.facebook.com/Starbucks"
},
{
    title : "Youtube",
    img:"youtube.svg",
    link :"https://www.youtube.com/user/Starbucks"
}
]
const seeMoreArr = [
{
    title : "Know Your Rights: Workplace Discrimination is Illegal",
    link : "https://www.eeoc.gov/sites/default/files/2022-10/EEOC_KnowYourRights_screen_reader_10_20.pdf",
},
{
    title : "Pay Transparency Nondiscrimination Provision (PDF)",
    link : "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-79081.pdf",
},
{
    title : "Equal Employment Opportunity Policy Statement",
    link : "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88055.pdf",
},
]

// Function to render social icons 
const renderSocialIcon = ()=>{
    return socialIcon.map((item)=>{
        return `
        <a href="${item.link}" class="flex items-center gap-5 mb-2">
        <img class="w-4 h-4" src="../../images/careers/icon/${item.img}" alt="${item.title}" />
        <h1 class="roboto text-[#2c2c2b] text-[15px]">${item.title}</h1>
    </a>`
    }).join("")
}
//function to render see more link arr 
const renderSeeMore = ()=>{
    return seeMoreArr.map((item)=>{
        return `
        <a class="inline-block text-[#1b7e58] underline hover:no-underline mb-4 sodan text-[15px]"
        href="${item.link}">${item.title}</a>
        `
    }).join("")
}
const careerFooter = () => {
    return `
    <div class="bg-[#edebe9] lg:p-7 px-5 py-8">
        <div class="flex flex-col lg:flex-row justify-between">
            <!-- accessibility support -->
            <div class=" w-full text-pretty">
            <h1 class="mb-2 sodosan font-bold text-sm tracking-wide">
                ACCESSIBILITY SUPPORT
            </h1>
            <p class="roboto break-words text-[#2c2c2b] text-[15px]">
                Starbucks Corporation is committed to offering reasonable
                accommodation to job applicants with disabilities. If you need
                assistance or an accommodation due to disability, please contact us
                at <a class="text-[#1b7e58] hover:underline" href="">applicantaccommodation@starbucks.com</a>
            </p>
            <!-- follow us to find jobs -->
            </div>
            <div class=" w-full flex  lg:justify-center ">
            <div class="w-full max-w-[200px]  ">
                <h1 class="mb-2 w-full mt-5 sodosan font-bold tracking-wide text-[14px]">
                FOLLOW US TO FIND JOBS
                </h1>
                <div class="mt-4">
                    ${renderSocialIcon()}
                </div>
            </div>
            </div>
        </div>
        <div class="mt-20 ">
            <!-- starbucks is an equal -->
            <h1 class="mb-2 sodosan font-bold text-[14px] tracking-wide">
            STARBUCKS IS AN EQUAL OPPORTUNITY EMPLOYER
            </h1>
            <p class="mb-4 max-w-[646px]   text-[#2c2c2b] roboto text-[15px]">
            All partners and applicants will be treated fairly, without regard to
            race, color, religion, sex, national origin, age, physical or mental
            disability, sexual orientation, marital status, military or veteran
            status, gender identity and expression, genetic information, or any
            other factor protected by law.
            </p>
            <!-- see more -->
            <h2 class="mt-10 sodan items-start text-[#2c2c2b] text-[15px]">
            See More:
            </h2>
            <div class="flex flex-col gap-2">
                ${renderSeeMore()}
            </div>
        </div>
    </div>
    `
};

export class CareerFooter extends HTMLElement {
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = careerFooter();
    }
}

customElements.define("career-footer-component", CareerFooter);