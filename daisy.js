let btn =document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input")


// btn.onclick= function() {
//    alert("buttion clicked");
// }
btn.addEventListener("click", function (){
   let item = document.createElement("li");
   item.innerText = inp.value;
   ul.appendChild(item);
   
   inp.value ="";
});