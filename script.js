const descparagraph = document.getElementById("desc-paragraph");
const plusbtn = document.getElementById("plus");
const minusbtn = document.getElementById("minus");
const dreamy = document.getElementById("dreamy");
const productimg = document.getElementById("product-img");
const productname = document.getElementById("product-name");
const productpar1 = document.getElementById("product-paragraph1");
const productpar2 = document.getElementById("product-paragraph2");
const productprice = document.getElementById("product-price");
const ingredients = document.getElementById("ingredients");
var navLinks = document.getElementById("navlinks");
var bxMenu = document.getElementById("bx-menu");
let scrollcontainer = document.querySelector(".feedback-row");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");
plusbtn.addEventListener("click", ()=>{
  plusbtn.style.display="none";
  minusbtn.style.display="block";
descparagraph.style.display="block";

})

minusbtn.addEventListener("click", ()=>{
  document.getElementById("plus").style.display="block";
  document.getElementById("minus").style.display="none";
document.getElementById("desc-paragraph").style.display="none";

})
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





