let score = 4

function one (){
    let score = 0
    console.log(score);
}

function two (){
    let score = 3
    console.log(score);
}

function three (){
    console.log(score);
}
// one ()
// two()
// three()
// console.log(score);

function outerfunc (){
    let outerVar = 'I am at scope level 1'
    function innerFunc(){
        let innerVal = "I am at scope level 2"
        console.log(outerVar);
    }
    // console.log(innerVal);
    innerFunc()
}

// outerfunc()


const myGlobalvalue = 0

function func(){
    const val1 = 1;
    console.log(myGlobalvalue);

    function inneofFunc(){
        const val2 = 2;
        console.log(val2, val1, myGlobalvalue);

        function innerofInnerfunc(){
            const val3 = 3;
            console.log( val3, val2, val1,myGlobalvalue);
        }
        innerofInnerfunc()
    }
    inneofFunc()
}
// func()

// closer
function superFunc(){
    let outerValue = "i am outer"
    function minorFunc(){
        console.log(outerValue);
    }
    minorFunc()
}
// superFunc()

const errorMessage = "file not found"

setTimeout(function callback(){
    console.log(errorMessage);
},1000)


let pageCount = 0

const items = [1,2,3,4,7,9,8,5,9]

items.forEach(function iterator(num){
pageCount++
console.log(num);
})

console.log("page count :",pageCount);