let fs=require('fs');
let data=fs.readFileSync('abc.txt');
console.log(data.toString());
let wdata="This is some Demo Text";
fs.writeFileSync('write.txt',wdata);
fs.appendFileSync("write.txt","this is appended data that i want to append");
//fs.unlinkSync("write.txt");
//fs.mkdirSync("Other");
console.log(fs.existsSync("write.txt"));