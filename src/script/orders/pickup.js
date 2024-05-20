


    const createDelivery = (arr)=>{
      return `
      
      `
  }
  const deliveryCardArr = [{
      title:"doordash",
      img:"../../images/order/doordash logo.webp",
      link:"https://www.doordash.com/sdl/Starbucks/?ignore_splash_experience=true&utm_source=Enterprise&utm_medium=Enterprise&utm_campaign=CX_US_EP_EP_EP_PAR_CUSXXX__+Starbucks_Delivery_Landing_Page_Dec2023"
  },
  {
      title:'UberEats',
      img:"../../images/order/UberEats logo.webp",
      link:"https://www.ubereats.com/brand/starbucks?&utm_campaign=bd-starbucks-US-evergreendelivery_Owned_landingpage_US&utm_source=starbucks&utm_medium=Web&publisher=Uber%20Eats%20-%20BD%20(Biz%20Dev)%20-%20Partnerships&publisher_sub_campaign_name=bd-starbucks-US-evergreendelivery_Owned_landingpage_US"
  },
  ]
  class DeliveryCard extends HTMLElement{
      constructor(){
          super()
      }
      connectedCallback(){
          this.innerHTML = createDelivery(deliveryCardArr)
      }
  }
  
  customElements.define('delivery-card', DeliveryCard);