//document.write("Hello World")
// alert("this is a sample alert")
//console.log("this is a simple message to console")

var title = "Welcome to ADA!";
var message = "Welcome to week 2 of ADA. I hope you have fun!";
var fullmessage = title + ' ' + message;

console.log(title + ' ' + message);
document.write(title);
document.write("<br/>");
document.write(message);

document.write("<br/>");
document.write(fullmessage);

document.write("<hr/>");

var quantity = 3;
var price = 5;
var total = price*quantity;
var number = 10;

console.log('RM' + total);

document.write('RM' + total);


/*else if examples*/
document.write("<hr/>")
var hungry;
hungry = false;


if (hungry){
	console.log("Can we have a quick lunch break?");
	document.write("Can we have a quick lunch break?");
}
else {
	console.log("I can still handle it for a while.");
	document.write("I can still handle it for a while.");
}

document.write("<br/>")
var score = 75;
var msg;

if (score>=50){
	msg = 'Congratulations!';
	msg += ' Proceed to next round.';
}
else {
	msg = "Please try again!"
}

document.write(msg)

/*else if example*/
document.write("<hr/>")

var passingMark = 50;
var repeatMark = 40;
var distinctionMark = 80;
var score = 39;

if (score>passingMark){
	if(score>distinctionMark){
		document.write("Congratulations! You passed with distinction!");
	} else {
		document.write("Congratulations! You passed!");
	}
}
else if (score>repeatMark){
	document.write("Sorry please try again, but you may try again!")
}
else if (score<repeatMark){
	document.write("Sorry please try again!")
}

/*else if exercise*/
document.write("<hr/>")

var normalPrice = 200;
var childPrice = normalPrice*0.5;
var elderPrice = normalPrice*0.75;
var seniorPrice = childPrice
var age = 65;

if (age<18 || age>=65) {
	document.write("RM"+childPrice);
}
else if (age<=40) {
	document.write("RM"+normalPrice);
}
else if (age<65) {
	document.write("RM"+elderPrice)
}
//else {
//	document.write("RM"+seniorPrice)
//}


/*for loop example*/
document.write("<hr/>")

for (i=0; i<11; i++) {
	document.write(i);
	document.write("<br/>")
}

/*for loop exercise*/
document.write("<hr/>")


var msg = ''
var multiplier = 9
var lines = 15

for (i=1; i<=lines; i++) {
//calculate
	var total = i*multiplier
//display
	msg += i + ' x ' + multiplier + ' = ' + total + '<br/>' 
}

document.write(msg)


