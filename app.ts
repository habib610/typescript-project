// dynamic type  

const player: any;

player = "cricketer";
console.log(player);

player = true;

console.log(player);

player = 75;
console.log(player);

const stuff: any[] = [];

stuff.push("basket");
stuff.push(67);
stuff.push(false);
console.log(stuff)


const names: {name: any, value: any, male: any} = {}

names.name = "basket";
names.value = 8;
names.male = "not specified"

console.log(names)