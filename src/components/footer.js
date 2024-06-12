const footerArr = 
{
    "About Us" : [
        {
            title : "Our Company",
            link : "../../pages/our-company/our-company.html"
        },
        {
            title : "Our Coffee",
            link : "../../pages/our-coffee/our-coffee.html"
        },
        {
            title : "Stories and News",
            link : "#"
        },
        {
            title : "Starbucks Archive",
            link : "#"
        },
        {
            title : "Investor Relations",
            link : "#"
        },
        {
            title : "Customer Service",
            link : "#"
        },
        {
            title : "Contact Us",
            link : "../../pages/contact-us/contact-us.html"
        },
    ],
    "Careers":[
        {
            title : "Culture and Values",
            link : "../../pages/culture-and-values/culture-and-values.html"
        },
        {
            title : "Inclusion, Diversity, and Equity",
            link : "#"
        },
        {
            title : "College Achievement Plan",
            link : "../../pages/college-achievement-plan/college-achievement-plan.html"
        },
        {
            title : "Alumni Community",
            link : "#"
        },
        {
            title : "U.S. Careers",
            link : "../../pages/u.s. careers/u.s.-careers.html"
        },
        {
            title : "International Careers",
            link : "../../pages/international-careers/international-careers.html"
        },
    ],
    "Social Impact":[
        {
            title : "People",
            link : "../../pages/people/people.html"
        },
        {
            title : "Planet",
            link : "../../pages/planet/planet.html"
        },
        {
            title : "Culture and Values",
            link : "../../pages/culture-and-values/culture-and-values.html"
        },
        {
            title : "Environmental and Social Impact Reporting",
            link : "#"
        },
        {
            title : "For Business Partners",
            link : "#"
        },
    ],
    "For Business Partners" : [
        {
            title :"Landlord Support Center",
            link:"#"
        },
        {
            title :"Suppliers",
            link:"#"
        },
        {
            title :"Corporate Gift Card Sales",
            link:"#"
        },
        {
            title :"Office and Foodservice Coffee",
            link:"#"
        },
    ],
    "Order and Pick Up" : [
        {
            title : "Order on the App",
            link:"../../pages/order-vai-app/order.html"
        },
        {
            title : "Order on the Web",
            link:"../../pages/menu/menu.html"
        },
        {
            title : "Delivery",
            link:"../../pages/delivery/delivery.html"
        },
        {
            title : "Order and Pick Up Options",
            link:"../../pages/pickup/pickup.html"
        },
        {
            title : "Explore and Find Coffee for Home",
            link:"https://athome.starbucks.com/?utm_source=starbucks.com&utm_medium=referral&utm_campaign=footer"
        },
    ]
}
const footerIconArr = [
{
    title : "spotify",
    link : "https://open.spotify.com/user/starbucks",
    img : "spotify.png"
},
{
    title : "facebook",
    link : "https://facebook.com/starbucks",
    img : "facebook.png"
},
{
    title : "pinterest",
    link : "https://www.pinterest.com/starbucks/",
    img : "pinterest.png"
},
{
    title : "Youtube",
    link : "https://www.youtube.com/starbucks",
    img : "youtube.png"
},
{
    title : "Twitter",
    link : "https://twitter.com/starbucks/",
    img : "twitter.png"
},]
const footerPrivacyArr = [
{
    title : "Privacy Notice",
    link : "#", 
},
{
    title : "Consumer Health Privacy Notice",
    link : "#", 
},
{
    title : "Do Not Share My Personal Information",
    link : "#", 
},
{
    title : "CA Supply Chain Act",
    link : "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70076.pdf", 
},
{
    title : "Accessibility",
    link : "#", 
},
{
    title : "Cookie Preferences",
    link : "#", 
},
]

// Function to render the smaller version of the footer for mobile devices
const renderFooterSmall = () => {
    let htmlContent = '';
    for (const [key, value] of Object.entries(footerArr)) {
        htmlContent += `
        <div>
            <div class="btn1 w-full flex justify-between items-center py-4 text-xl cursor-pointer">
                <h2 class="sodan">${key}</h2>
                <span class="w-4 imgArrow duration-300">
                    <img class="" src="../../images/layout/down-arrow.png" alt="" />
                </span>
            </div>
            <div class="drop1 overflow-hidden max-h-0 transition-max-height duration-500">
                <ul class="flex flex-col gap-3 my-4 manrope-sans text-gray-500 font-thin">
                    ${value.map(item => `
                        <li>
                            <a class="hover:text-black" href="${item.link}">${item.title}</a>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
        `;
    }
    return htmlContent;
}

// Function to render the standard footer for larger screens
const renderFooter = () => {
    let htmlContent = '';
    for (const [key, value] of Object.entries(footerArr)) {
        htmlContent += `
        <div class="">
                <h2 class="sodan text-xl">${key}</h2>
                <ul class="flex w-48 flex-col gap-3 my-4 manrope-sans text-gray-500 font-thin">   
                ${value.map(item => `
                    <li>
                        <a class="hover:text-black" href="${item.link}">${item.title}</a>
                    </li>
                `).join('')}
                </ul>
        </div>
      
        `;
    }
    return htmlContent;
}

// Function to render icons in the footer
const renderFooterIcon =()=>{
    return footerIconArr.map((item)=>{
         return `
        <li>
            <a class="w-12 justify-center items-center flex hover:bg-gray-200 duration-300 p-2 rounded-full" href="${item.link}">
                <img src="../../images/layout/${item.img}" alt="${item.title}" />
            </a>
        </li>
        `
    }).join("")
} 

// Function to render privacy array in the footer
const renderFooterPrivacy = ()=>{
    return footerPrivacyArr.map((item)=>{
        return `
        <li>
            <a class="hover:underline" href="${item.link}">${item.title}</a>
        </li>
        `
    }).join("")
}

// Function to create the footer 
const createFooter = (maxWidth, dropdown) => {
    return `
    <footer class="p-6  w-full ${maxWidth ?  `${maxWidth} 2xl:px-0` : '2xl:px-8'} mx-auto">
        <!-- screen phone lg -->
        <div class="block ${dropdown ? 'block' : 'lg:hidden'}">
            ${renderFooterSmall()} 
        </div>
        <!-- screen greater than lg -->
        <div class="hidden lg:${dropdown ? 'hidden' : 'flex'} justify-start gap-8">
            ${renderFooter()}
        </div>
        <hr class="block my-8" />
        <ul class="flex gap-2 flex-wrap">
            ${renderFooterIcon()}
        </ul>
    
        <ul class="flex flex-col gap-4 my-4 font-semibold">
            ${renderFooterPrivacy()}
        </ul>
        <p class="text-md text-gray-600">
        © 2024 Starbucks Coffee Company. All rights reserved.
        </p>
    </footer>

    `
}
export class Footer extends HTMLElement {
    constructor() {
        super(); // Call the constructor of the HTMLElement class
    }
    connectedCallback() {
        // Retrieve attributes and generate the footer HTML when the component is added to the DOM
        const dropdown = this.getAttribute('dropdown');
        const maxWidth = this.getAttribute('maxWidth'); 
        this.innerHTML = createFooter(maxWidth, dropdown);
        this.setupDropdownListeners(); // Setup listeners for dropdown functionality
    }

    setupDropdownListeners() {
        try {
            // Query all elements needed for the dropdown functionality
            const btn1 = this.querySelectorAll(".btn1");
            const drop1 = this.querySelectorAll(".drop1");
            const imgArrow = this.querySelectorAll(".imgArrow");

            // Add click event listeners to all buttons
            for (let i = 0; i < btn1.length; i++) {
                btn1[i].addEventListener("click", () => {
                    btn1[i].classList.toggle("active");
                    if (btn1[i].classList.contains("active")) {
                        drop1[i].classList.add("max-h-screen");
                        drop1[i].classList.remove("max-h-0");
                        imgArrow[i].classList.add("rotate-180");
                    } else {
                        drop1[i].classList.remove("max-h-screen");
                        drop1[i].classList.add("max-h-0");
                        imgArrow[i].classList.remove("rotate-180");
                    }
                });
            }
        } catch (error) {
            console.error("Failed to toggle dropdown:", error);
        }

    }
}
customElements.define('footer-component', Footer);