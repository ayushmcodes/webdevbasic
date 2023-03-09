function add(g1,g2){ //this is a function declaration
    return g1+g2;
}

const val=add(1,2);
console.log(val);

var mul=function(a,b){ //this is a anonymus function expression
    return a*b;
}

console.log(mul(5,3));

console.log(typeof(mul));

var sub=function subtract(a,b){//this is a named function expression
    return a-b;
}

console.log(sub(5,1));

console.log(typeof(sub));

console.log(typeof(subtract));


//arrow function below
var value=(a,b)=>a*b;
console.log(value(3,4));
console.log(typeof(value));

var fun1=(a,b)=>{
    c=5;
    return (a+b)*c;
}

console.log(fun1(2,3));

//below demonstrates arrow function without parameter
var fun2=()=>{
    return "i am arrow function without any parameter";
}

console.log(fun2());

jh=""

console.log(jh);
console.log(typeof(jh));

arr=[4,9,25]
sqr_arr=arr.map(Math.sqrt);
console.log(arr);
console.log(sqr_arr);

//using arrow function inside another function
arr=["ayush","malik","web","developer"]
len=arr.map((string)=>string.length);
console.log(arr);
console.log(len);

neww=arr.map((string)=>string+" new");
console.log(neww)

