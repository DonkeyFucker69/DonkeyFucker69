var numOneG = document.getElementById("gange-one");
var numTwoG = document.getElementById("gange-two");
var gangeSum = document.getElementById("gange-sum");

numOneG.addEventListener("input", addG);
numTwoG.addEventListener("input", addG);

function addG() {
    var oneG= parseFloat(numOneG.value) || 0;
    var twoG = parseFloat(numTwoG.value) || 0;
    var sumG = oneG*twoG
    gangeSum.innerHTML = oneG + " * " + twoG + " = " +sumG
};
