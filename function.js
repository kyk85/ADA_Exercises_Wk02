/*Function Examples*/

function sayHello(name) {
	document.write("Hello " + name)
	document.write("<br/>")
}
sayHello("YK")
sayHello("Jim")

document.write("<hr/>")

function calculateTheSum(num1,num2) {
	document.write(num1+num2)
	document.write("<br/>")
}
calculateTheSum(3,18)

function calculateDifference(num1,num2) {
	if (num1>num2) {
		return num1-num2;
	} else {
		return num2-num1;
	}
}
var answer=calculateDifference(50,23)
document.write(answer)

document.write("<hr/>")

function calculateAverage(num1,num2,num3){
	return (num1+num2+num3)/3
}
var average=calculateAverage(10,3,5)
document.write(average)

document.write("<hr/>")
var myString = "Asia Developer Academy"
document.write(myString.toUpperCase())
document.write("<br/>")
document.write(myString.toLowerCase())
document.write("<br/>")
document.write(myString.split(' '))

document.write("<hr/>")
document.write(Math.PI)
document.write("<br/>")
document.write(Math.round(3.7))
document.write("<br/>")
document.write(Math.sqrt(169))
document.write("<br/>")
document.write(Math.ceil(3.1))
document.write("<br/>")
document.write(Math.floor(3.9))
document.write("<br/>")
document.write(Math.random())

document.write("<hr/>")


function getRandomNumber(){
//	return Math.round(Math.random()*100)
	document.write(Math.round(Math.random()*100))
}

getRandomNumber();
//document.write(getRandomNumber())
//var number=getRandomNumber()
//document.write(number)

/*function minMaxAvg(x, y, z) {
	if (x<y&&z) {
	var min = x
	} else if (y<x&&z) {
		var min = y
	} else {
		var min = z
	}

	if (x>y&&z) {
	var max = x
	} else if (y>x&&z) {
		var max = y
	} else {
		var max = z
	}

	var avg = (x+y+z)/3
	var final = [min,max,avg]
	return final
}

minMaxAvg(10,50,70)
*/




