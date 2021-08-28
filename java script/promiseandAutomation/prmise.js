let fs=require('fs');

function f(path)
{
    return new Promise(function executor(resolve,reject){
        fs.readFile(path,function(err,data){
            if(err) reject(err);
            else resolve(data);
        });
    });
}

function laterop(data){
    console.log(data+"");
}

let p1=f("./a.txt");
let p2=f("./b.txt");
let p3=f("./c.txt");

p1.then(laterop);
p2.then(laterop);
p3.then(laterop);