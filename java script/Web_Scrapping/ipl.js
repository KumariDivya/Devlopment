let request=require('request');
let fs=require('fs')
let cheerio=require('cheerio')
// request('https://www.espncricinfo.com/series/ipl-2020-21-1210595',getdata);

// function getdata(error,response,body)
// {
//     //console.log(body);
//     fs.writeFileSync("./hmepage.html",body)
// }

let homepage=fs.readFileSync('./homepage.html');
let ch=cheerio.load(homepage);
let atag=ch('.label.blue-text.blue-on-hover');
let hreflink="https://www.espncricinfo.com/" +atag['0'].attribs.href;
console.log(hreflink);

