var numOneM = document.getElementById("minus-one");
var numTwoM = document.getElementById("minus-two");
var minusSum = document.getElementById("minus-sum");

numOneM.addEventListener("input", addM);
numTwoM.addEventListener("input", addM);

function addM() {
    var oneM = parseFloat(numOneM.value) || 0;
    var twoM = parseFloat(numTwoM.value) || 0;
    var sumM = oneM-twoM
    minusSum.innerHTML = oneM + " - " + twoM + " = " +sumM
};
