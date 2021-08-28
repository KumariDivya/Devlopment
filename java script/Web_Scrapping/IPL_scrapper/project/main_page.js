let request=require('request');
let cheerio=require('cheerio');

request("https://my.indiamart.com/",function(error,response,data)
{
    processdata(data);
});

function processdata(html)
{
    let ch=cheerio.load(html);

}