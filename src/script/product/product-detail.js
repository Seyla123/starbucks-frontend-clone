
const spanInput = document.querySelectorAll(".spanInput");
function test(){
    for (i=0;i<spanInput.length;i++){
        spanInput[i].classList.remove("left-3","top-[14px]")
        spanInput[i].classList.add("bg-white")
    }
}


function rippleEffect(event) {
    const btn = event.currentTarget;
    
      const circle = document.createElement("span");
      const diameter = Math.max(btn.clientWidth, btn.clientHeight);
      const radius = diameter / 2;
    circle.classList.add('z-10')
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`;
      circle.style.top = `${event.clientY - (btn.offsetTop + radius)}px`;
      circle.classList.add("ripple");
  
      const ripple = btn.getElementsByClassName("ripple")[0];
  
      if (ripple) {
          ripple.remove();
      }
  
      btn.appendChild(circle);
  }
  
  const btn = document.querySelectorAll(".bt");
  for (i=0;i<btn.length;i++){
    btn[i].addEventListener("click", rippleEffect);
  }
//slide size 
  const trentabtn = document.querySelector("#trentaBtn");
  const trentaIcon = document.querySelector("#trentaIcon");
  
  const ventiBtn = document.querySelector("#ventiBtn");
  const ventiIcon = document.querySelector("#ventiIcon");

  
  //slideSizeBg(trentabtn,trentaIcon,"right-[44px]");
  slideSizeBg(ventiBtn,ventiIcon,"108px");
  slideSizeBg(trentabtn,trentaIcon,"44px");



  // trentabtn.addEventListener("click",function(){
  //   sizeBg.classList.add("right-[44px]");
  //   trentaIcon.classList.add("opacity-100")
  // });


  function slideSizeBg(btn,icon,right){
      const sizeBg = document.querySelector("#sizeBg");
      btn.addEventListener("click",function(){
      sizeBg.style.right=right;
      icon.classList.add("opacity-100")
    });
  }

  // <!-- right-[240px] -->
  // <!-- right-[173px] -->
  // <!-- right-[108px] -->
  // <!-- right-[44px] top-8  -->