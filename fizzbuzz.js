/*Fizzbuzz Quiz*/

for (i=1; i<=100; i++) {
	var divisibleByThree = i%3
	var divisibleByFive = i%5
//check if divisible by 3 and 5
	if (divisibleByThree==0 && divisibleByFive==0){
		document.write("fizzbuzz" + "<br/>")
	} 
//if divisible by 3
	else if (divisibleByThree==0){
		document.write("fizz" + "<br/>")
	}
//if not divisible by 3, check if divisible by 5	
	else if (divisibleByFive==0){
		document.write("buzz" + "<br/>")
	}
	else {
	document.write(i + "<br/>")
	}
}