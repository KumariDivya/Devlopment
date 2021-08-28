let cheerio=require('cheerio');
let request=require('request');
let fs=require('fs');
let path=require('path');
const { find } = require('cheerio/lib/api/traversing');


function getallmatchesdata(link){
request(link,function(error,response,data)
{
    processdata(data);
    //fs.writeFileSync('./all.html',data)
});
}

function processdata(html)
{
    let ch=cheerio.load(html);
    //get name of both team
    let bothinnings=ch('.Collapsible');
    //console.log(bothinnings.length);
    for(let i=0;i<bothinnings.length;i++)
    {
        let teamname=ch(bothinnings[i]).find('h5').text();
        teamname=teamname.split('INNINGS')[0].trim();
        console.log(teamname);     
        let alltrs=ch(bothinnings[i]).find(".table.batsman tbody tr");

        for(let j=0;j<alltrs.length-1;j++)
        {
            let td=ch(alltrs[j]).find('td');
        //console.log(td.length);
        if(td.length>1)
        {
           let batsmanname=ch(td[0]).find('a').text().trim();
           let runs=ch(td[2]).text().trim();
           let balls=ch(td[3]).text().trim();
           let fours=ch(td[5]).text().trim();
           let sixes=ch(td[6]).text().trim();

           //console.log("  BatsmanName="+batsmanname+"  Runs="+runs+ "  Balls="+balls+"  fours="+fours+"  Sixes="+sixes);
           //  mera nahi aa raha same output console.log('Batsman = ${batsmanname}')
           
        //    console.log("Batsman ="+ batsmanname);
        //    console.log("Runs ="+runs);
        //    console.log("Balls ="+balls);
        //    console.log("fours ="+fours);
        //    console.log("sixes ="+sixes);
        processdetails(teamname,batsmanname,runs,balls,fours,sixes);
           
        }
    }
    //console.log("#############################################")
    }
    

}
let teampath="a";
function checkteamfolder(teamname)
{
    teampath=path.join('./Ipl',teamname);
    //console.log(teampath);
    return fs.existsSync(teampath);
}

function createteamfolder(teamname)
{
    teampath=path.join("./Ipl",teamname);
    fs.mkdirSync(teampath);
}

function checkplayerfile(teamname,batsmanname)
{
    let playerpath=path.join(teampath,batsmanname+".json");
    return fs.existsSync(playerpath);
}



function createbatsmanfile(teamname,batsmanname,runs,balls,fours,sixes)
{
    let filepath=path.join(teampath,`${batsmanname}.json`);
    let batsmanfile=[];
    let INNINGS=
    {
        Runs:runs,
        Balls:balls,
        Fours:fours,
        Sixes:sixes
    }
    batsmanfile.push(INNINGS);
    fs.writeFileSync(filepath,JSON.stringify(batsmanfile));
}

function updatebatsmanfile(teamname,batsmanname,runs,balls,fours,sixes)
{
    let filepath=path.join(teampath,batsmanname+".json");
    let batsmanfile=fs.readFileSync(filepath);
    batsmanfile=JSON.parse(batsmanfile);
    let INNINGS=
    {
        Runs:runs,
        Balls:balls,
        Fours:fours,
        Sixes:sixes
    }
    batsmanfile.push(INNINGS);
    fs.writeFileSync(filepath,JSON.stringify(batsmanfile));
} 

function processdetails(teamname,batsmanname,runs,balls,fours,sixes)
{
    let teamfolderexist=checkteamfolder(teamname);
    //console.log(teamfolderexist,teamname);
    if(teamfolderexist)
    {
        let playerfileexist=checkplayerfile(teamname,batsmanname);
        //console.log(playerfileexist);
        if(playerfileexist)
        {
              updatebatsmanfile(teamname,batsmanname,runs,balls,fours,sixes);
        }
        else
        {
            createbatsmanfile(teamname,batsmanname,runs,balls,fours,sixes);
        }
    }
    else
    {
        createteamfolder(teamname);
        createbatsmanfile(teamname,batsmanname,runs,balls,fours,sixes);
    }
    //console.log("##############################");
}

module.exports=getallmatchesdata;