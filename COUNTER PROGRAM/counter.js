const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");

const countLabel = document.getElementById("countLabel");

let count = 0;

increase.onclick = function() {
    count++;
    countLabel.innerHTML = count;
}

decrease.onclick=function(){
    count--;
    countLabel.innerHTML = count;
}

reset.onclick=function(){
    count=0;
    countLabel.innerHTML=count;
}