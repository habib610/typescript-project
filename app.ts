//explicit types
let num : number;
let name : string;
let logic: boolean;



// let ninjas: string[];
let ninjas: string[] = [];
ninjas.push("habib");
console.log(ninjas)

let mixed : (string|number|boolean)[] = [];
mixed.push("hello");
mixed.push(false);
mixed.push(76);

console.log(mixed)


// objects

const collection = {
    name: "habib",
    roll: 5,
    student: true
}

// collection.name = false
collection.name = "rahman"
console.log(collection)