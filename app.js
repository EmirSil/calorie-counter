//Sum function
function calculate() {
   var n1 = Number(document.getElementById("numb1").value);
   var n2 = Number(document.getElementById("numb2").value);
   
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
//CHANGE BOX COLOR
function changeColor() {
    var col = document.getElementById("chng").value;
    document.getElementById("cnv").style.backgroundColor = col;
}


    console.log(document.getElementById("chng"));

//FILL LIST WITH TEXT INPUT
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
//POPULATE THE TABLE
var xmlHttp = new XMLHttpRequest();
xmlHttp.open ("GET", "https://jsonplaceholder.typicode.com/users?fbclid=IwAR1TMLF5lIRm3SpZr6ufDjAg1MzrT9ntpdMWj-XYxJd1PKtiEIRxX7_Rvrw", true);
xmlHttp.send();
xmlHttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const test= JSON.parse(this.responseText);
        let output='';
        for (var i = 0; i< test.length; i++){
            output += "<tr><td>" + test[i].id + "</td>" + "<td>" + test[i].name + "</td>" + "<td>" + test[i].username +"</td>" + "<td>" + test[i].email + "</td>" + "<td></tr>";
        document.getElementById("filling").innerHTML = output;
        
        }
        const entries = Object.entries(test);
        console.log(entries);
    }
       
};

//FILTER THE TABLE
function myFilter() {
    var input, filter, table, tr, td, i, entry;
    input = document.getElementById("searchinput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tablediv");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            entry = td.textContent || td.innerText;
            if (entry.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";

            } 
            else {
                tr[i].style.display ="none";
            }
        }
    }

}
   
