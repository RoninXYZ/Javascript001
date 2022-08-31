let count = 0;
document.getElementById("decButton").onclick = function () {
    count -=1;
    document.getElementById("countLabel").innerHTML = count
}
document.getElementById("resButton").onclick = function () {
    count = 0;
    document.getElementById("countLabel").innerHTML = count
}
document.getElementById("IncButton").onclick = function () {
    count +=1;
    document.getElementById("countLabel").innerHTML = count
}