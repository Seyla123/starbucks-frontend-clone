
const productBtn = document.querySelectorAll(".productBtn");

const productTitle = document.querySelectorAll(".productBtn h4");
console.log(productBtn);
for (let i = 19; i < productBtn.length; i++) {
	productBtn[i].addEventListener("click", function (e) {
        const productImg = document.querySelectorAll(`".${productBtn} div img"`);
        alert(productImg[i].src)
       // window.location.href = "../../pages/product/product_detail.html";
		//localStorage.setItem("productImg", productImg[i].src);
            
		
	})
}
