
        
        const accordingHeaders = document.querySelectorAll(".according-header");

        accordingHeaders.forEach((header) => {
            header.addEventListener("click", function () {
                const accordingContent = header.parentElement.querySelector(".according-content");
                let accordingMaxHeight = accordingContent.style.maxHeight;

                if (!accordingMaxHeight || accordingMaxHeight === "0px") {
                    accordingContent.style.maxHeight = `${accordingContent.scrollHeight + 44}px`;
                } else {
                    accordingContent.style.maxHeight = "0px";
                }
            });
        });
        const chevron = document.getElementById("chevron-button")
        const dropLetter = document.getElementById("drop-letter")
        dropLetter.addEventListener("click", () => {
            chevron.classList.toggle("rotate-180");
        })
        chevron.addEventListener("click", () => {
            chevron.classList.toggle("rotate-180");
        })

        function rippleEffect(event) {
            const btn = event.currentTarget;
          
            const circle = document.createElement("span");
            const diameter = Math.max(btn.clientWidth, btn.clientHeight);
            const radius = diameter / 2;
            circle.classList.add("z-10");
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
          function req(input,label,labelText,rep) {
                    label.classList.remove("left-3","top-[-18%]","md:text-sm","text-[#00754a]");
                     label.classList.add("text-red-500");
                     labelText.classList.add("text-red-500");
                     input.classList.add("border-2","border-red-500");
                     rep.classList.remove("hidden");
        }
        function unfocused(input,label,labelText,rep) {
            label.classList.add("left-3","top-[-18%]","md:text-sm","text-[#00754a]");
             label.classList.remove("text-red-500");
             labelText.classList.remove("text-red-500");
             input.classList.remove("border-2","border-red-500");
             rep.classList.add("hidden");
        }
          function focued(input,label,labelText,rep){
            input.addEventListener("focus", () => {
                //!-- left-3 top-[-20%] text-sm text-red-500 || border-2 border-red-500-->
                label.classList.add("left-3","top-[-18%]","md:text-sm","text-[#00754a]");
                input.addEventListener("focusout", () => {
                 if (input.value.length <=0){
                    req(input,label,labelText,rep)
                 }else{
                    label.classList.remove("text-[#00754a]")
                 }
                })
             })
          }
          function required(input,label,labelText,rep){
            focued(input,label,labelText,rep);
            input.addEventListener("input", () => {
                if(input.value.length !==0){
                    console.log('00000');
                    label.classList.add("left-3","top-[-18%]","text-sm","text-[#00754a]");
                    label.classList.remove("text-red-500");
                    labelText.classList.remove("text-red-500");
                    input.classList.remove("border-2","border-red-500");
                    rep.classList.add("hidden");
                }
            })
        }

        const firstNameInput = document.querySelector("#firstNameInput");
        const firstNameLabel = document.querySelector("#firstNameLabel");
        const firstNameLabelText = document.querySelector("#firstNameLabel span span");
        const reqFirstName = document.querySelector("#reqFirstName");
        required(firstNameInput,firstNameLabel,firstNameLabelText,reqFirstName);

        const lastNameInput = document.querySelector("#lastNameInput");
        const lastNameLabel = document.querySelector("#lastNameLabel");
        const lastNameLabelText = document.querySelector("#lastNameLabel span span");
        const reqLastName = document.querySelector("#reqLastName");
        required(lastNameInput,lastNameLabel,lastNameLabelText,reqLastName);

        const emailAddressInput = document.querySelector("#emailAddressInput");
        const emailAddressLabel = document.querySelector("#emailAddressLabel");
        const emailAddressLabelText = document.querySelector("#emailAddressLabel span span");
        const reqEmailAddress = document.querySelector("#reqEmailAddress");
        required(emailAddressInput,emailAddressLabel,emailAddressLabelText,reqEmailAddress);

        const dropDown1Input = document.querySelector("#dropDown1Input");
        const dropDown1Label = document.querySelector("#dropDown1Label");
        const dropDown1LabelText = document.querySelector("#dropDown1Label span span");
        const reqDropDown1 = document.querySelector("#reqDropDown1");
        required(dropDown1Input,dropDown1Label,dropDown1LabelText,reqDropDown1);

        const dropDown2Input = document.querySelector("#dropDown2Input");
        const dropDown2Label = document.querySelector("#dropDown2Label");
        const dropDown2LabelText = document.querySelector("#dropDown2Label span span");
        const reqDropDown2 = document.querySelector("#reqDropDown2");
        required(dropDown2Input,dropDown2Label,dropDown2LabelText,reqDropDown2);

        const passInput = document.querySelector("#passInput");
        const passLabel = document.querySelector("#passLabel");
        const passLabelText = document.querySelector("#passLabel span span");
        const reqPass = document.querySelector("#reqPass");
        required(passInput,passLabel,passLabelText,reqPass);

        let isOpen = false;
        const showPassBtn = document.querySelector("#showPass");
        const openEye = document.querySelector(".openEye");
        const closeEye = document.querySelector(".closeEye");
    
        showPassBtn.addEventListener("click", () => {
    
            if (isOpen) {
                isOpen = false;
                passInput.setAttribute("type", "text");
                openEye.classList.remove("hidden");
                closeEye.classList.add("hidden");
            }else{
                isOpen = true;
                passInput.setAttribute("type", "password");
                openEye.classList.add("hidden");
                closeEye.classList.remove("hidden");
            }
        })



    