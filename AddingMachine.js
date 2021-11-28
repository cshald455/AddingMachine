var count = 0;
var total = 0;

function add(number)
{
 total = total + number;
 count = count + 1;
 printIt();
}

function printIt()
{
  var printString = "Count: " + count + "<br>Total: " + total;
  document.getElementById('result').innerHTML = printString;
}

function clearIt()
{
 count = 0;
 total = 0;
 document.getElementById("result").innerHTML = "Count : 0 <br> Total : 0";
}
