const product = ( n, p, r)  
{
   this.name = n;
   this.price = p;
   this.rating = r; 
}

const p = new   product ( ' mi phone ' , 512.000,  5)
console.log(p);

//  The therory of this keyword pointing to calling context is not applicable with arrow function