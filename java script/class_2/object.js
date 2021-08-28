let myself=
{
    name:"Divya Kumari",
    age:21,
    typo:[20,21,47,53],
    address:
    {
        street:18,
        Block:'length',
    },
    sayshi:function fn()
    {
        console.log("My Name is Divya kumari");
        return "hii";
    },
}
//console.log(myself);
//two ways to access values
//1
// console.log(myself.name);
// console.log(myself.address.street);
// console.log(myself.sayshi());

//2
// console.log(myself["name"]);
// console.log(myself["address"]['street']);
// console.log(myself["sayshi"]());
// console.log(myself["typo"][2]);

// two ways of printing keys
// 1
// for(let key in myself)
// {
//     console.log(key);
// }

//2
let karr=Object.keys(myself);
//console.log(karr);

//for printing values
// for(let key in myself)
// {
//     console.log(myself[key]);
// }

for(let i=0;i<karr.length;i++)
{
    let key=karr[i];
    console.log(myself[key]);
}