let request=require('request');
let cheerio=require('cheerio');
let getallmatchesdata=require('./match.js')

function getallmatches(link)
{
    request(link,function(error,response,data){
        processdata(data);
    });
}

function processdata(html)
{
    let ch=cheerio.load(html);
    //console.log(ch);
    let allatag=ch('a[data-hover="Scorecard"]');
    //console.log(allatag.length);
    for(let i=0;i<allatag.length;i++)
    {
        let matchlink="https://www.espncricinfo.com"+ch(allatag[i]).attr('href');
       // console.log(matchlink);
       getallmatchesdata(matchlink);
    }
}

module.exports=getallmatches;


