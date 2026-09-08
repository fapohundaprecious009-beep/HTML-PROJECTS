
const myAge = document.getElementById("myAge");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");

let age;

mySubmit.onclick = function(){
    age=myAge.value;
    age=Number(age);

    if(age >=100){
        result.textContent="you can't enter the site";
    }
    else{
        result.textContent="you have to be 18+ to enter the site"
    }
}

