let request=require('request');
let cheerio=require('cheerio');
let getallmatches=require("./allmatches");

// load main page ipl 2020
request("https://www.espncricinfo.com/series/ipl-2020-21-1210595",function(error,response,data)
{
    processdata(data);
});

function processdata(html)
{
    let ch=cheerio.load(html);
    //console.log(ch);
    let atag=ch('.widget-items.cta-link a');
    let allmatchlink="https://www.espncricinfo.com"+atag.attr('href');

   // console.log(allmatchlink);
    getallmatches(allmatchlink);
}
