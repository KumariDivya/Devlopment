// let val=process.argv[2];

// function add(a)
// {
//     console.log(parseInt(a)+2);
// }

// add(val);

let val=process.argv.slice(2);

function add(a)
{
    for(let i=0;i<a.length;i++)
    {
        console.log(parseInt(a[i])+2);
    }
}
add(val);