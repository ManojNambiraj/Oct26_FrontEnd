// Event Listeners

    // function demo(){
    //     console.log("hello");
    // }

    // function handleName(event) {
    //     console.log("Name: ", event.target.value);
    // }

    // function handleAge(event) {
    //   console.log("Age: ", event.target.value);
    // }

let bankBalance = 0
let amount = 0

function HandleAccount(event){
    amount = Number(event.target.value);
}

function Deposite(){
    bankBalance += amount

    let ele = document.getElementById("balance")
    ele.innerText = bankBalance;
}

function withdraw(){
    bankBalance -= amount

    let ele = document.getElementById("balance");
    ele.innerText = bankBalance;
}

// Calculator
// Find Prime Number
// Find a Factorial of the Number