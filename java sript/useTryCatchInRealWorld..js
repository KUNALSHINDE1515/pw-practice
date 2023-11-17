try {
    console.log("hello");
    console.log(a);
} catch (err){
    console.log("handle",err);
} finally{
    console.log("finally");
}

console.log("end");