
// risk code dalne ka idhar
try {
   let x = undefined
   console.log(x[0]);
}catch(err){
   console.log("erro handling in catch",err);
}finally{
    console.log("finally always gets executed");
}

console.log("end"
);