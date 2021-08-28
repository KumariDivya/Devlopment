let name="I am Divya Kumari";
let str=name.split(" ");
console.log(str);
let max=str[0].length;
for(let i=1;i<str.length;i++)
{
    //console.log(str[i]);
    if(str[i]>max)
    {
        max=str[i].length;
    }
    console.log(max);
}
