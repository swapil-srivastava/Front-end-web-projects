let ham=document.getElementsByClassName("ham")[0];
let home=document.getElementsByClassName("home")[0];

ham.addEventListener("click",()=>{
if(home.style.display=="flex"){
    home.style.display="none";
}
else{
    home.style.display="flex";
}
})



// front.addEventListener("mouseover",()=>{

// })