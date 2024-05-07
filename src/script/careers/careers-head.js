const careers_head = document.querySelector(".careers-head-careers");
fetch("../../components/careers/careers-head.html")
  .then((res) => res.text())
  .then((data) => {
    careers_head.innerHTML = data;
    const findAJobDropdown = document.querySelector('#findajob-dropdown')
    const findAJobButton = document.querySelector('#findajob-button')
    const workingDropdown = document.getElementById('working-dropdown')
    const workingButton = document.getElementById('working-button')
    const myJobsDropdown = document.getElementById('myjobs-dropdown')
    const myJobsButton = document.getElementById('myjobs-button')


    // find a job dropdown
    findAJobButton.addEventListener("mouseover", ()=>{
      findAJobDropdown.classList.remove("hidden");
    })
    findAJobDropdown.addEventListener("mouseover", () => {
      findAJobDropdown.classList.remove("hidden");
    })
      
   
    findAJobButton.addEventListener("mouseout", () => {
      findAJobDropdown.classList.add("hidden");
    })
      
 
    findAJobDropdown.addEventListener("mouseout", () => {
      findAJobDropdown.classList.add("hidden");
    })
   
    

    // working at starbucks dropdown
    workingButton.addEventListener("mouseover", () => {
      workingDropdown.classList.remove("hidden");
    })
    workingDropdown.addEventListener("mouseover", () => {
      workingDropdown.classList.remove("hidden");
    })
    workingButton.addEventListener("mouseout", () => {
      workingDropdown.classList.add("hidden");
    })
    workingDropdown.addEventListener("mouseout", () => {
      workingDropdown.classList.add("hidden");
    })

   

    // my jobs dropdown
    myJobsButton.addEventListener("mouseover", () => {
      myJobsDropdown.classList.remove("hidden");
    })
    myJobsDropdown.addEventListener("mouseover", () => {
      myJobsDropdown.classList.remove("hidden");
    })
    myJobsButton.addEventListener("mouseout", () => {
      myJobsDropdown.classList.add("hidden");
    })
    myJobsDropdown.addEventListener("mouseout", () => {
      myJobsDropdown.classList.add("hidden");
    })




    // careers dropdown
    const careersDropdown = document.getElementById("careers-dropdown")
    const careersNav = document.getElementById("careers-nav")
    const chevronButton = document.getElementById("chevron-button") 

    careersNav.addEventListener("click", () => {
      careersDropdown.classList.toggle("hidden");
    })
    careersNav.addEventListener("click", () => {
      chevronButton.classList.toggle("rotate-180");
    })
    
  })
  .catch((error) => console.error("Error fetching included file:", error));