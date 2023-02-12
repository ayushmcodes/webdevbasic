//const variables cant be redeclared
//const variables cant be resassigned
//const variables have block scope

const PI=3.14;

//const s; we always have to assign a value to a const variable

//working on const objects and variables

const cars=["sab","volvo","bmw"]

console.log(cars)

cars[0]="hero"

console.log(cars)

cars[3]="bike"

console.log(cars)

cars.push("herohonda")

console.log(cars)

const obj={type:'fiat',model:'500',color:'white'}

obj.type='herohonda'

obj.owner='ayush'

console.log(obj)

//block scope

const a=18;
console.log(a);

{
    const a=12;
    console.log(a)
    
}


var b=9;
var c=2;
b=b**c;
console.log(b);

