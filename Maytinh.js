function add() {
    let firstValue = Number(document.getElementById("number1").value);
    let secondValue = Number(document.getElementById("number2").value);
    let lastValue = firstValue + secondValue;
    document.getElementById("result").innerHTML = "Result: " + lastValue;
}

function sub() {
    let firstValue = Number(document.getElementById("number1").value);
    let secondValue = Number(document.getElementById("number2").value);
    let lastValue = firstValue - secondValue;
    document.getElementById("result").innerHTML = "Result: " + lastValue;
}

function multi() {
    let firstValue = Number(document.getElementById("number1").value);
    let secondValue = Number(document.getElementById("number2").value);
    let lastValue = firstValue * secondValue;
    document.getElementById("result").innerHTML = "Result: " + lastValue;
}

function division() {
    let firstValue = Number(document.getElementById("number1").value);
    let secondValue = Number(document.getElementById("number2").value);
    let lastValue = firstValue / secondValue;
    document.getElementById("result").innerHTML = "Result: " + lastValue;
}
