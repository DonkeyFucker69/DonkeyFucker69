var numOneD = document.getElementById("dividere-one");
var numTwoD = document.getElementById("dividere-two");
var dividereSum = document.getElementById("dividere-sum");

numOneD.addEventListener("input", addD);
numTwoD.addEventListener("input", addD);

function addD() {
    var oneD= parseFloat(numOneD.value) || 0;
    var twoD = parseFloat(numTwoD.value) || 0;
    var sumD = oneD/twoD
    dividereSum.innerHTML = oneD + " / " + twoD + " = " +sumD
};
