function compute() {
    //Get the values and calculate 
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + years;
    //Create the Interest text
    if ( principal >0) {
    document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + year + "</mark>";
    } else {
      alert("Enter a positive number");  
    }     
    document.getElementById("principal").focus();
}

//update the rate value
function updateRate() {
    document.getElementById("rate_val").innerHTML = document.getElementById("rate").value;
}

//Check for positive values
function validaAmount() {
    var principal = document.getElementById("principal").value;
    var biggerThanZero = ( parseInt(principal) > 0  )  ;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

}
