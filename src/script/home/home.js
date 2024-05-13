import "../../script/components/layout.js"
// object of product in home page
import { footer } from "../layout/footer.js";
const product = [{
  title: "Hope into half of",
  img:"../../images/home/home (1).jpg",
  description : "This week, play the Spring It On Scavenger Hunt game to earn 50% off a spring treat—like a refreshing Lavender Lemonade.",
  buttonTitle : "join the fun",
  buttonLink : "../../pages/join-now/join-now.html",
  backgroundColor : "bg-[#d3e8e1]",
  textColor : "text-[#1e3932]"
},
{
  title: "Ooh la lavende",
  img:"../../images/home/home (3).jpg",
  description : "Vibe into spring with the new caffeine-free Lavender Oatmilk Chill, featuring subtle floral notes and real dragonfruit pieces. Here for a limited time.",
  buttonTitle : "Order now",
  buttonLink : "../../pages/menu/feature-menu.html",
  backgroundColor : "bg-[#fdd8f7]",
  textColor : "text-[#1e3932]"
},
{
  title: "Personal cups for good",
  img:"../../images/home/home (4).jpg",
  description : "Your choice is a positive and responsible one—because bringing your clean reusable cup helps our planet.",
  buttonTitle : "join the fun",
  buttonLink : "../../pages/join-now/join-now.html",
  backgroundColor : "bg-[#97d8b1]",
  textColor : "text-[#1e3932]"
},
{
  title: "Positively delicious",
  img:"../../images/home/home (2).jpg",
  description : "Go for a nondairy pick-me-up with 150 calories or less in a grande. Choose the new Hazelnut Oatmilk Shaken Espresso or classic Brown Sugar Oatmilk Shaken Espresso.",
  buttonTitle : "Order now",
  buttonLink : "../../pages/menu/feature-menu.html",
  backgroundColor : "bg-[#cee8c9]",
  textColor : "text-[#1e3932]"
},
{
  title: "Satisfying favorite",
  img:"../../images/home/home (6).jpg",
  description : "The protein-packed Turkey Bacon, Cheddar & Egg White Sandwich is such a tasty way to power your day.",
  buttonTitle : "join the fun",
  buttonLink : "../../pages/join-now/join-now.html",
  backgroundColor : "bg-[#006241]",
  textColor : "text-[#ffffff]"
},
{
  title: "Relax with a refreshing delivery deal",
  img:"../../images/home/home (5).jpg",
  description : "Get up? Please! Stay right where you are and enjoy 25% off Starbucks orders of $20+ on Uber Eats, 4/8-4/14. Enjoy unlimited redemptions, up to $7 off per order.*",
  buttonTitle : "Order now",
  buttonLink : "../../pages/menu/feature-menu.html",
  backgroundColor : "bg-[#d4e9e2]",
  textColor : "text-[#1e3932]"
}
]
// create compent product using object product
class loopProductCard extends HTMLElement {
connectedCallback() {
      let isTrue = false;
      product.forEach(element => {
          
          this.innerHTML += `<product-card-component
          title = "${element.title}"
          backgroundColor = "${element.backgroundColor}"
          isRevers = ${isTrue}
          textColor = "${element.textColor}"
          img = "${element.img}"
          description = "${element.description}"
          buttonTitle = "${element.buttonTitle}"
          buttonLink = "${element.buttonLink}"
          ></product-card-component>
          `
          if(isTrue) {
              isTrue = false;
          }else{
              isTrue = true;
          }
      });

}
}

customElements.define('home-content-product-card', loopProductCard);