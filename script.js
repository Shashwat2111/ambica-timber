function main(){
let width=document.getElementById("width").value
let lenth=document.getElementById("lenth").value

let hight=document.getElementById("hight").value
let unit=document.getElementById("unit").value

let result=width*lenth*hight*unit/144;
document.getElementById("p").innerHTML=result}