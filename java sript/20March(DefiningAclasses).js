// Propeties - Variables - data member
class product {

    // name;
    // price;
    // rating;


    constructor(n , p , r) {
        console.log("calling the constructor");
        this.name = n;
        this.price = p;
        this.rating = r;

        // return 10;  if you are returning primitive then it will be avoided constuctor

        // return { x : 0}, y: 20} ?if you return non primitive then it will return
    }
    // Properties behavaiour

    // behaviours _ function-member function 


    display (){
        console.log("this refer to",this);
        console.log("displaying the current product",this.name, this.price, this.rating);
    }
}
const p = new product("iphone", 10000 , 5); //new creates an empty plain object

//  in the above piece of code we are calling the constuctor method
console.log(p.name);

p.display();


