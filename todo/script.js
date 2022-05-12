let input=document.querySelector("#input");
let form1=document.querySelector("#form1");
let form2=document.querySelector("#form2");
let ul=document.querySelector("ul");
let li=document.querySelectorAll("li");
let search=document.querySelector("#search");
//submit event is handle using form only
form1.addEventListener("submit",(e)=>
{
e.preventDefault();
ul.innerHTML+=`<li class="list-group-item">${input.value} <span><i class="fa fa-trash" aria-hidden="true"></i></span>
</li>`;


}
);
form2.addEventListener("submit",(e)=>
{
    e.preventDefault();
   let str=e.target.value;
        li.forEach(element=>
            {
                let ele=element.innerText;
                let searchvalue=search.value;
                if(ele===searchvalue)
                

            
        
            });
}
);
