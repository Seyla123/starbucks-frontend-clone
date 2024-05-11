const createProductCard = (img,isRevers=false,backgroundColor,textColor,title,description,buttonTitle,buttonLink) => {
    let flex = 'flex-row'
    if (isRevers) {
        flex = 'flex-row-reverse'
    }
	return `
    <div class="flex flex-col md:${flex} ${backgroundColor}">
    <div class="flex-1 flex items-center">
      <img
        class="max-w-full h-auto"
        src="${img}"
        alt=""
      />
    </div>
    <div
      class=" w-full flex flex-1  justify-center items-center "
    >
      <div class="max-w-[80%] sodan flex flex-col justify-center items-center md:gap-8  text-center ${textColor} py-8 px-12">
        <h3 class="font-semibold text-3xl lg:text-5xl  ">${title}</h3>
        <p class="text-base md:text-xl lg:text-2xl  leading-10 font-medium">
          ${description}
        </p>
        <div class="flex gap-4 items-center text-sm font-bold">
            <a href="${buttonLink}" class="h-3 p-4 items-center flex justify-center rounded-full outline outline-1 hover:bg-black/5 duration-300">${buttonTitle}</a>
        </div>
      </div>
    </div>
  </div>
      `;
};

export class ProductCard extends HTMLElement {
	connectedCallback() {
		const img = this.getAttribute('img');
		const isRevers = this.getAttribute('isRevers');
		const backgroundColor = this.getAttribute('backgroundColor');
		const textColor = this.getAttribute('textColor');
		const title = this.getAttribute('title');
		const description = this.getAttribute('description');
		const buttonTitle = this.getAttribute('buttonTitle');
		const buttonLink = this.getAttribute('buttonLink');
		this.innerHTML = createProductCard(img,isRevers,backgroundColor,textColor,title,description,buttonTitle,buttonLink);
	}
}

customElements.define('product-card-component', ProductCard);

