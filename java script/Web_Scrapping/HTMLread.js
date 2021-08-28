let fs=require('fs');
const cheerio=require('cheerio');
let HTMLkadata=fs.readFileSync("./HTMLpro.html");
//console.log(HTMLkadata+"");

//it load html data 
let ch=cheerio.load(HTMLkadata);

//read text in h1 heading if dont use than it will return object of properties of h1
// let H1=ch('h1').text();
// console.log(H1);

// let ptags=ch('p');
// //console.log(ptags);
// let p1=ch(ptags['2']).text();
// console.log(p1)

// it search even child child
// let pinul=ch('ul li p').text();
// console.log(pinul);

//it search only own child like ul search p only in its p
// let pinul=ch('ul>p').text();
// console.log(pinul);

//using classes use dot operator in case of class
// ch('.text').length for the length of string or finding how many p tags aare there
let data=ch('.text').length;
console.log(data);