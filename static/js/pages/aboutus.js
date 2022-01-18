"use strict"

const activeAndHide = () => {
  [...document.getElementsByClassName("menu-text")].map(x => x.classList.remove("menu-active"));
  [...document.getElementsByClassName("about-us-item")].map(x => x.classList.add("about-us-hide"));
}

document.querySelector(".menu-history").addEventListener("click", () => {
  activeAndHide(); 
  document.querySelector(".menu-history").classList.add("menu-active");
  document.querySelector(".about-us-history").classList.remove("about-us-hide");
}); 

document.querySelector(".menu-policy").addEventListener("click", () => {
  activeAndHide(); 
  document.querySelector(".menu-policy").classList.add("menu-active");
  document.querySelector(".about-us-policy").classList.remove("about-us-hide");
}); 

document.querySelector(".menu-accessibility").addEventListener("click", () => {
  activeAndHide(); 
  document.querySelector(".menu-accessibility").classList.add("menu-active");
  document.querySelector(".about-us-accessibility").classList.remove("about-us-hide");
}); 

document.querySelector(".menu-faq").addEventListener("click", () => {
  activeAndHide(); 
  document.querySelector(".menu-faq").classList.add("menu-active");
  document.querySelector(".about-us-faq").classList.remove("about-us-hide");
}); 


