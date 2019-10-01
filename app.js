//Sum function
function calculate() {
   var n1 = Number(document.getElementById("numb1").value);
   var n2 = Number(document.getElementById("numb2").value);
   sum= n1 + n2;
   var Result = document.getElementById("Result").innerHTML = sum;
};