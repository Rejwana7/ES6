const max = Math.max(6, 23, 45, 1, 89, 23)
console.log(max)

const numbers=[3, 5, 2, 45, 5, 43, 90, 32, 15];
const arrayMax=Math.max(...numbers)
// console.log(...numbers)
// sonkha pay 3 dot dile
console.log(arrayMax)

// use spread operator to copy
const friends  = [4, 5, 87, 9];
const  bondhu=friends 
const dosto=[...friends]
console.log(dosto)
bondhu.push(12)
friends.push(100)
console.log(dosto)
console.log( bondhu)
console.log(friends)

// advanced 
const sonkha = [...friends,9999] // add extra elements while copy
console.log(sonkha)


// Merging Object
const user = { name: "Alice" };
const details = { age: 25, country: "USA" };
const merged = { ...user, ...details }; 
console.log(merged)

// Overriding Properties
const user1 = { name: "Alice", age: 25 };
const updateUser={...user1,age:26}
console.group(updateUser)

