// ++++++++++++++++++++++++++++++++++++++++++++++
// Spread
const oneArray = [1,2,3,4]
const twoArray = [5,6,7,8]


// const threeArray = oneArray.concat(twoArray)
// const threeArray = [oneArray,twoArray]

const threeArray = [...oneArray,...twoArray]
// console.log(threeArray);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Rest

function manyArguments(){
    console.log(typeof arguments);
    let args = Array.from(arguments)
   let finalArr = args.map(e => e )
   console.log(finalArr);
}

function manyArgumentsv2(...args){
    console.log(typeof args);
    let finalArr =args.map(e => e)
    console.log(finalArr);
}

// manyArguments(1,2,3)
// manyArgumentsv2(1,2,3)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const names = ["superman" , "flash"]
const newNames = [ "Batman",...names,"thor"]

const sitename = "pwskill"
console.log([...sitename]);

function pwskill(...values){
    return values
}
console.log(pwskill("superman","flash"));


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// SET AND MAP OPERATOR


