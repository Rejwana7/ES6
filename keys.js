const glass = { 
    name: 'glass', 
    color: 'golden', 
    price: 12, 
    isCleaned: true 
};

console.log(glass);
// all properties name
const keys=Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]
console.log(keys)

// all property values
const values = Object.values(glass);
// [ 'glass', 'golden', 12, true ]
 console.log(values)


 const entries= Object.entries(glass)
 console.log(entries)

 // [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
// ]
// array of array,two dimensional array

delete glass.isCleaned;
// console.log(glass);
// destructuring
const {isCleaned,...shortGlass}=glass;
// console.log(shortGlass)

// freeze.kichu kora zabe na 
// Object.freeze(glass)
Object.seal(glass);
// modify korbe .but add hobe na
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass)