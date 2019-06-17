var rm= Math.floor(Math.random()*100)+1; //Generates  random number
var j=rm%2; //modulus 
if (j==0)
    alert("The number is Even");
else
    alert("The number is Odd");
for (count=1;count<=10;count++)
{
    let num=prompt("Please enter a number:");
    if (num>rm){
        alert("Your number is higher. Make another guess");
    }
    if (num<rm){
        alert("Your number is lower. Make another guess");
    }
    if (num==rm){
        alert("YOU WIN!!");
        break; 
    }
    if (count==10) {
        alert("YOU Lose!!");
    }
}
