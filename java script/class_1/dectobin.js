let num=39;
let pow=1;
let bin=0;

function decbin(a)
{
while(num>0)
{
    let rem=num%2;
    bin=bin+rem*pow;
    pow=pow*10;
    num=Math.floor(num/2);
}
return bin;
}

let val=decbin(num);
console.log(val);