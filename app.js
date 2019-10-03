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

function changeColor() {
    var col = document.getElementById("chng").value;
    document.getElementById("cnv").style.backgroundColor = col;
}


    console.log(document.getElementById("chng"));


function fillist() {
   
    
   
    document.getElementById("rantxt").onkeypress = function(event){
        if (event.keyCode == 13 || event.which == 13){            
            var node = document.createElement("Li");
            node.innerHTML = document.getElementById("rantxt").value;
            document.getElementById("lista").appendChild(node);
            document.getElementById("rantxt").value ="";
            
        }

    };
    
}

var xmlHttp = new XMLHttpRequest();
xmlHttp.open ("GET", "https://jsonplaceholder.typicode.com/users?fbclid=IwAR1TMLF5lIRm3SpZr6ufDjAg1MzrT9ntpdMWj-XYxJd1PKtiEIRxX7_Rvrw", true);
xmlHttp.send();
xmlHttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const test= JSON.parse(this.responseText);
        let output='';
        for (var i = 0; i< test.length; i++){
            output += '<li>' + test[i].id + ', ' + test[i].name + ', ' + test[i].username;
        document.getElementById("tablediv").innerHTML = output;
        
        }
        
    }
       
};

   
