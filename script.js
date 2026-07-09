window.addEventListener("scroll",()=>{
const nav=document.querySelector("nav");
if(window.scrollY>80){
nav.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";
}else{
nav.style.boxShadow="none";
}
});
