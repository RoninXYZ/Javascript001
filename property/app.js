document.getElementById("myIdButton").onclick = function(){
    
    const myCheckBox = document.getElementById("myCheckbox")
    
    if(myCheckBox.checked ){
     console.log("you are subscribed")
    }else{
        console.log("you are Not subscribed")
    }
}