const addtwo=(num)=>{
    return num+2;
}

console.log(addtwo(3));

const multiplybytwo=(num)=>(num*2);


console.log(multiplybytwo(4));

const addfour=num=>num+4;

console.log(addfour(1));

const nums=(first, ...rest)=>rest;

console.log(nums(1,2,3,4,5));

a=nums(1,2,3,4,5,6);

const f=()=>({
    name:"ayush",
    age:21
})

const k=()=>"hello";

console.log(k())

console.log(f().age)

