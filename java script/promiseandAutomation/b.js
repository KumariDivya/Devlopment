// let promise=new Promise(function executor(reolve,reject){
//     reject("Rejected!");
// });

// promise.catch(function(err){
//     console.log(err);
// });

function f() {return new Promise(function executor(resolve, reject) 
    {setTimeout(function () {
        resolve(2);
    }, 2000);
});
}
let p = f();
p.then(function () {console.log(1);
});
setTimeout(function () {p.then(function () {console.log(2);
});
}, 3000);