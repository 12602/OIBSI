let logo=document.getElementById("btn");
let nav=document.getElementById("nav");
logo.addEventListener("click",(e)=>
{
 nav.classList.toggle("active");  
 
 logo.classList.toggle("active");  
 
});