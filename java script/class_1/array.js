// let a=[];
// a[0]=1;
// a[1]=2;
// a[2]=3;
// console.log(a);

// let a=[1,2,3,4,5];
// console.log(a);

let a=[2,34,45,3,4,44,6,778,9,23,54,6];
function fy(param)
{
    let min=param[0];
    let max=param[0];
    for(let i=1;i<=param.length;i++)
    {
        if(param[i]>max)
        {
            max=param[i];
        }
        if(param[i]<min)
        {
            min=param[i];
        }
    }
    return([min,max]);
}
let val=fy(a);
console.log(val);