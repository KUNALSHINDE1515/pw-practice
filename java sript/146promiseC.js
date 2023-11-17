function createPromise(){
    return new Promise(function exec(resolve, reject){
        //  your code goes here
        setTimeout(function f(){
            console.log("timer done");
            resolve("done");    
        },3000);

    });
}

console.log("start");
let x = createPromise();
console.log("got a new promise",value);
x.then(function f(value){
    console.log("promise done",value);
}).catch(function g(value){
    console.log("handled");
})

console.log("end");

// for(let i = 0; i < 10000000; i++)