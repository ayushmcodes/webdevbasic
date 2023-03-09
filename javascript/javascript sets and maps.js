

const m=new Map([["apple",500],
["banana",200],
["grapes",100]]);

console.log(m);

m.set("cake",40);

console.log(m);

m.set("apple",40);

console.log(m);

console.log(m.has("pink"));


const ob={name:"ayush",age:50}

console.log(ob)

ob.sex="male";

console.log(typeof(ob))

m.forEach(function(value,key){
    console.log(key+" "+value);
})


console.log(m.entries());