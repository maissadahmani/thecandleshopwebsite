var navLinks = document.getElementById("navlinks");
var bxMenu = document.getElementById("bx-menu");
let scrollcontainer = document.querySelector(".feedback-row");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

scrollcontainer.addEventListener("wheel", (e) => {
    scrollcontainer.style.scrollBehavior = "smooth";
  
    e.preventDefault();
    scrollcontainer.scrollLeft += e.deltaY;
  });
  
  nextbtn.addEventListener("click", () => {
    scrollcontainer.style.scrollBehavior = "smooth";
  
    scrollcontainer.scrollLeft += 410;
  });
  
  backbtn.addEventListener("click", () => {
    scrollcontainer.style.scrollBehavior = "smooth";
  
    scrollcontainer.scrollLeft -= 410;
  });
  
  
  bxMenu.onclick= function(){
      /*navli = document.querySelector(".nav-links");*/
      navLinks.classList.toggle("active");
  }