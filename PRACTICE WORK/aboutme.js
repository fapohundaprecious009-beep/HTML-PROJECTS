document.getElementById("me").innerHTML = "Hi guysss, I am Precious.";

let facts = [
    "I am 17 years old.",
    "I am a Computer Science student.",
    "I love designing websites.",
    "I enjoy learning new things.",
    "I want to become an amazing software developer."
];

let index = 0;

function MyFunction() {

    let element = document.getElementById("me");

    if (element) {
        element.innerHTML = facts[index];

        element.style.color = "white";
        element.style.backgroundColor = "purple";

        index++;

        if (index === facts.length) {
            index = 0;
        }
    }
}