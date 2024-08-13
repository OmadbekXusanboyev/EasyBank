const body = document.querySelector("body");
const menu = document.querySelector(".menu");
const modal = document.querySelector(".modal");
const darkmode = document.querySelector(".darkmode");
const menu1 = document.querySelector(".fa-solid");



menu.addEventListener("click", ()=>{
     modal.classList.toggle("active");
     if (menu1.classList.value.includes("fa-bars")) {
          menu1.classList.remove("fa-bars");
          menu1.classList.add("fa-xmark");
     }else{
          menu1.classList.add("fa-bars");
          menu1.classList.remove("fa-xmark");
     }
})


darkmode.addEventListener("click", ()=>{
    body.classList.toggle("active");
})