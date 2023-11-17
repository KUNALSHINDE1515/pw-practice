let emp = {
    id: 101,     
    name:'sanket',
    Age: 24,
};

let keys = Object.keys(emp);
console.log(keys);

let values = Object.values(emp);
console.log(values);

let entries = Object.entries(emp);
console.log(entries);

Object.seal(emp);
emp.address = "random"

emp.id = 100;
console.log(emp);

let o = Object.assign({x:16}, emp);
console.log(o);  