var m = Math.floor(Math.random()*100)+1;

var j = m%2;

	if (j=0){

	alert(m+"Number is even");
else

	alert(m+"Number is odd");
}

for(var count=1;count<=10;count++)
{

	let num=prompt("Please enter a number")

	if (num<m)

		alert("The number you have chosen is lower, please try again");

	else if (num>m)

		alert("The number you have chosen is higher, please try again");

	else if (num==m)

		alert("Correct! You WIN!");

	else
		alert("You LOSE!");
}

