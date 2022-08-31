// if (condition){

// }else{

// }

let Costumerisbanned = false;
let soup = "chicken noodle soup";
let crackes = true;
let replay;
if(Costumerisbanned){
    replay = `no soup for you`
}else if(soup && crackes){
    replay= `Here is your order ${soup} & crackes`;
}else if(soup){
    replay= `Here is your order ${soup}`;
}
else{
    replay=`sory we are out of soup`;
}
console.log(replay);