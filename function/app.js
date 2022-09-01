let area ;
let width ;
let height ;


width = window.prompt("Enter Width");
height = window.prompt("Enter Height");

area = getArea(width,height);

console.log("the Area is" + area)
function getArea(width,height){
let ressult = width * height;
return ressult;

}