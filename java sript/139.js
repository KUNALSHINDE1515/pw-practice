let myHeros = [ "thor" , "spiderman"]
let dcHeros = ["batman" , "flash", "superman"]

let heropower = {

    thor: "hammer",
    spiderman : "sling",

    getSpidermanPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all object`);
}
console.log(myHeros.hitesh());
console.log(heropower.hitesh());    

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hi`);
}

// console.log(myHeros.heyhitesh());
// console.log(heropower.heyhitesh());


// inheritance


const user = {
    name: "top name",
    email:"top@gmail.com"
}

const Teacher ={
    makeVideos : true
}

const TeachingSupport = {
    isAvailable:false
}

const  Assistant = {
    makeAssignment : "js Assignment",
    fulltime: true,
    _proto_:TeachingSupport

}
// Teacher._proto__=user
Object.setPrototypeOf(TeachingSupport, Teacher)

console.log(Assistant);



String.prototype.trulength = function(){
console.log(`true lenght is ${this.trim().length}`);
}

"hitesh.    ".trulength()
"kunal     ".trulength()

