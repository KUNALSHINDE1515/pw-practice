function product (n, p, r){
    this.name = n;
    this.price = p;
    this.rating = r;

}

const p = new product("macbook", 1500000, 5)
console.log(p);

let x ={
    p:product
};

x.p("airpods",2000,5);
console.log(x);

/**
 * 1 . this keywords  in js is different than other language.
 * 2.Tghis keyword refers to the context from where we called
 * 
 * in  the fuction constructor also
 * - if you return primitive it is ignored and we return the object referred by this 
 * -if you return a custom object ,then  the custom object is returned
 * 
 * -if you dont return anything, than object referred by this is returned

 */