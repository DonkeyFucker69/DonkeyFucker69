var numOne = document.getElementById("plus-one")
var numTwo = document.getElementById("plus-two")
var plusSum = document.getElementById("plus-sum")

numOne.addEventListener("input", add)
numTwo.addEventListener("input", add)

function add() {
    var one = parseFloat(numOne.value) || 0;
    var two = parseFloat(numTwo.value) || 0;
    var sum = one+two
    plusSum.innerHTML = one + " + " + two + " = " +sum
}
