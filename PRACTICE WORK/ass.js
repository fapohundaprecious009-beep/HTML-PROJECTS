// ASSIGNMENT 1: WEATHER PREDICTION


function weatherPrediction() {
    let chance = Math.floor(Math.random() * 101);

    if (chance >= 50) {
        console.log(`It may rain today. Rain chance: ${chance}%`);
    } else {
        console.log(` It probably won't rain today. Rain chance: ${chance}%`);
    }
}

weatherPrediction();


// ASSIGNMENT 2: SIMPLE CALCULATOR

let num1 = Number(prompt("Enter the first number:"));
let operator = prompt("Enter an operator (+, -, *, /):");
let num2 = Number(prompt("Enter the second number:"));

let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    result = num1 / num2;
} else {
    result = "Invalid operator";
}

console.log("Result:", result);


const numbers2 = [5, 10, 15, 20];

const result2 = numbers2.map(function(number) {
    return number + 10;
});

console.log(result2);

//2
const names1 = ["esther", "john", "mary"];

const result3 = names1.map(function(name, index) {
    if (index === 0) {
        return "glory";
    }

    return name.toUpperCase();
});

console.log(result3);

//3
const students1 = [
    { name: "glory", age: 23 },
    { name: "John", age: 20 },
    { name: "Mary", age: 22 }
];

const ages = students1.map(function(student) {
    return student.age;
});

console.log(ages);


//4
const students2 = [
    { name: "glory", score: 85 },
    { name: "John", score: 70 },
    { name: "Mary", score: 90 }
];

const studentNames = students2.map(function(student) {
    return student.name;
});

console.log(studentNames);

//5
const prices = [1000, 2000, 3000];

const newPrices = prices.map(function(price) {
    return price * 1.1;
});

console.log(newPrices);

//6
const names2 = ["Esther", "John", "Mary"];

const greetings = names2.map(function(name) {
    return "Hello " + name;
});

console.log(greetings);

//7
const students3 = [
    { name: "Esther", score: 80 },
    { name: "John", score: 45 },
    { name: "Mary", score: 70 }
];

const results = students3.map(function(student) {
    return {
        name: student.name,
        score: student.score,
        status: student.score >= 50 ? "Pass" : "Fail"
    };
});

console.log(results);