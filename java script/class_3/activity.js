let fs=require('fs');
let path=require('path');
let Extensions={
    Images:['.png','.jpg','.jpeg','gif'],
    Audio:['.mp3'],
    Documents:['.pdf','.txt','.doc'],
    Compressed:['.zip','.rar'],
    videos:['.mkv','.mp4']
    other:[]
}


// let types = {
//     media: ["mp4", "mkv", "mp3"],
//     archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
//     documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
//     app: ['exe', 'dmg', 'pkg', "deb"]
//     
// }

function checkfolder(extension,folderpath)
{
    for(let key in Extensions)
    {
        let arr=Extensions[key];
        //array.include check whther the value exist in array or not
        let eon=arr.includes(extension);
        if(eon==true)
        {
            //console.log(key);
            extfolderpath=path.join(folderpath,key);
            //console.log(extfolderpath);
            break;
            
        }
        
    }
    return fs.existsSync(extfolderpath);
}

function createfolder()
{
    //console.log(extfolderpath);
    fs.mkdirSync(extfolderpath);
}

let input=process.argv.slice(2);
//console.log(input[0]);
let folderpath=input[0];
let extfolderpath=folderpath;
let content=fs.readdirSync(input[0]);

function moveFile(source,extfolderpath){
    // copy file from the source path to destination path !!
    fs.copyFileSync(source, extfolderpath);
    // then delete file from the source path !!
   // fs.unlinkSync(source);
    //console.log(source,extfolderpath);

}

for(let i=0;i<content.length;i++)
{
    //console.log(content[i]);
    let source=content[i];
    //console.log(source);
    //console.log(path.extname(content[i])); gives extension name
    let extensionname=path.extname(content[i]);
    let extensionfolderexist=checkfolder(extensionname,folderpath);
    //console.log(extensionfolderexist);
    let ext=path.join(extfolderpath,source);
    source=path.join(folderpath,source);
    
    if(extensionfolderexist==false)
    {
        createfolder();
    }

    //
    //file or folder source
    if(fs.lstatSync(source).isFile())
    {
        moveFile(source,ext);
    }
}