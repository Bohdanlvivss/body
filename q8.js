

var days = parseInt(prompt("Please enter days:"));
var hours = parseInt(prompt("plese enter hours:"));
var month = parseInt(prompt("please enter month:"));
var secondsd = days * 24 * 60 * 60;
var secondsh = hours *60*60;
var secondsm = month *30*24*60*60;
var secondsall = secondsd+secondsh+secondsm;

document.write(secondsd + " Seconds for days");

document.write("<br>");
document.write(secondsh + " Seconds for hours");

document.write("<br>");
document.write(secondsm + " Seconds for monthes");
document.write("<br>");
document.write(secondsall + " all");

