//Sum function
function calculate() {
   var n1 = Number(document.getElementById("numb1").value);
   var n2 = Number(document.getElementById("numb2").value);
   //var opt =document.getElementById("sel").value;
   if(document.getElementById('sel').value == "suma") {
       sum = n1 + n2;
}
   else if (document.getElementById('sel').value == "minus") {
       sum = n1 - n2;
   } 
   else if (document.getElementById('sel').value == "multiply") {
       sum = n1 * n2;
   }
   else if (document.getElementById('sel').value == "divide") {
       sum = n1 / n2;
   }
   var Result = document.getElementById("Result").innerHTML = sum;
};